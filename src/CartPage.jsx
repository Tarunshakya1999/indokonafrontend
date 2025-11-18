import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  // ✅ Fetch Cart Items (with JWT Token)
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

  // ✅ Calculate Total
  const calculateTotal = (items) => {
    const total = items.reduce(
      (acc, item) => acc + item.product.productdiscounted_price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  // ✅ Increase Quantity
  const increaseQty = async (id, quantity) => {
    const token = localStorage.getItem('access_token');
    try {
      const res = await axios.patch(
        `https://indokonabackend-1.onrender.com/api/cart/${id}/`,
        { quantity: quantity + 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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

  // ✅ Decrease Quantity
  const decreaseQty = async (id, quantity) => {
    if (quantity <= 1) return;
    const token = localStorage.getItem('access_token');
    try {
      const res = await axios.patch(
        `https://indokonabackend-1.onrender.com/api/cart/${id}/`,
        { quantity: quantity - 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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

  // ✅ Remove Item from Cart
  const removeItem = async (id) => {
    const token = localStorage.getItem('access_token');
    try {
      await axios.delete(
        `https://indokonabackend-1.onrender.com/api/cart/${id}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedCart = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCart);
      calculateTotal(updatedCart);
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  // ✅ Razorpay Payment
  const handlePayment = async () => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      alert('Please login to continue.');
      navigate('/login');
      return;
    }

    const options = {
      key: "rzp_test_1234567890abc", // 👈 Replace with your Razorpay test key
      amount: totalPrice * 100, // paise me amount
      currency: "INR",
      name: "Indokona Store",
      description: "Cart Payment",
      image: "/logo.png", // optional
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "User",
        email: "user@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <Container className='mt-5'>
      <h2 className="mb-4">🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in your cart yet.</p>
      ) : (
        <>
          <Row>
            {cartItems.map((item) => (
              <Col md={4} key={item.id} className='mb-3'>
                <Card className="shadow-sm">
                  <Card.Img
                    variant="top"
                    src={item.product.productimg}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{item.product.productname}</Card.Title>
                    <Card.Text>Price: ₹{item.product.productdiscounted_price}</Card.Text>
                    <div className="d-flex align-items-center mb-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => decreaseQty(item.id, item.quantity)}
                      >
                        −
                      </Button>
                      <span className="mx-3">{item.quantity}</span>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => increaseQty(item.id, item.quantity)}
                      >
                        +
                      </Button>
                    </div>
                    <Button
                      variant="danger"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* ✅ Total + Pay Button */}
          <div className="text-center mt-4">
            <h4>Total Price: ₹{totalPrice}</h4>
            <Button variant="success" className="mt-3" onClick={handlePayment}>
              Proceed to Pay
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default CartPage;
