import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Card, Button, Row, Col, Modal, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navbar2 from "./Navbar2";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaRupeeSign,
  FaShoppingCart,
  FaBolt,
  FaShareAlt,
  FaHeart,
  FaRegHeart,
  FaEye,
  FaBalanceScaleRight
} from "react-icons/fa";

/**
 * Premium ProductList with:
 * - 600px image box
 * - Floating price tag, badges, wishlist, add-to-cart animation
 * - Hover video (if p.productvideo)
 * - Quick View modal
 * - Compare selection + Compare modal
 * - 3D tilt hover
 * - Skeleton loading shimmer
 *
 * Paste as ProductList.jsx (single-file)
 */

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [wishlist, setWishlist] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  // Quick view modal
  const [quickProduct, setQuickProduct] = useState(null);
  const [showQuick, setShowQuick] = useState(false);

  // Compare
  const [compareSet, setCompareSet] = useState({});
  const [showCompare, setShowCompare] = useState(false);

  // 3D tilt refs map
  const tiltRefs = useRef({});

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 750, once: false });
  }, []);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("access_token");
        const res = await axios.get(
          "https://indokonabackend-1.onrender.com/api/myproducts/",
          { headers: token ? { Authorization: `Bearer ${token}` } : {} }
        );
        // ensure array
        setProducts(Array.isArray(res.data) ? res.data : []);
      } catch (e) {
        console.error(e);
        setProducts([]);
        // navigate("/login"); // keep user on page; not forcing
      } finally {
        // small delay so skeleton visible
        setTimeout(() => setLoading(false), 400);
      }
    };

    load();
  }, [navigate]);

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username?.toLowerCase() === "admin") setIsAdmin(true);
  }, []);

  const toggleDescription = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const addToCart = async (id) => {
    const token = localStorage.getItem("access_token");
    if (!token) return navigate("/login");

    const btn = document.getElementById(`cart-btn-${id}`);
    if (btn) {
      btn.classList.add("cart-anim");
      setTimeout(() => btn.classList.remove("cart-anim"), 900);
    }

    try {
      await axios.post(
        "https://indokonabackend-1.onrender.com/api/cart/",
        { product_id: id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (e) {
      console.error(e);
    }
  };

  const quickView = (product) => {
    setQuickProduct(product);
    setShowQuick(true);
  };

  const closeQuick = () => {
    setQuickProduct(null);
    setShowQuick(false);
  };

  const toggleCompare = (id) => {
    setCompareSet((prev) => {
      const copy = { ...prev };
      if (copy[id]) delete copy[id];
      else copy[id] = true;
      return copy;
    });
  };

  const openCompareModal = () => {
    setShowCompare(true);
  };

  const closeCompareModal = () => {
    setShowCompare(false);
  };

  const deleteProduct = async (id) => {
    const token = localStorage.getItem("access_token");
    if (!token) return;

    if (!window.confirm("Delete product?")) return;

    try {
      await axios.delete(
        `https://indokonabackend-1.onrender.com/api/myproducts/${id}/`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (e) {
      console.error(e);
      alert("Delete failed");
    }
  };

  const shareProduct = (product) => {
    const url = `${window.location.origin}/product/${product.id}`;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
  };

  // 3D tilt handlers
  const handleTiltMove = (e, id) => {
    const el = tiltRefs.current[id];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within element
    const y = e.clientY - rect.top; // y position within element
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy;
    const rotateX = (-dy * 6).toFixed(2);
    const rotateY = (dx * 6).toFixed(2);
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;
  };

  const handleTiltLeave = (id) => {
    const el = tiltRefs.current[id];
    if (!el) return;
    el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
    el.style.transition = "transform 400ms ease";
    setTimeout(() => (el.style.transition = ""), 400);
  };

  // selected products for compare
  const compareProducts = products.filter((p) => compareSet[p.id]);

  // small helper for badge: if backend doesn't have badge field, emulate
  const getBadge = (p) => {
    if (p.productbadge) return p.productbadge.toUpperCase();
    // fallback logic
    if (p.productdiscounted_price && +p.productdiscounted_price < 500) return "HOT";
    return "NEW";
  };

  return (
    <>
      <Navbar2 />

      <div className="scroll-banner">
        <span>✨ Premium Golden Store — Exclusive Digital Collection ✨</span>
      </div>

      <h2 className="text-center my-4 premium-heading">
        🌟 Premium Golden Collection
      </h2>

      {/* Skeleton while loading */}
      {loading ? (
        <Row className="px-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Col md={4} sm={6} xs={12} key={i} className="mb-4">
              <div className="skeleton-card">
                <div className="skeleton-img" />
                <div className="skeleton-line short" />
                <div className="skeleton-line" />
                <div className="skeleton-line half" />
                <div className="skeleton-btns">
                  <div className="skeleton-btn" />
                  <div className="skeleton-btn" />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      ) : (
        <>
          <Row className="px-3">
            {products.map((p) => {
              const badge = getBadge(p);

              return (
                <Col md={4} sm={6} xs={12} key={p.id} className="mb-4" data-aos="zoom-in">
                  <Card
                    className="product-card interactive-card"
                    onMouseMove={(e) => handleTiltMove(e, p.id)}
                    onMouseLeave={() => handleTiltLeave(p.id)}
                    ref={(el) => (tiltRefs.current[p.id] = el)}
                  >
                    {/* Wishlist Heart */}
                    <div className="wishlist-btn" onClick={() => toggleWishlist(p.id)}>
                      {wishlist[p.id] ? <FaHeart className="wish-filled" /> : <FaRegHeart className="wish-empty" />}
                    </div>

                    {/* Badge */}
                    <div className={`product-badge badge-${badge}`}>{badge}</div>

                    {/* Floating Price */}
                    <div className="floating-price">
                      <FaRupeeSign /> {p.productdiscounted_price}
                    </div>

                    {/* Compare toggle */}
                    <div className={`compare-toggle ${compareSet[p.id] ? "active" : ""}`} onClick={() => toggleCompare(p.id)}>
                      <FaBalanceScaleRight />
                    </div>

                    {/* Image or video on hover */}
                    <div className="product-img-box">
                      {p.productvideo ? (
                        // show video (muted) — autoplays when hovered via CSS pointer-events trick
                        <video className="product-media" src={p.productvideo} muted loop playsInline />
                      ) : (
                        <img className="product-img" src={p.productimg} alt={p.productname} />
                      )}
                      {/* Quick view icon */}
                      <div className="quick-view" onClick={() => quickView(p)}>
                        <FaEye /> Quick View
                      </div>
                    </div>

                    <Card.Body>
                      <h5 className="product-title">{p.productname}</h5>

                      <Card.Text className="product-desc">
                        {expanded[p.id] ? p.productdescription : (p.productdescription || "").slice(0, 60)}
                        {p.productdescription?.length > 60 && (
                          <span className="read-more" onClick={() => toggleDescription(p.id)}>
                            {expanded[p.id] ? " Read Less ▲" : " Read More ▼"}
                          </span>
                        )}
                      </Card.Text>

                      <h6 className="price-line">
                        <FaRupeeSign /> {p.productdiscounted_price}
                        <span className="cut-price">
                          <FaRupeeSign /> {p.productprice}
                        </span>
                      </h6>

                      <div className="d-flex gap-3 mt-3">
                        <Button id={`cart-btn-${p.id}`} className="btn-add" onClick={() => addToCart(p.id)}>
                          <FaShoppingCart /> Add to Cart
                        </Button>

                        <Button className="btn-buy" onClick={() => navigate("/cart")}>
                          <FaBolt /> Buy Now
                        </Button>

                        <Button className="btn-share" onClick={() => shareProduct(p)}>
                          <FaShareAlt /> Share
                        </Button>
                      </div>

                      {isAdmin && (
                        <div className="mt-3">
                          <Button size="sm" variant="warning" onClick={() => navigate(`/edit-product/${p.id}`)}>
                            ✏ Edit
                          </Button>
                          <Button size="sm" variant="danger" className="ms-2" onClick={() => deleteProduct(p.id)}>
                            🗑 Delete
                          </Button>
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>

          {/* Bottom compare bar when selections present */}
          {Object.keys(compareSet).length > 0 && (
            <div className="compare-bar">
              <div>{Object.keys(compareSet).length} selected</div>
              <div>
                <Button variant="light" className="me-2" onClick={() => setCompareSet({})}>
                  Clear
                </Button>
                <Button onClick={openCompareModal} className="btn-compare-now">
                  Compare Now
                </Button>
              </div>
            </div>
          )}
        </>
      )}

      {/* Quick View Modal */}
      <Modal show={showQuick} onHide={closeQuick} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{quickProduct?.productname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {quickProduct && (
            <div className="d-flex flex-column flex-md-row gap-3">
              <div style={{ flex: 1 }}>
                {quickProduct.productvideo ? (
                  <video src={quickProduct.productvideo} controls autoPlay muted style={{ width: "100%", borderRadius: 12 }} />
                ) : (
                  <img src={quickProduct.productimg} style={{ width: "100%", borderRadius: 12 }} alt="" />
                )}
              </div>
              <div style={{ flex: 1 }}>
                <h5 className="mb-2">{quickProduct.productname}</h5>
                <p style={{ color: "#444" }}>{quickProduct.productdescription}</p>
                <h4 className="mb-3"><FaRupeeSign /> {quickProduct.productdiscounted_price}</h4>
                <div className="d-flex gap-2">
                  <Button className="btn-add" onClick={() => addToCart(quickProduct.id)}><FaShoppingCart /> Add to Cart</Button>
                  <Button className="btn-buy" onClick={() => navigate("/cart")}><FaBolt /> Buy Now</Button>
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>

      {/* Compare Modal */}
      <Modal show={showCompare} onHide={closeCompareModal} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>Compare Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {compareProducts.length < 2 ? (
            <div className="text-center p-4">Select at least 2 products to compare.</div>
          ) : (
            <div className="compare-grid">
              {compareProducts.map((c) => (
                <div key={c.id} className="compare-col">
                  <div className="compare-media">
                    {c.productvideo ? (
                      <video src={c.productvideo} muted loop playsInline style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: 8 }} />
                    ) : (
                      <img src={c.productimg} alt="" style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: 8 }} />
                    )}
                  </div>
                  <h6 className="mt-2">{c.productname}</h6>
                  <p className="small">{c.productdescription?.slice(0, 120)}</p>
                  <div className="fw-bold"><FaRupeeSign /> {c.productdiscounted_price}</div>
                  <div className="mt-2"><Button size="sm" className="btn-add" onClick={() => addToCart(c.id)}>Add to cart</Button></div>
                </div>
              ))}
            </div>
          )}
        </Modal.Body>
      </Modal>

      {/* STYLES */}
      <style>{`
        /* === Premium + New Features Styles === */

        .premium-heading {
          background: linear-gradient(90deg, #ffde75, #e7b23a, #ffd47e);
          -webkit-background-clip: text;
          color: transparent;
          font-weight: 900;
          font-size: 2rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .product-card {
          border-radius: 20px;
          backdrop-filter: blur(14px);
          background: linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.06));
          border: 1px solid rgba(255,215,0,0.45);
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
          transition: transform 300ms ease, box-shadow 300ms ease;
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .product-card:hover { transform: translateY(-8px); box-shadow: 0 14px 40px rgba(0,0,0,0.12); }

        .interactive-card { transform-origin: center; }

        /* Wishlist Heart */
        .wishlist-btn {
          position: absolute;
          top: 18px;
          right: 18px;
          z-index: 50;
          cursor: pointer;
        }
        .wish-empty { color: #ffffffcc; font-size: 26px; transition: .3s; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4)); }
        .wish-filled { color: #ff2965; font-size: 28px; animation: pop .26s ease-in-out; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.35)); }
        @keyframes pop { 0% { transform: scale(.6);} 100% { transform: scale(1);} }

        /* Badge */
        .product-badge { position: absolute; top: 15px; left: 15px; padding: 8px 12px; border-radius: 10px; color: #fff; font-weight: 800; font-size: 12px; z-index: 40; }
        .badge-HOT { background: linear-gradient(90deg, #ff5a00, #ff0000); box-shadow: 0 6px 18px rgba(255,80,0,0.28); }
        .badge-NEW { background: linear-gradient(90deg, #00c6ff, #0072ff); box-shadow: 0 6px 18px rgba(0,114,255,0.22); }

        /* Floating price */
        .floating-price {
          position: absolute;
          top: 260px;
          left: 20px;
          background: linear-gradient(90deg,#ffd56b,#c9982d);
          padding: 8px 18px;
          border-radius: 50px;
          font-weight: 800;
          color: black;
          z-index: 25;
          box-shadow: 0 8px 22px rgba(255,215,0,0.18);
        }

        /* Compare toggle */
        .compare-toggle {
          position: absolute;
          top: 18px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255,255,255,0.06);
          padding: 8px;
          border-radius: 10px;
          z-index: 45;
          cursor: pointer;
          transition: transform .2s, background .2s;
          color: #fff;
        }
        .compare-toggle.active { background: linear-gradient(90deg,#ffd56b,#c9982d); color: #000; transform: scale(1.05); }

        /* Media box (image/video) */
        .product-img-box { height: 600px; width: 100%; overflow: hidden; border-radius: 20px 20px 0 0; background: #fafafa; position: relative; }
        .product-img { width: 100%; height: 100%; object-fit: cover; transition: transform .6s; display: block; }
        .product-media { width: 100%; height: 100%; object-fit: cover; transition: transform .6s; display: block; }

        /* Quick view overlay */
        .quick-view {
          position: absolute;
          right: 18px;
          bottom: 18px;
          background: rgba(0,0,0,0.55);
          color: #fff;
          padding: 8px 12px;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
          z-index: 35;
          backdrop-filter: blur(4px);
        }

        .product-card:hover .product-img, .product-card:hover .product-media { transform: scale(1.08); }

        /* titles & text */
        .product-title { background: linear-gradient(90deg, #ffd56b, #c9982d); -webkit-background-clip: text; color: transparent; font-weight: 800; font-size: 1.15rem; }
        .product-desc { color: #444; font-size: .95rem; line-height: 1.4; }
        .read-more { color: #dd8a00; font-weight: bold; cursor: pointer; margin-left: 6px; }

        /* price + buttons */
        .price-line { font-size: 1.1rem; font-weight: 700; color: #27a844; }
        .cut-price { margin-left: 10px; text-decoration: line-through; font-size: 0.9rem; color: #d43c3c; }

        .btn-add { background: linear-gradient(90deg, #ffc468, #ff8b00); border: none; color: black; font-weight: 700; border-radius: 50px; }
        .btn-buy { background: #28a745; font-weight: 700; border-radius: 50px; color: white; }
        .btn-share { background: #0d6efd; border-radius: 50px; color: white; font-weight: 700; }

        /* cart animation */
        #root .cart-anim { animation: cartBounce 0.8s ease-in-out; }
        @keyframes cartBounce { 0% { transform: scale(1); box-shadow: none;} 40% { transform: scale(1.12); box-shadow: 0 0 20px gold;} 100% { transform: scale(1); box-shadow: none;} }

        /* Compare bar bottom */
        .compare-bar {
          position: fixed;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(10,10,10,0.9);
          color: #fff;
          padding: 10px 18px;
          border-radius: 999px;
          display: flex;
          gap: 16px;
          align-items: center;
          z-index: 999;
          box-shadow: 0 10px 30px rgba(0,0,0,0.45);
        }
        .btn-compare-now { background: linear-gradient(90deg,#ffd56b,#c9982d); color: #000; font-weight: 800; border-radius: 999px; }

        /* Compare modal grid */
        .compare-grid { display: flex; gap: 18px; align-items: flex-start; justify-content: space-between; flex-wrap: nowrap; }
        .compare-col { flex: 1; border-radius: 10px; padding: 12px; background: rgba(255,255,255,0.03); text-align: left; }
        .compare-media { border-radius: 8px; overflow: hidden; }

        /* Skeleton */
        .skeleton-card { border-radius: 16px; padding: 12px; background: linear-gradient(180deg, #f6f6f6, #ededed); }
        .skeleton-img { width: 100%; height: 300px; border-radius: 12px; background: linear-gradient(90deg,#e2e2e2,#f4f4f4,#e2e2e2); background-size: 200% 100%; animation: shimmer 1.2s linear infinite; margin-bottom: 12px; }
        .skeleton-line { height: 12px; width: 100%; border-radius: 6px; background: linear-gradient(90deg,#e2e2e2,#f4f4f4,#e2e2e2); background-size: 200% 100%; animation: shimmer 1.2s linear infinite; margin-bottom: 8px; }
        .skeleton-line.short { width: 40%; }
        .skeleton-line.half { width: 60%; }
        .skeleton-btns { display:flex; gap:8px; margin-top:10px; }
        .skeleton-btn { width: 48%; height: 36px; border-radius: 20px; background: linear-gradient(90deg,#e2e2e2,#f4f4f4,#e2e2e2); background-size: 200% 100%; animation: shimmer 1.2s linear infinite; }

        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }

        /* responsive tweaks */
        @media (max-width: 768px) {
          .product-img-box { height: 420px; }
          .floating-price { top: 180px; left: 14px; }
        }
        @media (max-width: 480px) {
          .product-img-box { height: 300px; }
        }

      `}</style>
    </>
  );
}