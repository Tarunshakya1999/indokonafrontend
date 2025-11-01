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
          "https://indokonabackend-1.onrender.com/api/product/",
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

      {/* Title */}
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

                <h5 className="fw-bold">{product.productname}</h5>

                <Card.Text>
                  {expanded[product.id]
                    ? product.productdescription
                    : product.productdescription.slice(0, 50)}

                  {product.productdescription.length > 50 && (
                    <span
                      onClick={() => toggleDescription(product.id)}
                      className="read-more-btn"
                    >
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

                <div className="d-flex gap-2 my-2">
                  <Button className="btn-cart" onClick={() => addToCart(product.id)}>
                    <FaShoppingCart /> Add to Cart
                  </Button>

                  <Button className="btn btn-success" onClick={() => navigate("/cart")}>
                    <FaBolt /> Buy Now
                  </Button>

                <Button className="btn-share mb-2" onClick={() => shareProduct(product)}>
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
        .gradient-text {background: linear-gradient(90deg,#ff6a00,#ee0979); -webkit-background-clip:text; color:transparent;}
        .product-card {border-radius:12px; transition:.3s; backdrop-filter:blur(10px);}
        .product-card:hover {transform:scale(1.03); box-shadow:0 8px 20px rgba(0,0,0,0.2);}
        .read-more-btn {color:#0066ff; cursor:pointer; font-weight:600; margin-left:5px;}
        .btn-cart {background:#ff7f00;border:none;}
        .btn-cart:hover {background:#ff5e00;}
        
        .btn-share {background:#005eff;border:none;}
        .btn-share:hover {background:#0045c9;}
        .social-icons a {font-size:20px;margin-right:10px;transition:.3s;color:#000;}
        .social-icons .wa {color:#25D366;}
        .social-icons .fb {color:#1877F2;}
        .social-icons .ig {color:#E1306C;}
        .social-icons a:hover {transform:scale(1.2);}
        .scroll-banner {background:#000;color:#fff;padding:7px 0;margin-bottom:10px;overflow:hidden;white-space:nowrap;}
        .scroll-banner span {display:inline-block;padding-left:100%;animation:scrollText 12s linear infinite;}
        @keyframes scrollText {0%{transform:translateX(0);}100%{transform:translateX(-100%);}}
      `}</style>
    </>
  );
};

export default ProductList;
