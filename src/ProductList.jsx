import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navbar2 from "./Navbar2";
import AOS from "aos";
import "aos/dist/aos.css";

// Icons
import { FaRupeeSign, FaShoppingCart, FaBolt, FaShareAlt, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [expanded, setExpanded] = useState({});
  const navigate = useNavigate();

  const toggleDescription = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) return alert("Please login first!");

        const res = await axios.get(
          "https://indokonabackend-1.onrender.com/api/myproducts/",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setProducts(res.data);
      } catch (err) {
        console.error(err);
        if (err.response?.status === 401) {
          alert("Session expired! Please login again.");
          navigate("/login");
        }
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username?.toLowerCase() === "admin") setIsAdmin(true);
  }, []);

  const addToCart = async (id) => {
    const token = localStorage.getItem("access_token");
    if (!token) return navigate("/login");

    try {
      await axios.post(
        "https://indokonabackend-1.onrender.com/api/cart/",
        { product_id: id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Added to cart ✅");
    } catch (error) {
      console.error(error);
      alert("Error adding to cart");
    }
  };

  const deleteProduct = async (id) => {
    const token = localStorage.getItem("access_token");
    if (!token) return navigate("/login");

    if (!window.confirm("Delete product?")) return;

    try {
      await axios.delete(
        `https://indokonabackend-1.onrender.com/api/product/${id}/`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setProducts(products.filter((product) => product.id !== id));
    } catch {
      alert("Delete failed");
    }
  };

  const editProduct = (id) => navigate(`/edit-product/${id}`);

  const shareProduct = async (product) => {
    const shareUrl = `${window.location.origin}/product/${product.id}`;

    if (navigator.share) {
      await navigator.share({
        title: product.productname,
        text: `Check this product`,
        url: shareUrl,
      });
    } else {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank");
    }
  };

  return (
    <>
      <Navbar2 />

      {/* Scroll banner */}
      <div className="scroll-banner">
        <span>✨ Welcome To Indokona Digital Store — Premium Digital Products ✨</span>
      </div>

      <h2 className="text-center my-4 fw-bold gradient-text">🔥 Digital Products Gallery</h2>

      <Row className="px-3">
        {products.map((product) => (
          <Col md={4} sm={6} xs={12} key={product.id} className="mb-4" data-aos="fade-up">
            <Card className="shadow-lg product-card">
              <Card.Img
                src={product.productimg}
                style={{ height: "230px", objectFit: "cover" }}
                className="rounded-top"
              />

              <Card.Body>
                <h5 className="fw-bold product-title-gold">{product.productname}</h5>

                <Card.Text>
                  {expanded[product.id]
                    ? product.productdescription
                    : product.productdescription.slice(0, 50)}
                  {product.productdescription.length > 50 && (
                    <span onClick={() => toggleDescription(product.id)} className="read-more-btn">
                      {expanded[product.id] ? " Read Less ▲" : " Read More ▼"}
                    </span>
                  )}
                </Card.Text>

                <h6 className="text-success fw-bold">
                  <FaRupeeSign /> {product.productdiscounted_price}{" "}
                  <span className="text-muted small text-decoration-line-through text-danger">
                    <FaRupeeSign /> {product.productprice}
                  </span>
                </h6>

                <div className="d-flex gap-3 my-2">
                  <Button className="btn-cart" onClick={() => addToCart(product.id)}>
                    <FaShoppingCart /> Add to Cart
                  </Button>

                  <Button className="btn-buy" onClick={() => navigate("/cart")} style={{background:"#28a745",color:"white"}}>
                    <FaBolt /> Buy Now
                  </Button>

                  <Button className="btn-share" onClick={() => shareProduct(product)}>
                    <FaShareAlt /> Share
                  </Button>
                </div>

                <div className="social-icons mt-2">
                  <a className="wa" target="_blank" href={`https://api.whatsapp.com/send?text=${window.location.origin}/product/${product.id}`}>
                    <FaWhatsapp />
                  </a>
                  <a className="fb" target="_blank" href={`https://facebook.com/sharer/sharer.php?u=${window.location.origin}/product/${product.id}`}>
                    <FaFacebook />
                  </a>
                  <a className="ig" target="_blank" href={`https://instagram.com/?url=${window.location.origin}/product/${product.id}`}>
                    <FaInstagram />
                  </a>
                </div>

                {isAdmin && (
                  <div className="mt-3">
                    <Button size="sm" variant="warning" onClick={() => editProduct(product.id)}>✏️ Edit</Button>
                    <Button size="sm" variant="danger" className="ms-2" onClick={() => deleteProduct(product.id)}>🗑 Delete</Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Styles */}
      <style>{`

        .product-title-gold {
          background: linear-gradient(90deg, #ffcf40, #d4a017, #ffdd66);
          -webkit-background-clip: text;
          color: transparent;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .product-card {
          border-radius: 16px;
          transition: 0.35s ease-in-out;
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 215, 0, 0.25);
        }
        .product-card:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 12px 30px rgba(255,215,0,0.4);
        }

        .btn-cart {
          background: linear-gradient(90deg,#ff8100,#ff4500);
          border: none;
          border-radius: 50px;
          font-weight: 600;
        }

        .btn-cart:hover {
          background: linear-gradient(90deg,#ff9a00,#ff5300);
        }

        .btn-buy {
          border-radius: 50px;
          font-weight: 600;
          animation: pulse 1.6s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1);}
          50% { transform: scale(1.07);}
          100% { transform: scale(1);}
        }

        .btn-share {
          background: #0d6efd;
          border-radius: 50px;
          font-weight: 600;
          color: white;
        }
        .btn-share:hover {
          background:#0549b6;
        }

        .scroll-banner {
          background: black;
          color: gold;
          font-size: 16px;
          padding: 7px 0;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          overflow:hidden;
          white-space:nowrap;
        }
        .scroll-banner span {
          display:inline-block;
          padding-left:100%;
          animation:scrollText 12s linear infinite;
        }
        @keyframes scrollText {
          0%{transform:translateX(0);}
          100%{transform:translateX(-100%);}
        }

        .social-icons a {
          font-size: 22px;
          margin-right: 10px;
          transition: .3s;
        }
        .social-icons a:hover {
          transform: scale(1.25);
        }
        .wa {color:#25D366;}
        .fb {color:#1877F2;}
        .ig {color:#E1306C;}
        .read-more-btn {
          color: #ff7f00;
          cursor: pointer;
          font-weight: 600;
        }

        .gradient-text{
          background: linear-gradient(90deg,#ff6a00,#ee0979);
          -webkit-background-clip:text;
          color:transparent;
        }

      `}</style>
    </>
  );
};

export default ProductList;
