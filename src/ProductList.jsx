import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
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
  FaBalanceScaleRight,
  FaQrcode,
  FaDownload,
  FaImages
} from "react-icons/fa";

/**
 * ProductList_Premium_Share_Features.jsx
 * - Floating price, wishlist, badges, compare, quick view (from previous)
 * - FULL CUSTOM SHARE MENU (previous)
 * - NEW FEATURES implemented here:
 *   1) Product QR code share (uses free qrserver API to generate QR image)
 *   2) Download share poster: create a poster image (canvas) with product image, price, QR
 *   3) Story-style product preview (fullscreen autoplay modal)
 *   4) Full-screen product gallery (modal with arrows + thumbnails)
 *
 * Notes:
 * - Poster creation uses canvas and attempts crossOrigin="anonymous" for images — if product images are served without CORS headers, poster may be tainted and download won't work. In that case, host images with proper CORS or proxy them.
 * - QR generation uses https://api.qrserver.com which returns a PNG image URL. No server-side work needed.
 */

export default function ProductListPremium() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState({});
  const [compareSet, setCompareSet] = useState({});

  // share menu state
  const [shareProductData, setShareProductData] = useState(null);
  const [showShareMenu, setShowShareMenu] = useState(false);

  // quick view
  const [quickProduct, setQuickProduct] = useState(null);
  const [showQuick, setShowQuick] = useState(false);

  // story preview
  const [storyProduct, setStoryProduct] = useState(null);
  const [showStory, setShowStory] = useState(false);

  // gallery
  const [galleryProduct, setGalleryProduct] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 700, once: false });
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
        setProducts(Array.isArray(res.data) ? res.data : []);
      } catch (e) {
        console.error(e);
        setProducts([]);
      } finally {
        setTimeout(() => setLoading(false), 300);
      }
    };

    load();
  }, []);

  const toggleWishlist = (id) => setWishlist((s) => ({ ...s, [id]: !s[id] }));

  const toggleCompare = (id) =>
    setCompareSet((prev) => {
      const copy = { ...prev };
      if (copy[id]) delete copy[id];
      else copy[id] = true;
      return copy;
    });

  const addToCart = async (id) => {
    const token = localStorage.getItem("access_token");
    if (!token) return navigate("/login");

    try {
      await axios.post(
        "https://indokonabackend-1.onrender.com/api/cart/",
        { product_id: id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // small visual feedback could be added
    } catch (e) {
      console.error(e);
    }
  };

  // ----------------- SHARE MENU -----------------
  const openShareMenu = (product) => {
    setShareProductData(product);
    setShowShareMenu(true);
  };

  const closeShareMenu = () => {
    setShowShareMenu(false);
    setShareProductData(null);
  };

  const productUrl = (p) => `${window.location.origin}/product/${p.id}`;

  // QR code image URL (external service)
  const qrUrlFor = (p, size = 260) => {
    const url = productUrl(p);
    return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}`;
  };

  // ----------------- POSTER CREATION -----------------
  // Creates an image poster with product image on top, title+price, QR code bottom-right. Tries to handle CORS via crossOrigin.
  const createAndDownloadPoster = async (p) => {
    try {
      const canvasW = 900;
      const canvasH = 1400;
      const canvas = document.createElement("canvas");
      canvas.width = canvasW;
      canvas.height = canvasH;
      const ctx = canvas.getContext("2d");

      // background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvasH);
      gradient.addColorStop(0, "#fffaf0");
      gradient.addColorStop(1, "#fff7e6");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvasW, canvasH);

      // load product image
      const loadImage = (src) =>
        new Promise((res, rej) => {
          const img = new Image();
          img.crossOrigin = "anonymous"; // attempt CORS
          img.onload = () => res(img);
          img.onerror = (e) => rej(e);
          img.src = src;
        });

      // draw main image area
      let prodImg = null;
      try {
        prodImg = await loadImage(p.productimg);
      } catch (e) {
        // fallback: tiny placeholder
        prodImg = document.createElement("canvas");
        prodImg.width = 10;
        prodImg.height = 10;
        const pc = prodImg.getContext("2d");
        pc.fillStyle = "#ddd";
        pc.fillRect(0, 0, 10, 10);
      }

      // draw product image centered and cover
      const imgBoxW = canvasW - 80;
      const imgBoxH = Math.round(canvasH * 0.55);
      const imgX = 40;
      const imgY = 60;

      // cover math
      const coverScale = Math.max(imgBoxW / prodImg.width, imgBoxH / prodImg.height);
      const drawW = prodImg.width * coverScale;
      const drawH = prodImg.height * coverScale;
      const dx = imgX - (drawW - imgBoxW) / 2;
      const dy = imgY - (drawH - imgBoxH) / 2;
      ctx.drawImage(prodImg, dx, dy, drawW, drawH);

      // title text
      ctx.fillStyle = "#111";
      ctx.font = "bold 34px Arial";
      ctx.textAlign = "left";
      wrapText(ctx, p.productname || "Untitled Product", 50, imgY + imgBoxH + 50, canvasW - 100, 36);

      // price
      ctx.fillStyle = "#c77a00";
      ctx.font = "bold 32px Arial";
      ctx.fillText(`₹ ${p.productdiscounted_price}`, 50, imgY + imgBoxH + 170);

      // load qr image (from api)
      const qr = await loadImage(qrUrlFor(p, 300));
      const qrSize = 260;
      const qrX = canvasW - qrSize - 60;
      const qrY = canvasH - qrSize - 80;

      // draw white rounded bg for qr
      roundRect(ctx, qrX - 12, qrY - 12, qrSize + 24, qrSize + 24, 18, "#fff", "#e6c57a");

      ctx.drawImage(qr, qrX, qrY, qrSize, qrSize);

      // small caption near qr
      ctx.fillStyle = "#444";
      ctx.font = "14px Arial";
      ctx.fillText("Scan to view product", qrX, qrY + qrSize + 26);

      // download
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = `${(p.productname || "product").replace(/\s+/g, "_")}_poster.png`;
      link.href = dataUrl;
      link.click();
    } catch (e) {
      console.error("Poster creation failed", e);
      alert(
        "Poster creation failed. If product images are hosted without proper CORS headers the browser will block canvas export. Try hosting images with CORS or contact dev."
      );
    }
  };

  // helper to draw rounded rect with border
  function roundRect(ctx, x, y, w, h, r, fill, stroke) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
    if (fill) {
      ctx.fillStyle = fill;
      ctx.fill();
    }
    if (stroke) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  // basic wrap text function
  function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(" ");
    let line = "";
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + " ";
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, x, y);
        line = words[n] + " ";
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, y);
  }

  // ----------------- STORY PREVIEW -----------------
  // opens a fullscreen modal which auto-plays product image/video for 5 seconds then closes
  useEffect(() => {
    let timer;
    if (showStory) {
      timer = setTimeout(() => {
        setShowStory(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showStory]);

  const openStory = (p) => {
    setStoryProduct(p);
    setShowStory(true);
  };

  // ----------------- GALLERY -----------------
  const openGallery = (p, startIndex = 0) => {
    setGalleryProduct(p);
    setGalleryIndex(startIndex);
    setShowGallery(true);
  };

  const closeGallery = () => {
    setShowGallery(false);
    setGalleryProduct(null);
    setGalleryIndex(0);
  };

  const nextGallery = () => {
    if (!galleryProduct) return;
    setGalleryIndex((i) => {
      const arr = galleryMediaFor(galleryProduct);
      return (i + 1) % arr.length;
    });
  };
  const prevGallery = () => {
    if (!galleryProduct) return;
    setGalleryIndex((i) => {
      const arr = galleryMediaFor(galleryProduct);
      return (i - 1 + arr.length) % arr.length;
    });
  };

  const galleryMediaFor = (p) => {
    // p.productgallery assumed array of urls OR fall back to [productimg]
    if (!p) return [];
    if (Array.isArray(p.productgallery) && p.productgallery.length) return p.productgallery;
    return [p.productimg];
  };

  // ----------------- RENDER -----------------
  return (
    <>
      <Navbar2 />

      <div className="scroll-banner">
        <span>✨ Premium Golden Store — Share, Poster, Story & Gallery ✨</span>
      </div>

      <h2 className="text-center my-4 premium-heading">🌟 Premium Golden Collection</h2>

      <Row className="px-3">
        {loading
          ? [1, 2, 3, 4, 5, 6].map((i) => (
              <Col md={4} sm={6} xs={12} key={i} className="mb-4">
                <div className="skeleton-card">
                  <div className="skeleton-img" />
                </div>
              </Col>
            ))
          : products.map((p) => {
              const badge = p.productbadge ? p.productbadge.toUpperCase() : p.productdiscounted_price < 500 ? "HOT" : "NEW";
              return (
                <Col md={4} sm={6} xs={12} key={p.id} className="mb-4" data-aos="zoom-in">
                  <Card className="product-card">
                    <div className="wishlist-btn" onClick={() => toggleWishlist(p.id)}>
                      {wishlist[p.id] ? <FaHeart className="wish-filled" /> : <FaRegHeart className="wish-empty" />}
                    </div>

                    <div className={`product-badge badge-${badge}`}>{badge}</div>

                    <div className="floating-price">
                      <FaRupeeSign /> {p.productdiscounted_price}
                    </div>

                    <div className={`compare-toggle ${compareSet[p.id] ? "active" : ""}`} onClick={() => toggleCompare(p.id)}>
                      <FaBalanceScaleRight />
                    </div>

                    <div className="product-img-box">
                      {/* show first media (video priority) */}
                      {p.productvideo ? (
                        <video className="product-media" src={p.productvideo} muted loop playsInline />
                      ) : (
                        <img className="product-img" src={p.productimg} alt={p.productname} />
                      )}

                      <div className="img-actions">
                        <button className="action small" onClick={() => openStory(p)} title="Open Story">
                          <FaImages />
                        </button>

                        <button
                          className="action small"
                          onClick={() => openGallery(p, 0)}
                          title="Open Gallery"
                        >
                          <FaQrcode />
                        </button>

                        <div className="quick-view" onClick={() => { setQuickProduct(p); setShowQuick(true); }}>
                          <FaEye /> Quick View
                        </div>
                      </div>
                    </div>

                    <Card.Body>
                      <h5 className="product-title">{p.productname}</h5>

                      <Card.Text className="product-desc">{(p.productdescription || "").slice(0, 80)}</Card.Text>

                      <div className="d-flex gap-2 align-items-center">
                        <Button className="btn-add" onClick={() => addToCart(p.id)}>
                          <FaShoppingCart /> Add to Cart
                        </Button>

                        <Button className="btn-buy" onClick={() => navigate('/cart')}>
                          <FaBolt /> Buy Now
                        </Button>

                        <Button className="btn-share" onClick={() => openShareMenu(p)}>
                          <FaShareAlt /> Share
                        </Button>

                        <Button className="btn-qr" onClick={() => window.open(qrUrlFor(p), '_blank')} title="Open QR">
                          <FaQrcode /> QR
                        </Button>

                        <Button className="btn-download" onClick={() => createAndDownloadPoster(p)} title="Download Poster">
                          <FaDownload /> Poster
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
      </Row>

      {/* Share Menu Bottom Sheet */}
      {showShareMenu && shareProductData && (
        <div className="share-overlay" onClick={closeShareMenu}>
          <div className="share-sheet" onClick={(e) => e.stopPropagation()}>
            <h5 className="share-title">Share Product</h5>

            <div className="share-grid">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${shareProductData.productname}\n${productUrl(shareProductData)}`)}`}
                target="_blank"
                rel="noreferrer"
                className="share-btn whatsapp"
              >
                <span>WhatsApp</span>
              </a>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${productUrl(shareProductData)}`}
                target="_blank"
                rel="noreferrer"
                className="share-btn facebook"
              >
                <span>Facebook</span>
              </a>

              <a
                href={`https://t.me/share/url?url=${productUrl(shareProductData)}&text=${encodeURIComponent(shareProductData.productname)}`}
                target="_blank"
                rel="noreferrer"
                className="share-btn telegram"
              >
                <span>Telegram</span>
              </a>

              <a
                href={`https://twitter.com/intent/tweet?url=${productUrl(shareProductData)}&text=${encodeURIComponent(shareProductData.productname)}`}
                target="_blank"
                rel="noreferrer"
                className="share-btn twitter"
              >
                <span>Twitter</span>
              </a>

              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${productUrl(shareProductData)}`}
                target="_blank"
                rel="noreferrer"
                className="share-btn linkedin"
              >
                <span>LinkedIn</span>
              </a>

              <div
                className="share-btn copylink"
                onClick={() => {
                  navigator.clipboard.writeText(productUrl(shareProductData));
                  alert("Link copied to clipboard");
                }}
              >
                <span>Copy Link</span>
              </div>
            </div>

            <button className="share-close" onClick={closeShareMenu}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Quick View Modal */}
      <Modal show={showQuick} onHide={() => setShowQuick(false)} size="lg" centered>
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
                  <img src={quickProduct.productimg} style={{ width: "100%", height: 360, objectFit: "cover", objectPosition: "top center", borderRadius: 12 }} alt="" />
                )}
              </div>
              <div style={{ flex: 1 }}>
                <h5 className="mb-2">{quickProduct.productname}</h5>
                <p style={{ color: "#444" }}>{quickProduct.productdescription}</p>
                <h4 className="mb-3"><FaRupeeSign /> {quickProduct.productdiscounted_price}</h4>
                <div className="d-flex gap-2">
                  <Button className="btn-add" onClick={() => { addToCart(quickProduct.id); setShowQuick(false); }}><FaShoppingCart /> Add to Cart</Button>
                  <Button className="btn-buy" onClick={() => { navigate('/cart'); setShowQuick(false); }}><FaBolt /> Buy Now</Button>
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>

      {/* Story Fullscreen Modal */}
      <Modal show={showStory} onHide={() => setShowStory(false)} dialogClassName="story-modal" centered>
        <div className="story-screen" onClick={() => setShowStory(false)}>
          {storyProduct && (
            <div className="story-media">
              {storyProduct.productvideo ? (
                <video src={storyProduct.productvideo} autoPlay muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <img src={storyProduct.productimg} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} alt="" />
              )}

              <div className="story-caption">
                <h3>{storyProduct.productname}</h3>
                <div className="story-price"><FaRupeeSign /> {storyProduct.productdiscounted_price}</div>
              </div>
            </div>
          )}
        </div>
      </Modal>

      {/* Gallery Modal */}
      <Modal show={showGallery} onHide={closeGallery} dialogClassName="gallery-modal" centered>
        <div className="gallery-screen">
          <button className="gallery-close" onClick={closeGallery}>Close</button>
          {galleryProduct && (
            <>
              <div className="gallery-main">
                {galleryMediaFor(galleryProduct).map((m, idx) => (
                  <div key={idx} className={`gallery-item ${idx === galleryIndex ? 'active' : ''}`}>
                    {m.endsWith('.mp4') || m.includes('video') ? (
                      <video src={m} controls style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <img src={m} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    )}
                  </div>
                ))}
              </div>

              <div className="gallery-controls">
                <button onClick={prevGallery}>Prev</button>
                <div className="thumbs">
                  {galleryMediaFor(galleryProduct).map((m, idx) => (
                    <img key={idx} src={m} onClick={() => setGalleryIndex(idx)} className={idx === galleryIndex ? 'thumb active' : 'thumb'} alt="" />
                  ))}
                </div>
                <button onClick={nextGallery}>Next</button>
              </div>
            </>
          )}
        </div>
      </Modal>

      {/* Compare bar (simple) */}
      {Object.keys(compareSet).length > 0 && (
        <div className="compare-bar">
          <div>{Object.keys(compareSet).length} selected</div>
          <div>
            <Button variant="light" className="me-2" onClick={() => setCompareSet({})}>Clear</Button>
            <Button className="btn-compare-now" onClick={() => alert('Compare opened client-side')}>Compare Now</Button>
          </div>
        </div>
      )}

      {/* Styles - kept inline for single-file deliverable */}
      <style>{`
        .scroll-banner{background:#000;color:gold;padding:8px 0;text-align:center;font-weight:700}
        .premium-heading{background:linear-gradient(90deg,#ffde75,#e7b23a,#ffd47e);-webkit-background-clip:text;color:transparent;font-weight:900;font-size:2rem;text-transform:uppercase}
        .product-card{border-radius:20px;backdrop-filter:blur(12px);background:linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04));border:1px solid rgba(255,215,0,0.35);box-shadow:0 8px 28px rgba(0,0,0,0.08);position:relative;overflow:hidden}
        .product-img-box{height:600px;width:100%;overflow:hidden;border-radius:20px 20px 0 0;background:#fafafa;position:relative}
        .product-img,.product-media{width:100%;height:100%;object-fit:cover;object-position:top center;transition:transform .6s}
        .product-card:hover .product-img,.product-card:hover .product-media{transform:scale(1.06)}
        .img-actions{position:absolute;right:12px;top:12px;display:flex;flex-direction:column;gap:8px;z-index:40}
        .action.small{background:rgba(255,255,255,0.85);border:none;padding:8px;border-radius:10px;cursor:pointer}
        .wishlist-btn{position:absolute;top:18px;right:18px;z-index:50}
        .wish-empty{color:#fff8;font-size:26px}
        .wish-filled{color:#ff2965;font-size:28px}
        .product-badge{position:absolute;top:15px;left:15px;padding:8px 12px;border-radius:10px;color:#fff;font-weight:800;font-size:12px;z-index:40}
        .badge-HOT{background:linear-gradient(90deg,#ff5a00,#ff0000)}
        .badge-NEW{background:linear-gradient(90deg,#00c6ff,#0072ff)}
        .floating-price{position:absolute;top:260px;left:20px;background:linear-gradient(90deg,#ffd56b,#c9982d);padding:8px 18px;border-radius:50px;font-weight:800;color:black;z-index:25}
        .compare-toggle{position:absolute;top:18px;left:50%;transform:translateX(-50%);background:rgba(255,255,255,0.06);padding:8px;border-radius:10px;color:#fff}
        .compare-toggle.active{background:linear-gradient(90deg,#ffd56b,#c9982d);color:#000}
        .product-title{background:linear-gradient(90deg,#ffd56b,#c9982d);-webkit-background-clip:text;color:transparent;font-weight:800;font-size:1.15rem}
        .product-desc{color:#444}
        .btn-add{background:linear-gradient(90deg,#ffc468,#ff8b00);border:none;color:black;font-weight:700;border-radius:50px}
        .btn-buy{background:#28a745;border-radius:50px;color:#fff;font-weight:700}
        .btn-share{background:#0d6efd;border-radius:50px;color:#fff;font-weight:700}
        .btn-qr{background:#ffffffaa;border-radius:50px;color:#111;border:none}
        .btn-download{background:#222;color:#fff;border-radius:50px}

        /* Share Sheet */
        .share-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.55);backdrop-filter:blur(6px);display:flex;justify-content:center;align-items:flex-end;z-index:9999}
        .share-sheet{width:100%;max-width:760px;background:#fff;border-radius:22px 22px 0 0;padding:20px;animation:slideUp .35s}
        @keyframes slideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}
        .share-title{text-align:center;font-weight:900;margin-bottom:12px}
        .share-grid{display:flex;flex-wrap:wrap;gap:12px;justify-content:space-between}
        .share-btn{width:30%;background:#f7f7f7;padding:12px 8px;border-radius:14px;text-align:center;text-decoration:none;color:#111;font-weight:700;display:flex;flex-direction:column;align-items:center;gap:6px}
        .share-close{width:100%;margin-top:10px;padding:10px;border-radius:14px;background:#000;color:#fff;border:none}

        /* Quick view / story / gallery */
        .story-modal .modal-content{background:transparent;box-shadow:none}
        .story-screen{width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background:linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.45))}
        .story-media{width:100%;height:100%;position:relative}
        .story-caption{position:absolute;left:20px;bottom:40px;color:#fff;text-shadow:0 4px 18px rgba(0,0,0,0.5)}
        .story-price{background:rgba(255,255,255,0.9);padding:6px 12px;border-radius:8px;color:#111;display:inline-block;margin-top:8px}

        .gallery-modal .modal-content{background:transparent;border-radius:8px}
        .gallery-screen{padding:18px;background:#111;color:#fff;border-radius:10px}
        .gallery-main{height:60vh;display:flex;overflow:hidden}
        .gallery-item{flex:0 0 100%;opacity:0;transition:opacity .3s}
        .gallery-item.active{opacity:1}
        .gallery-controls{display:flex;align-items:center;gap:12px;justify-content:center;margin-top:12px}
        .thumb{width:64px;height:64px;object-fit:cover;border-radius:8px;opacity:.8;cursor:pointer}
        .thumb.active{outline:3px solid gold;opacity:1}

        .compare-bar{position:fixed;bottom:16px;left:50%;transform:translateX(-50%);background:rgba(10,10,10,0.9);color:#fff;padding:10px 16px;border-radius:999px;display:flex;gap:16px;align-items:center;z-index:999}

        /* skeleton */
        .skeleton-card{border-radius:16px;padding:12px;background:linear-gradient(180deg,#f6f6f6,#ededed)}
        .skeleton-img{width:100%;height:300px;border-radius:12px;background:linear-gradient(90deg,#e2e2e2,#f4f4f4,#e2e2e2);background-size:200% 100%;animation:shimmer 1.2s linear infinite}
        @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}

        @media(max-width:768px){.product-img-box{height:420px}.floating-price{top:180px;left:14px}}
        @media(max-width:480px){.product-img-box{height:300px}}

      `}</style>
    </>
  );
}