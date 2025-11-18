import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

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
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setCartItems(res.data);
        calculateTotal(res.data);
      } catch (error) {
        console.error('Error fetching cart:', error.response?.data || error.message);
        if (error.response?.status === 401) {
          alert('Session expired. Please login again.');
          navigate('/login');
        }
      }
    };

    fetchCart();
  }, [navigate]);

  const calculateTotal = (items) => {
    const total = items.reduce(
      (acc, item) => acc + item.product.productdiscounted_price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  const increaseQty = async (id, quantity) => {
    const token = localStorage.getItem('access_token');
    try {
      const res = await axios.patch(
        `https://indokonabackend-1.onrender.com/api/cart/${id}/`,
        { quantity: quantity + 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const updatedCart = cartItems.map((item) =>
        item.id === id ? res.data : item
      );
      setCartItems(updatedCart);
      calculateTotal(updatedCart);
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const decreaseQty = async (id, quantity) => {
    if (quantity <= 1) return;

    const token = localStorage.getItem('access_token');

    try {
      const res = await axios.patch(
        `https://indokonabackend-1.onrender.com/api/cart/${id}/`,
        { quantity: quantity - 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const updatedCart = cartItems.map((item) =>
        item.id === id ? res.data : item
      );
      setCartItems(updatedCart);
      calculateTotal(updatedCart);
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const removeItem = async (id) => {
    const token = localStorage.getItem('access_token');
    try {
      await axios.delete(
        `https://indokonabackend-1.onrender.com/api/cart/${id}/`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const updatedCart = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCart);
      calculateTotal(updatedCart);
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const handlePayment = () => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      alert('Please login to continue.');
      navigate('/login');
      return;
    }

    const options = {
      key: "rzp_test_1234567890abc",
      amount: totalPrice * 100,
      currency: "INR",
      name: "Indokona Store",
      description: "Cart Payment",
      image: "/logo.png",
      theme: { color: "#6a11cb" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <>
      {/* ---------- BEAUTIFUL CUSTOM CSS ---------- */}
      <style>{`
        body {
          background: #0c0f1a !important;
        }

        .cart-title {
          color: #fff;
          font-weight: 700;
          font-size: 32px;
          letter-spacing: 0.5px;
          text-align: center;
          margin-bottom: 30px;
        }

        .cart-card {
          background: linear-gradient(135deg, #1d1f27, #262a33);
          border: none;
          border-radius: 18px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
          transition: 0.3s ease;
        }

        .cart-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.45);
        }

        .cart-img {
          border-top-left-radius: 18px;
          border-top-right-radius: 18px;
          height: 210px;
          object-fit: cover;
        }

        .card-title {
          color: #fff !important;
          font-weight: 600;
        }

        .card-text {
          color: #ddd !important;
        }

        .qty-btn {
          background: #444 !important;
          border-radius: 8px !important;
          border: none !important;
          padding: 4px 10px;
          transition: 0.2s;
        }

        .qty-btn:hover {
          background: #666 !important;
        }

        .remove-btn {
          background: #d9534f !important;
          border: none !important;
          border-radius: 10px !important;
          width: 100%;
          margin-top: 8px;
        }

        .total-box {
          color: white;
          background: linear-gradient(135deg, #6a11cb, #2575fc);
          padding: 18px;
          border-radius: 15px;
          font-size: 22px;
          font-weight: bold;
          width: 60%;
          margin: auto;
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        }

        .pay-btn {
          background: #00c853 !important;
          border: none !important;
          font-size: 18px !important;
          padding: 12px 30px !important;
          border-radius: 12px !important;
          margin-top: 18px;
          transition: 0.3s;
        }

        .pay-btn:hover {
          background: #00e676 !important;
          transform: translateY(-3px);
        }
      `}</style>

      <Container className="mt-4 mb-5">
        <h2 className="cart-title">🛒 Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-light text-center">No items in your cart yet.</p>
        ) : (
          <>
            <Row>
              {cartItems.map((item) => (
                <Col md={4} key={item.id} className="mb-4">
                  <Card className="cart-card">
                    <Card.Img
                      variant="top"
                      src={item.product.productimg}
                      className="cart-img"
                    />
                    <Card.Body>
                      <Card.Title>{item.product.productname}</Card.Title>
                      <Card.Text>
                        Price: ₹{item.product.productdiscounted_price}
                      </Card.Text>

                      <div className="d-flex align-items-center mb-3">
                        <Button
                          className="qty-btn"
                          size="sm"
                          onClick={() => decreaseQty(item.id, item.quantity)}
                        >
                          −
                        </Button>

                        <span className="mx-3 text-light">{item.quantity}</span>

                        <Button
                          className="qty-btn"
                          size="sm"
                          onClick={() => increaseQty(item.id, item.quantity)}
                        >
                          +
                        </Button>
                      </div>

                      <Button
                        className="remove-btn"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            <div className="text-center mt-4">
              <div className="total-box">
                Total Price: ₹{totalPrice}
              </div>

              <Button className="pay-btn" onClick={handlePayment}>
                Proceed to Pay
              </Button>
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default CartPage;
