import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

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
          {
            headers: { Authorization: `Bearer ${token}` }, 
          }
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

  // ✅ Share Product Feature
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
    <Container className='mt-5'>
      <h2 className='mb-4'>🛍️ Products</h2>
      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id} className='mb-3'>
            <Card className='shadow-sm'>
              <Card.Img
                variant='top'
                src={product.productimg}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{product.productname}</Card.Title>
                <Card.Text>{product.productdescription}</Card.Text>
                <Card.Text>₹{product.productprice}</Card.Text>
                <Card.Text>Discount Price: ₹{product.productdiscounted_price}</Card.Text>

                {/* Buttons */}
                <Button onClick={() => addToCart(product.id)}>Add to Cart</Button>
                <Button
                  variant='success'
                  className='ms-2'
                  onClick={() => navigate('/cart')}
                >
                  Buy Now
                </Button>

                {/* ✅ Share Button */}
                <Button
                  variant='info'
                  className='ms-2'
                  onClick={() => shareProduct(product)}
                >
                  📤 Share
                </Button>



                <button
  className="btn btn-success mt-3"
  onClick={() => {
    const shareUrl = `https://indokonabackend-1.onrender.com/share/product/${id}/`;

    if (navigator.share) {
      navigator.share({
        title: product.productname,
        text: product.productdescription,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert("Product link copied! Share anywhere ✅");
    }
  }}
>
  Share Product 📩
</button>


                {/* ✅ Quick Social Links */}
                <div className='mt-2'>
                  <a
                    className="btn btn-success btn-sm me-2"
                    href={`https://api.whatsapp.com/send?text=Check this Product 👉 ${window.location.origin}/product/${product.id}`}
                    target="_blank"
                  >
                    WhatsApp
                  </a>

                  <a
                    className="btn btn-primary btn-sm me-2"
                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}/product/${product.id}`}
                    target="_blank"
                  >
                    Facebook
                  </a>

                  <a
                    className="btn btn-dark btn-sm"
                    href={`https://www.instagram.com/?url=${window.location.origin}/product/${product.id}`}
                    target="_blank"
                  >
                    Instagram
                  </a>
                </div>

                {/* Admin buttons */}
                {isAdmin && (
                  <div className='mt-3'>
                    <Button
                      variant='warning'
                      size='sm'
                      onClick={() => editProduct(product.id)}
                    >
                      ✏️ Edit Product
                    </Button>
                    <Button
                      variant='danger'
                      size='sm'
                      className='ms-2'
                      onClick={() => deleteProduct(product.id)}
                    >
                      🗑️ Delete Product
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
