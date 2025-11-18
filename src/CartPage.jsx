import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Button, Row, Col, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [animatedPrice, setAnimatedPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [confirmDelete, setConfirmDelete] = useState({ show: false, id: null });

  const navigate = useNavigate();

  // ---------- Fetch Cart ----------
  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem('access_token');
      if (!token) {
        alert('Please login to view your cart.');
        navigate('/login');
        return;
      }

      try {
        const res = await axios.get(
          'https://indokonabackend-1.onrender.com/api/cart/',
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setCartItems(res.data);
        calculateTotal(res.data);

        setTimeout(() => setLoading(false), 1000);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCart();
  }, [navigate]);

  // ---------- Price Animation ----------
  const animatePrice = (target) => {
    let start = 0;
    const duration = 800;
    const step = target / (duration / 16);

    const counter = setInterval(() => {
      start += step;
      if (start >= target) {
        setAnimatedPrice(target);
        clearInterval(counter);
      } else {
        setAnimatedPrice(Math.floor(start));
      }
    }, 16);
  };

  const calculateTotal = (items) => {
    const total = items.reduce(
      (acc, item) => acc + item.product.productdiscounted_price * item.quantity, 0
    );
    setTotalPrice(total);
    animatePrice(total);
  };

  // ---------- Quantity Update ----------
  const increaseQty = async (id, qty) => {
    updateQty(id, qty + 1);
  };

  const decreaseQty = async (id, qty) => {
    if (qty > 1) updateQty(id, qty - 1);
  };

  const updateQty = async (id, qty) => {
    const token = localStorage.getItem('access_token');
    try {
      const res = await axios.patch(
        `https://indokonabackend-1.onrender.com/api/cart/${id}/`,
        { quantity: qty },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const updated = cartItems.map(item =>
        item.id === id ? res.data : item
      );

      setCartItems(updated);
      calculateTotal(updated);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // ---------- Delete Confirmation ----------
  const openDeleteModal = (id) => {
    setConfirmDelete({ show: true, id });
  };

  const confirmRemove = async () => {
    const token = localStorage.getItem('access_token');
    try {
      await axios.delete(
        `https://indokonabackend-1.onrender.com/api/cart/${confirmDelete.id}/`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const updated = cartItems.filter(item => item.id !== confirmDelete.id);
      setCartItems(updated);
      calculateTotal(updated);
      setConfirmDelete({ show: false, id: null });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // ---------- Razorpay ----------
  const handlePayment = () => {
    const options = {
      key: "rzp_test_1234567890abc",
      amount: totalPrice * 100,
      currency: "INR",
      name: "Indokona Store",
      description: "Cart Payment",
      image: "/logo.png",
      theme: { color: "#6a11cb" },
    };

    new window.Razorpay(options).open();
  };

  // ====================== UI + CSS ======================
  return (
    <>
      <style>{`
        body {
          background: #0d0f1a !important;
        }

        .cart-title {
          color: #fff;
          font-size: 34px;
          text-align: center;
          font-weight: 700;
          margin-bottom: 25px;
        }

        .cart-card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(12px);
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 8px 30px rgba(0,0,0,0.4);
          transition: 0.4s ease;
        }

        .cart-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.5);
        }

        .cart-img {
          height: 210px;
          border-radius: 18px 18px 0 0;
          object-fit: cover;
        }

        .qty-btn {
          background: #333 !important;
          border: none !important;
          border-radius: 10px !important;
        }

        .remove-btn {
          background: linear-gradient(45deg, #ff416c, #ff4b2b) !important;
          border: none !important;
          border-radius: 12px !important;
          width: 100%;
          font-weight: 600;
        }

        .skeleton-card {
          background: #1c1f2e;
          height: 280px;
          border-radius: 18px;
          animation: shimmer 2s infinite linear;
        }

        @keyframes shimmer {
          0% { background-position: -500px 0; }
          100% { background-position: 500px 0; }
        }

        .total-box {
          color: white;
          background: linear-gradient(135deg, #6a11cb, #2575fc);
          padding: 20px;
          text-align: center;
          border-radius: 20px;
          width: 70%;
          margin: auto;
          font-size: 24px;
          font-weight: bold;
          box-shadow: 0 8px 25px rgba(0,0,0,0.4);
        }

        .pay-btn {
          background: #00c853 !important;
          border: none !important;
          padding: 12px 30px !important;
          border-radius: 12px !important;
          font-size: 18px;
          font-weight: bold;
        }

        .empty-cart-img {
          width: 260px;
          display: block;
          margin: auto;
          filter: brightness(0.8);
        }
      `}</style>

      <Container className="mt-4 mb-5">
        <h2 className="cart-title">🛒 Your Cart</h2>

        {/* ---------- LOADING SHIMMER ---------- */}
        {loading ? (
          <Row>
            {[1, 2, 3].map((n) => (
              <Col md={4} key={n} className="mb-4">
                <div className="skeleton-card"></div>
              </Col>
            ))}
          </Row>
        ) : cartItems.length === 0 ? (
          <div className="text-center mt-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              className="empty-cart-img"
            />
            <h4 className="text-light mt-3">Your cart is empty</h4>
          </div>
        ) : (
          <>
            <Row>
              {cartItems.map((item) => (
                <Col md={4} key={item.id} className="mb-4">
                  <Card className="cart-card">
                    <Card.Img src={item.product.productimg} className="cart-img" />
                    <Card.Body>
                      <Card.Title className="text-white">
                        {item.product.productname}
                      </Card.Title>

                      <Card.Text className="text-light">
                        Price: ₹{item.product.productdiscounted_price}
                      </Card.Text>

                      <div className="d-flex align-items-center mb-3">
                        <Button className="qty-btn" size="sm" onClick={() => decreaseQty(item.id, item.quantity)}>−</Button>
                        <span className="mx-3 text-light">{item.quantity}</span>
                        <Button className="qty-btn" size="sm" onClick={() => increaseQty(item.id, item.quantity)}>+</Button>
                      </div>

                      <Button className="remove-btn" onClick={() => openDeleteModal(item.id)}>
                        Remove
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* ---------- TOTAL + PAY ---------- */}
            <div className="text-center mt-4">
              <div className="total-box">
                Total: ₹{animatedPrice}
              </div>

              <Button className="pay-btn mt-3" onClick={handlePayment}>
                Proceed to Pay
              </Button>
            </div>
          </>
        )}

        {/* ---------- DELETE CONFIRMATION MODAL ---------- */}
        <Modal show={confirmDelete.show} onHide={() => setConfirmDelete({ show: false })}>
          <Modal.Body className="text-center">
            <h5>Are you sure you want to remove this item?</h5>
            <Button
              variant="danger"
              className="mt-3 me-2"
              onClick={confirmRemove}
            >
              Yes, Remove
            </Button>
            <Button
              variant="secondary"
              className="mt-3"
              onClick={() => setConfirmDelete({ show: false })}
            >
              Cancel
            </Button>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};

export default CartPage;