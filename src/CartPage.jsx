import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Card,
  Button,
  Row,
  Col,
  Modal,
  Form,
  InputGroup,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // amounts
  const [subtotal, setSubtotal] = useState(0);
  const [gstAmount, setGstAmount] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [animatedAmount, setAnimatedAmount] = useState(0);

  // ui states
  const [loading, setLoading] = useState(true);
  const [confirmDelete, setConfirmDelete] = useState({ show: false, id: null });

  // coupon states
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponMessage, setCouponMessage] = useState('');

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
        recalculateTotals(res.data, appliedCoupon);

        // thoda sa loading effect
        setTimeout(() => setLoading(false), 700);
      } catch (error) {
        console.error('Error fetching cart:', error.response?.data || error.message);
        setLoading(false);
      }
    };

    fetchCart();
    // eslint-disable-next-line
  }, [navigate]);

  // ---------- Animated Number ----------
  const animateAmount = (target) => {
    let start = 0;
    const duration = 600;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setAnimatedAmount(Math.round(target));
        clearInterval(timer);
      } else {
        setAnimatedAmount(Math.round(start));
      }
    }, 16);
  };

  // ---------- Totals + GST + Delivery + Discount ----------
  const recalculateTotals = (items, coupon) => {
    const sub = items.reduce(
      (acc, item) =>
        acc + item.product.productdiscounted_price * item.quantity,
      0
    );

    const gst = sub * 0.18; // 18% GST
    const delivery = sub > 0 && sub < 999 ? 49 : 0; // <999 => 49, else free

    let discount = 0;

    if (coupon) {
      const code = coupon.toUpperCase();
      if (code === 'INDOKONA50') {
        discount = 50; // flat 50
      } else if (code === 'SALE10') {
        discount = sub * 0.1; // 10% of subtotal
      } else if (code === 'FIRST100') {
        discount = 100; // flat 100
      }
    }

    const gross = sub + gst + delivery;
    if (discount > gross) discount = gross; // safety

    const finalPayable = Math.max(gross - discount, 0);

    setSubtotal(sub);
    setGstAmount(gst);
    setDeliveryCharge(delivery);
    setDiscountAmount(discount);
    setFinalAmount(finalPayable);
    animateAmount(finalPayable);
  };

  // ---------- Update Qty ----------
  const updateQty = async (id, quantity) => {
    const token = localStorage.getItem('access_token');
    try {
      const res = await axios.patch(
        `https://indokonabackend-1.onrender.com/api/cart/${id}/`,
        { quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const updated = cartItems.map((item) =>
        item.id === id ? res.data : item
      );
      setCartItems(updated);
      recalculateTotals(updated, appliedCoupon);
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const increaseQty = (id, qty) => {
    updateQty(id, qty + 1);
  };

  const decreaseQty = (id, qty) => {
    if (qty > 1) {
      updateQty(id, qty - 1);
    }
  };

  // ---------- Delete Item with Confirm ----------
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
      const updated = cartItems.filter(
        (item) => item.id !== confirmDelete.id
      );
      setCartItems(updated);
      recalculateTotals(updated, appliedCoupon);
      setConfirmDelete({ show: false, id: null });
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  // ---------- Coupon Handling ----------
  const handleApplyCoupon = () => {
    const code = couponCode.trim().toUpperCase();

    if (!code) {
      setAppliedCoupon(null);
      setCouponMessage('Please enter a coupon code.');
      recalculateTotals(cartItems, null);
      return;
    }

    const validCodes = ['INDOKONA50', 'SALE10', 'FIRST100'];

    if (!validCodes.includes(code)) {
      setAppliedCoupon(null);
      setCouponMessage('Invalid coupon code.');
      recalculateTotals(cartItems, null);
      return;
    }

    setAppliedCoupon(code);

    if (code === 'INDOKONA50') {
      setCouponMessage('INDOKONA50 applied: ₹50 OFF');
    } else if (code === 'SALE10') {
      setCouponMessage('SALE10 applied: 10% OFF on subtotal');
    } else if (code === 'FIRST100') {
      setCouponMessage('FIRST100 applied: ₹100 OFF');
    }

    recalculateTotals(cartItems, code);
  };

  // ---------- Payment ----------
  const handlePayment = () => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      alert('Please login to continue.');
      navigate('/login');
      return;
    }

    const options = {
      key: 'rzp_test_1234567890abc',
      amount: Math.round(finalAmount) * 100, // final payable amount
      currency: 'INR',
      name: 'Indokona Store',
      description: 'Cart Payment',
      image: '/logo.png',
      theme: { color: '#6a11cb' },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // ================== UI + CUSTOM CSS ==================
  return (
    <>
      <style>{`
        body {
          background: radial-gradient(circle at top, #1a1f3b, #050711) !important;
        }

        .cart-title {
          color: #ffffff;
          font-size: 34px;
          text-align: center;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .cart-subtitle {
          color: #9fa4c4;
          text-align: center;
          margin-bottom: 30px;
          font-size: 14px;
        }

        .cart-card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(16px);
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 8px 30px rgba(0,0,0,0.4);
          transition: 0.35s ease;
        }

        .cart-card:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 12px 40px rgba(0,0,0,0.55);
        }

        .cart-img {
          height: 210px;
          border-radius: 18px 18px 0 0;
          object-fit: cover;
        }

        .cart-card .card-title {
          color: #ffffff;
          font-weight: 600;
        }

        .cart-card .card-text {
          color: #d3d6f3;
        }

        .qty-btn {
          background: #2f3246 !important;
          border: none !important;
          border-radius: 10px !important;
          font-size: 16px !important;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .qty-btn:hover {
          background: #414663 !important;
        }

        .remove-btn {
          background: linear-gradient(135deg, #ff416c, #ff4b2b) !important;
          border: none !important;
          border-radius: 12px !important;
          width: 100%;
          font-weight: 600;
        }

        .remove-btn:hover {
          filter: brightness(1.05);
        }

        .skeleton-card {
          background: linear-gradient(
            90deg,
            #1b1e30 0px,
            #252843 40px,
            #1b1e30 80px
          );
          background-size: 600px 100%;
          height: 280px;
          border-radius: 18px;
          animation: shimmer 1.4s infinite linear;
        }

        @keyframes shimmer {
          0% { background-position: -600px 0; }
          100% { background-position: 600px 0; }
        }

        .empty-cart-img {
          width: 260px;
          display: block;
          margin: auto;
          filter: brightness(0.9);
        }

        .empty-cart-text {
          color: #dadfff;
          margin-top: 18px;
          font-size: 18px;
        }

        .order-summary-wrapper {
          max-width: 780px;
          margin: 35px auto 0;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .coupon-box,
        .summary-box {
          background: rgba(10,12,28,0.9);
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.06);
          padding: 18px 20px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.45);
        }

        .coupon-title {
          color: #ffffff;
          font-weight: 600;
          margin-bottom: 10px;
          font-size: 16px;
        }

        .coupon-message {
          margin-top: 8px;
          font-size: 13px;
        }

        .coupon-message.success {
          color: #00e676;
        }

        .coupon-message.error {
          color: #ff6b6b;
        }

        .coupon-input .form-control {
          background: #14172b;
          border-radius: 12px 0 0 12px;
          border: 1px solid #303552;
          color: #ffffff;
        }

        .coupon-input .form-control:focus {
          box-shadow: none;
          border-color: #6a11cb;
        }

        .coupon-input .btn {
          border-radius: 0 12px 12px 0;
          font-weight: 600;
        }

        .summary-title {
          color: #ffffff;
          font-weight: 600;
          font-size: 16px;
          margin-bottom: 10px;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 6px;
          font-size: 14px;
          color: #c5c9ff;
        }

        .summary-row.total-row {
          margin-top: 10px;
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          border-top: 1px dashed rgba(255,255,255,0.2);
          padding-top: 10px;
        }

        .summary-savings {
          font-size: 13px;
          color: #00e676;
          margin-top: 4px;
        }

        .coupon-chip {
          display: inline-block;
          margin-top: 5px;
          padding: 3px 10px;
          border-radius: 999px;
          background: rgba(106,17,203,0.15);
          color: #c9a7ff;
          font-size: 11px;
          border: 1px solid rgba(106,17,203,0.6);
        }

        .total-box {
          color: white;
          background: linear-gradient(135deg, #6a11cb, #2575fc);
          padding: 20px;
          text-align: center;
          border-radius: 20px;
          width: 80%;
          max-width: 420px;
          margin: 25px auto 10px;
          font-size: 22px;
          font-weight: bold;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .pay-btn {
          background: #00c853 !important;
          border: none !important;
          padding: 12px 32px !important;
          border-radius: 12px !important;
          font-size: 18px;
          font-weight: 700;
          box-shadow: 0 8px 24px rgba(0,200,83,0.35);
        }

        .pay-btn:hover {
          background: #00e676 !important;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .order-summary-wrapper {
            margin-top: 25px;
          }
          .total-box {
            width: 100%;
          }
        }
      `}</style>

      <Container className="mt-4 mb-5">
        <h2 className="cart-title">🛒 Your Cart</h2>
        <p className="cart-subtitle">
          Review your items, apply coupons, and complete payment securely.
        </p>

        {/* ---------- LOADING SHIMMER ---------- */}
        {loading ? (
          <Row>
            {[1, 2, 3].map((n) => (
              <Col md={4} key={n} className="mb-4">
                <div className="skeleton-card" />
              </Col>
            ))}
          </Row>
        ) : cartItems.length === 0 ? (
          <div className="text-center mt-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="Empty Cart"
              className="empty-cart-img"
            />
            <h4 className="empty-cart-text">Your cart is empty</h4>
            <p className="text-muted">Add some products to get started.</p>
          </div>
        ) : (
          <>
            {/* ---------- CART ITEMS ---------- */}
            <Row>
              {cartItems.map((item) => (
                <Col md={4} key={item.id} className="mb-4">
                  <Card className="cart-card">
                    <Card.Img
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
                          onClick={() =>
                            decreaseQty(item.id, item.quantity)
                          }
                        >
                          −
                        </Button>
                        <span className="mx-3 text-light">
                          {item.quantity}
                        </span>
                        <Button
                          className="qty-btn"
                          size="sm"
                          onClick={() =>
                            increaseQty(item.id, item.quantity)
                          }
                        >
                          +
                        </Button>
                      </div>

                      <Button
                        className="remove-btn"
                        onClick={() => openDeleteModal(item.id)}
                      >
                        Remove
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* ---------- ORDER SUMMARY + COUPON ---------- */}
            <div className="order-summary-wrapper">
              {/* Coupon */}
              <div className="coupon-box">
                <div className="coupon-title">Have a coupon?</div>
                <InputGroup className="coupon-input">
                  <Form.Control
                    placeholder="Enter coupon (INDOKONA50, SALE10, FIRST100)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <Button variant="primary" onClick={handleApplyCoupon}>
                    Apply
                  </Button>
                </InputGroup>
                {couponMessage && (
                  <div
                    className={`coupon-message ${
                      appliedCoupon ? 'success' : 'error'
                    }`}
                  >
                    {couponMessage}
                  </div>
                )}
                {appliedCoupon && (
                  <div className="coupon-chip">
                    Applied: {appliedCoupon}
                  </div>
                )}
              </div>

              {/* Summary */}
              <div className="summary-box">
                <div className="summary-title">Order Summary</div>
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>GST (18%)</span>
                  <span>₹{gstAmount.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Delivery</span>
                  <span>
                    {deliveryCharge === 0
                      ? 'Free'
                      : `₹${deliveryCharge.toFixed(2)}`}
                  </span>
                </div>
                <div className="summary-row">
                  <span>Coupon Discount</span>
                  <span>
                    {discountAmount > 0
                      ? `- ₹${discountAmount.toFixed(2)}`
                      : '₹0.00'}
                  </span>
                </div>
                <div className="summary-row total-row">
                  <span>Final Payable</span>
                  <span>₹{finalAmount.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="summary-savings">
                    You saved ₹{discountAmount.toFixed(2)} with offers & coupons.
                  </div>
                )}
              </div>
            </div>

            {/* ---------- TOTAL + PAY BUTTON (BIG) ---------- */}
            <div className="text-center mt-3">
              <div className="total-box">
                Payable Amount: ₹{animatedAmount}
              </div>
              <Button className="pay-btn mt-2" onClick={handlePayment}>
                Proceed to Pay
              </Button>
            </div>
          </>
        )}

        {/* ---------- DELETE CONFIRM MODAL ---------- */}
        <Modal
          show={confirmDelete.show}
          onHide={() => setConfirmDelete({ show: false, id: null })}
          centered
        >
          <Modal.Body className="text-center">
            <h5>Remove this item from cart?</h5>
            <p className="text-muted">
              You can always add it again from the product page.
            </p>
            <div className="mt-3">
              <Button
                variant="danger"
                className="me-2"
                onClick={confirmRemove}
              >
                Yes, Remove
              </Button>
              <Button
                variant="secondary"
                onClick={() => setConfirmDelete({ show: false, id: null })}
              >
                Cancel
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};

export default CartPage;