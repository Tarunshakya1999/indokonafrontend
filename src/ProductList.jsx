import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbar2 from './Navbar2';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [expanded, setExpanded] = useState({});
  const navigate = useNavigate();

  const toggleDescription = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ✅ Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('access_token'); 
        if (!token) {
          alert('Please login first!');
          return;
        }

        const res = await axios.get(
          'https://indokonabackend-1.onrender.com/api/product/',
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setProducts(res.data);
      } catch (err) {
        console.error('Error fetching products:', err);
        if (err.response?.status === 401) {
          alert('Session expired! Please login again.');
          navigate('/login');
        }
      }
    };

    fetchProducts();
  }, []);

  // ✅ Check admin
  useEffect(() => {
    const username = localStorage.getItem('username');
    if (username && username.toLowerCase() === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  // ✅ Add to Cart
  const addToCart = async (id) => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      alert('Please login first!');
      navigate('/login');
      return;
    }

    try {
      await axios.post(
        'https://indokonabackend-1.onrender.com/api/cart/',
        { product_id: id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Added to cart successfully!');
    } catch (error) {
      console.error('Error adding to cart:', error.response?.data || error.message);
      if (error.response?.status === 401) {
        alert('Session expired! Please login again.');
        navigate('/login');
      } else {
        alert('Something went wrong while adding to cart!');
      }
    }
  };

  // ✅ Delete Product
  const deleteProduct = async (id) => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      alert('Please login first!');
      navigate('/login');
      return;
    }

    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      await axios.delete(
        `https://indokonabackend-1.onrender.com/api/product/${id}/`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setProducts(products.filter((product) => product.id !== id));
      alert('Product deleted successfully!');
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Error deleting product!');
    }
  };

  // ✅ Edit Product
  const editProduct = (id) => {
    navigate(`/edit-product/${id}`);
  };

  // ✅ Share Product
  const shareProduct = async (product) => {
    const shareUrl = `${window.location.origin}/product/${product.id}`;
    const text = `Check out this product 🎁\n${product.productname}\nPrice: ₹${product.productdiscounted_price}\n\n${shareUrl}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: product.productname,
          text,
          url: shareUrl,
        });
      } catch (err) {
        console.log("Share failed:", err);
      }
    } else {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank");
    }
  };

  return (
    <>
      <style>{`
        .scroll-banner {
          width: 100%;
          background: #000;
          color: #fff;
          padding: 8px 0;
          overflow: hidden;
          white-space: nowrap;
          font-weight: 600;
        }
        .scroll-banner span {
          display: inline-block;
          padding-left: 100%;
          animation: scrollText 12s linear infinite;
        }
        @keyframes scrollText {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

      <div className='mt-5'>
        <Navbar2/>
        
        <div className="scroll-banner">
          <span>✨ Welcome To Indokona Digital Store — Premium Digital Products ✨</span>
        </div>

        <h2 className='mb-4'>🛍️ Products</h2>

        <Row>
          {products.map((product) => (
            <Col md={4} key={product.id} className='mb-3'>
              <Card className='shadow-sm'>
                
                <Card.Img variant='top' src={product.productimg}
                  style={{ height: '200px', objectFit: 'cover' }} />

                <Card.Body>
                  <Card.Title>{product.productname}</Card.Title>

                  {/* ✅ Read More / Less Description */}
                  <Card.Text>
                    {expanded[product.id]
                      ? product.productdescription
                      : product.productdescription.slice(0, 50)}

                    {product.productdescription.length > 50 && (
                      <span 
                        onClick={() => toggleDescription(product.id)}
                        style={{ color: "blue", cursor: "pointer", fontWeight: "bold" }}
                      >
                        {expanded[product.id] ? " ...Read Less" : " ...Read More"}
                      </span>
                    )}
                  </Card.Text>

                  <Card.Text>₹{product.productprice}</Card.Text>
                  <Card.Text>Discount Price: ₹{product.productdiscounted_price}</Card.Text>

                  <Button onClick={() => addToCart(product.id)}>Add to Cart</Button>
                  <Button variant='success' className='ms-2' onClick={() => navigate('/cart')}>Buy Now</Button>
                  <Button variant='info' className='ms-2' onClick={() => shareProduct(product)}>📤 Share</Button>

                  <div className='mt-2'>
                    <a className="btn btn-success btn-sm me-2"
                      href={`https://api.whatsapp.com/send?text=Check this Product 👉 ${window.location.origin}/product/${product.id}`} target="_blank">
                      WhatsApp</a>

                    <a className="btn btn-primary btn-sm me-2"
                      href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}/product/${product.id}`} target="_blank">
                      Facebook</a>

                    <a className="btn btn-dark btn-sm"
                      href={`https://www.instagram.com/?url=${window.location.origin}/product/${product.id}`} target="_blank">
                      Instagram</a>
                  </div>

                  {isAdmin && (
                    <div className='mt-3'>
                      <Button variant='warning' size='sm' onClick={() => editProduct(product.id)}>✏️ Edit Product</Button>
                      <Button variant='danger' size='sm' className='ms-2' onClick={() => deleteProduct(product.id)}>🗑️ Delete Product</Button>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default ProductList;
