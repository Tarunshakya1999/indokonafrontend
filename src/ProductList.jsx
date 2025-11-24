import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
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
  FaImages,
} from "react-icons/fa";

/**
 * ProductListPremiumSafe.jsx
 * Single-file, drop-in component.
 * - Defensive coding: optional chaining, fallbacks, try/catch
 * - No dependency on React Router (no useNavigate)
 * - Inline lightweight Navbar fallback
 * - Poster/QR/story/gallery/share features with robust guards
 *
 * Copy-paste this file and use in your project.
 */

// Lightweight fallback navbar (replace with your own import if available)
const Navbar2 = () => (
  <nav style={{ background: "linear-gradient(90deg,#111,#222)", padding: 10, color: "#fff" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ fontWeight: 800 }}>Indokona Store</div>
      <div style={{ fontSize: 13, opacity: 0.9 }}>Premium Digital Marketplace</div>
    </div>
  </nav>
);

// Safe navigate that works with or without router
function safeNavigate(path) {
  try {
    if (typeof window !== "undefined" && window.history && typeof window.history.pushState === "function") {
      window.history.pushState({}, "", path);
      window.dispatchEvent(new PopStateEvent("popstate"));
      return;
    }
  } catch (e) {
    // ignore
  }
  if (typeof window !== "undefined") window.location.href = path;
}

export default function ProductListPremiumSafe() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState({});
  const [compareSet, setCompareSet] = useState({});

  // share menu
  const [shareProductData, setShareProductData] = useState(null);
  const [showShareMenu, setShowShareMenu] = useState(false);

  // quick view
  const [quickProduct, setQuickProduct] = useState(null);
  const [showQuick, setShowQuick] = useState(false);

  // story
  const [storyProduct, setStoryProduct] = useState(null);
  const [showStory, setShowStory] = useState(false);

  // gallery
  const [galleryProduct, setGalleryProduct] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    // protect AOS init in case library fails
    try {
      AOS.init({ duration: 700, once: false });
    } catch (e) {
      console.warn("AOS init failed", e);
    }
  }, []);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("access_token");
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        const res = await axios.get("https://indokonabackend-1.onrender.com/api/myproducts/", { headers });
        if (!mounted) return;
        const data = Array.isArray(res.data) ? res.data : [];
        // normalize minimal fields to avoid crashes
        const normalized = data.map((p, i) => ({
          id: p?.id ?? `local-${i}`,
          productname: p?.productname ?? "Untitled Product",
          productdescription: p?.productdescription ?? "",
          productimg: p?.productimg ?? "",
          productvideo: p?.productvideo ?? null,
          productgallery: Array.isArray(p?.productgallery) ? p.productgallery : p?.productgallery ? [p.productgallery] : [],
          productprice: p?.productprice ?? 0,
          productdiscounted_price: p?.productdiscounted_price ?? p?.productprice ?? 0,
          productbadge: p?.productbadge ?? null,
          ...p,
        }));
        setProducts(normalized);
      } catch (e) {
        console.error("Failed loading products", e);
        setProducts([]);
      } finally {
        setTimeout(() => setLoading(false), 200);
      }
    };
    load();
    return () => {
      mounted = false;
    };
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
    if (!token) return safeNavigate("/login");

    try {
      await axios.post(
        "https://indokonabackend-1.onrender.com/api/cart/",
        { product_id: id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // optional feedback
      // alert("Added to cart");
    } catch (e) {
      console.error("Add to cart failed", e);
      alert("Unable to add to cart");
    }
  };

  const productUrl = (p) => `${window.location.origin}/product/${p?.id ?? ""}`;
  const qrUrlFor = (p, size = 260) => {
    const url = productUrl(p);
    return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}`;
  };

  // Poster creation with heavy guards for CORS/image load failures
  const createAndDownloadPoster = async (p) => {
    try {
      const canvasW = 900;
      const canvasH = 1400;
      const canvas = document.createElement("canvas");
      canvas.width = canvasW;
      canvas.height = canvasH;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Canvas not supported");

      // safe background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvasH);
      gradient.addColorStop(0, "#fffaf0");
      gradient.addColorStop(1, "#fff7e6");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvasW, canvasH);

      const loadImage = (src) =>
        new Promise((res, rej) => {
          if (!src) {
            const c = document.createElement("canvas");
            c.width = 1;
            c.height = 1;
            const cctx = c.getContext("2d");
            cctx.fillStyle = "#ddd";
            cctx.fillRect(0, 0, 1, 1);
            return res(c);
          }
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.onload = () => res(img);
          img.onerror = () => {
            // fallback tiny canvas
            const c = document.createElement("canvas");
            c.width = 1;
            c.height = 1;
            const cctx = c.getContext("2d");
            cctx.fillStyle = "#ddd";
            cctx.fillRect(0, 0, 1, 1);
            res(c);
          };
          img.src = src;
        });

      const prodImg = await loadImage(p?.productimg);
      const imgBoxW = canvasW - 80;
      const imgBoxH = Math.round(canvasH * 0.55);
      const imgX = 40;
      const imgY = 60;

      const coverScale = Math.max(imgBoxW / (prodImg.width || 1), imgBoxH / (prodImg.height || 1));
      const drawW = (prodImg.width || 1) * coverScale;
      const drawH = (prodImg.height || 1) * coverScale;
      const dx = imgX - (drawW - imgBoxW) / 2;
      const dy = imgY - (drawH - imgBoxH) / 2;
      ctx.drawImage(prodImg, dx, dy, drawW, drawH);

      // title
      ctx.fillStyle = "#111";
      ctx.font = "bold 30px Arial";
      ctx.textAlign = "left";
      wrapText(ctx, p?.productname ?? "Untitled", 50, imgY + imgBoxH + 50, canvasW - 100, 34);

      // price
      ctx.fillStyle = "#c77a00";
      ctx.font = "bold 28px Arial";
      ctx.fillText(`₹ ${p?.productdiscounted_price ?? p?.productprice ?? 0}`, 50, imgY + imgBoxH + 150);

      // qr
      const qr = await loadImage(qrUrlFor(p, 300));
      const qrSize = 200;
      const qrX = canvasW - qrSize - 60;
      const qrY = canvasH - qrSize - 80;
      roundRect(ctx, qrX - 12, qrY - 12, qrSize + 24, qrSize + 24, 14, "#fff", "#e6c57a");
      ctx.drawImage(qr, qrX, qrY, qrSize, qrSize);
      ctx.fillStyle = "#444";
      ctx.font = "13px Arial";
      ctx.fillText("Scan to view product", qrX, qrY + qrSize + 22);

      // download attempt
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = `${(p?.productname || "product").replace(/\s+/g, "_")}_poster.png`;
      link.href = dataUrl;
      link.click();
    } catch (e) {
      console.error("Poster creation failed", e);
      alert(
        "Poster creation failed. If images are hosted without proper CORS headers, the browser may block export. Try hosting images with CORS or contact dev."
      );
    }
  };

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

  function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = (text || "").split(" ");
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

  // story auto-close
  useEffect(() => {
    let timer;
    if (showStory) {
      timer = setTimeout(() => setShowStory(false), 4500);
    }
    return () => clearTimeout(timer);
  }, [showStory]);

  const openStory = (p) => {
    setStoryProduct(p);
    setShowStory(true);
  };

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
    const arr = galleryMediaFor(galleryProduct);
    setGalleryIndex((i) => (arr.length ? (i + 1) % arr.length : 0));
  };
  const prevGallery = () => {
    if (!galleryProduct) return;
    const arr = galleryMediaFor(galleryProduct);
    setGalleryIndex((i) => (arr.length ? (i - 1 + arr.length) % arr.length : 0));
  };

  const galleryMediaFor = (p) => {
    if (!p) return [];
    if (Array.isArray(p.productgallery) && p.productgallery.length) return p.productgallery;
    if (p.productimg) return [p.productimg];
    return [];
  };

  // share menu handlers (safe)
  const openShareMenu = (product) => {
    setShareProductData(product);
    setShowShareMenu(true);
  };
  const closeShareMenu = () => {
    setShowShareMenu(false);
    setShareProductData(null);
  };

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
              const badge = (p?.productbadge ?? (p?.productdiscounted_price ?? 0) < 500 ? "HOT" : "NEW") || "NEW";
              const safeImg = p?.productimg ?? "";
              return (
                <Col md={4} sm={6} xs={12} key={p?.id ?? Math.random()} className="mb-4" data-aos="zoom-in">
                  <Card className="product-card">
                    <div className="wishlist-btn" onClick={() => toggleWishlist(p.id)}>
                      {wishlist[p.id] ? <FaHeart className="wish-filled" /> : <FaRegHeart className="wish-empty" />}
                    </div>

                    <div className={`product-badge badge-${badge}`}>{badge}</div>

                    <div className="floating-price">
                      <FaRupeeSign /> {p?.productdiscounted_price ?? p?.productprice ?? 0}
                    </div>

                    <div className={`compare-toggle ${compareSet[p.id] ? "active" : ""}`} onClick={() => toggleCompare(p.id)}>
                      <FaBalanceScaleRight />
                    </div>

                    <div className="product-img-box">
                      {p?.productvideo ? (
                        <video className="product-media" src={p.productvideo} muted loop playsInline />
                      ) : safeImg ? (
                        <img className="product-img" src={safeImg} alt={p?.productname ?? ""} />
                      ) : (
                        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#777" }}>
                          No image
                        </div>
                      )}

                      <div className="img-actions">
                        <button className="action small" onClick={() => openStory(p)} title="Open Story">
                          <FaImages />
                        </button>

                        <button className="action small" onClick={() => openGallery(p, 0)} title="Open Gallery">
                          <FaQrcode />
                        </button>

                        <div className="quick-view" onClick={() => { setQuickProduct(p); setShowQuick(true); }}>
                          <FaEye /> Quick View
                        </div>
                      </div>
                    </div>

                    <Card.Body>
                      <h5 className="product-title">{p?.productname ?? "Untitled"}</h5>

                      <Card.Text className="product-desc">{(p?.productdescription ?? "").slice(0, 80)}</Card.Text>

                      <div className="d-flex gap-2 align-items-center flex-wrap">
                        <Button className="btn-add" onClick={() => addToCart(p.id)}>
                          <FaShoppingCart /> Add to Cart
                        </Button>

                        <Button className="btn-buy" onClick={() => safeNavigate("/cart")}>
                          <FaBolt /> Buy Now
                        </Button>

                        <Button className="btn-share" onClick={() => openShareMenu(p)}>
                          <FaShareAlt /> Share
                        </Button>

                        <Button className="btn-qr" onClick={() => window.open(qrUrlFor(p), "_blank")} title="Open QR">
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

      {/* Share Menu */}
      {showShareMenu && shareProductData && (
        <div className="share-overlay" onClick={closeShareMenu}>
          <div className="share-sheet" onClick={(e) => e.stopPropagation()}>
            <h5 className="share-title">Share Product</h5>

            <div className="share-grid">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${shareProductData?.productname ?? ""}\n${productUrl(shareProductData)}`)}`}
                target="_blank"
                rel="noreferrer"
                className="share-btn whatsapp"
              >
                <span>WhatsApp</span>
              </a>

              <a href={`https://www.facebook.com/sharer/sharer.php?u=${productUrl(shareProductData)}`} target="_blank" rel="noreferrer" className="share-btn facebook">
                <span>Facebook</span>
              </a>

              <a
                href={`https://t.me/share/url?url=${productUrl(shareProductData)}&text=${encodeURIComponent(shareProductData?.productname ?? "")}`}
                target="_blank"
                rel="noreferrer"
                className="share-btn telegram"
              >
                <span>Telegram</span>
              </a>

              <a
                href={`https://twitter.com/intent/tweet?url=${productUrl(shareProductData)}&text=${encodeURIComponent(shareProductData?.productname ?? "")}`}
                target="_blank"
                rel="noreferrer"
                className="share-btn twitter"
              >
                <span>Twitter</span>
              </a>

              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${productUrl(shareProductData)}`} target="_blank" rel="noreferrer" className="share-btn linkedin">
                <span>LinkedIn</span>
              </a>

              <div
                className="share-btn copylink"
                onClick={() => {
                  try {
                    navigator.clipboard.writeText(productUrl(shareProductData));
                    alert("Link copied to clipboard");
                  } catch (e) {
                    alert(productUrl(shareProductData));
                  }
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
            <div style={{ display: "flex", gap: 16, flexDirection: "column", flexWrap: "wrap" }}>
              <div style={{ flex: 1 }}>
                {quickProduct?.productvideo ? (
                  <video src={quickProduct.productvideo} controls autoPlay muted style={{ width: "100%", borderRadius: 12 }} />
                ) : quickProduct?.productimg ? (
                  <img src={quickProduct.productimg} style={{ width: "100%", height: 360, objectFit: "cover", objectPosition: "top center", borderRadius: 12 }} alt="" />
                ) : (
                  <div style={{ width: "100%", height: 360, display: "flex", alignItems: "center", justifyContent: "center", background: "#f2f2f2" }}>No media</div>
                )}
              </div>

              <div style={{ flex: 1 }}>
                <h5 style={{ marginBottom: 8 }}>{quickProduct.productname}</h5>
                <p style={{ color: "#444" }}>{quickProduct.productdescription}</p>
                <h4 style={{ marginBottom: 12 }}>
                  <FaRupeeSign /> {quickProduct.productdiscounted_price ?? quickProduct.productprice ?? 0}
                </h4>
                <div style={{ display: "flex", gap: 8 }}>
                  <Button className="btn-add" onClick={() => { addToCart(quickProduct.id); setShowQuick(false); }}>
                    <FaShoppingCart /> Add to Cart
                  </Button>
                  <Button className="btn-buy" onClick={() => { safeNavigate("/cart"); setShowQuick(false); }}>
                    <FaBolt /> Buy Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>

      {/* Story Modal */}
      <Modal show={showStory} onHide={() => setShowStory(false)} dialogClassName="story-modal" centered>
        <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={() => setShowStory(false)}>
          {storyProduct ? (
            <div style={{ width: "100%", height: "100%", position: "relative" }}>
              {storyProduct.productvideo ? (
                <video src={storyProduct.productvideo} autoPlay muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : storyProduct.productimg ? (
                <img src={storyProduct.productimg} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} alt="" />
              ) : (
                <div style={{ color: "#fff" }}>No media</div>
              )}

              <div style={{ position: "absolute", left: 20, bottom: 40, color: "#fff", textShadow: "0 4px 18px rgba(0,0,0,0.5)" }}>
                <h3 style={{ margin: 0 }}>{storyProduct.productname}</h3>
                <div style={{ marginTop: 8, background: "rgba(255,255,255,0.9)", padding: "6px 12px", borderRadius: 8, display: "inline-block", color: "#111" }}>
                  <FaRupeeSign /> {storyProduct.productdiscounted_price ?? storyProduct.productprice ?? 0}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </Modal>

      {/* Gallery Modal */}
      <Modal show={showGallery} onHide={closeGallery} dialogClassName="gallery-modal" centered>
        <div style={{ padding: 18, background: "#111", color: "#fff", borderRadius: 10 }}>
          <button onClick={closeGallery} style={{ marginBottom: 12 }}>Close</button>
          {galleryProduct && (
            <>
              <div style={{ height: "60vh", display: "flex", overflow: "hidden" }}>
                {galleryMediaFor(galleryProduct).map((m, idx) => (
                  <div key={idx} style={{ flex: "0 0 100%", opacity: idx === galleryIndex ? 1 : 0, transition: "opacity .3s" }}>
                    {typeof m === "string" && (m.endsWith?.(".mp4") || m.includes?.("video")) ? (
                      <video src={m} controls style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    ) : (
                      <img src={m} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    )}
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginTop: 12 }}>
                <button onClick={prevGallery}>Prev</button>
                <div style={{ display: "flex", gap: 8 }}>
                  {galleryMediaFor(galleryProduct).map((m, idx) => (
                    <img key={idx} src={m} onClick={() => setGalleryIndex(idx)} alt="" style={{ width: 64, height: 64, objectFit: "cover", borderRadius: 8, cursor: "pointer", outline: idx === galleryIndex ? "3px solid gold" : "none" }} />
                  ))}
                </div>
                <button onClick={nextGallery}>Next</button>
              </div>
            </>
          )}
        </div>
      </Modal>

      {/* Compare bar */}
      {Object.keys(compareSet).length > 0 && (
        <div style={{ position: "fixed", bottom: 16, left: "50%", transform: "translateX(-50%)", background: "rgba(10,10,10,0.9)", color: "#fff", padding: "10px 16px", borderRadius: 999, display: "flex", gap: 16, alignItems: "center", zIndex: 999 }}>
          <div>{Object.keys(compareSet).length} selected</div>
          <div>
            <Button variant="light" className="me-2" onClick={() => setCompareSet({})}>Clear</Button>
            <Button className="btn-compare-now" onClick={() => alert("Compare opened client-side")}>Compare Now</Button>
          </div>
        </div>
      )}

      {/* Inline styles (kept compact to avoid huge blocks that can interfere) */}
      <style>{`
        .scroll-banner{background:#000;color:gold;padding:8px 0;text-align:center;font-weight:700}
        .premium-heading{background:linear-gradient(90deg,#ffde75,#e7b23a,#ffd47e);-webkit-background-clip:text;color:transparent;font-weight:900;font-size:2rem;text-transform:uppercase}
        .product-card{border-radius:16px;backdrop-filter:blur(10px);background:linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02));border:1px solid rgba(255,215,0,0.25);box-shadow:0 6px 18px rgba(0,0,0,0.06);position:relative;overflow:hidden}
        .product-img-box{height:600px;width:100%;overflow:hidden;border-radius:16px 16px 0 0;background:#fafafa;position:relative}
        .product-img,.product-media{width:100%;height:100%;object-fit:cover;object-position:top center;transition:transform .45s}
        .product-card:hover .product-img,.product-card:hover .product-media{transform:scale(1.03)}
        .img-actions{position:absolute;right:12px;top:12px;display:flex;flex-direction:column;gap:8px;z-index:40}
        .action.small{background:rgba(255,255,255,0.9);border:none;padding:8px;border-radius:10px;cursor:pointer}
        .wishlist-btn{position:absolute;top:12px;right:12px;z-index:50}
        .wish-empty{color:#ffffffcc;font-size:24px}
        .wish-filled{color:#ff2965;font-size:26px}
        .product-badge{position:absolute;top:12px;left:12px;padding:6px 10px;border-radius:10px;color:#fff;font-weight:800;font-size:12px;z-index:40}
        .badge-HOT{background:linear-gradient(90deg,#ff5a00,#ff0000)}
        .badge-NEW{background:linear-gradient(90deg,#00c6ff,#0072ff)}
        .floating-price{position:absolute;top:220px;left:16px;background:linear-gradient(90deg,#ffd56b,#c9982d);padding:6px 14px;border-radius:40px;font-weight:800;color:black;z-index:22}
        .compare-toggle{position:absolute;top:12px;left:50%;transform:translateX(-50%);background:rgba(255,255,255,0.06);padding:6px;border-radius:10px;color:#fff}
        .compare-toggle.active{background:linear-gradient(90deg,#ffd56b,#c9982d);color:#000}
        .product-title{background:linear-gradient(90deg,#ffd56b,#c9982d);-webkit-background-clip:text;color:transparent;font-weight:800;font-size:1.05rem}
        .product-desc{color:#444}
        .btn-add{background:linear-gradient(90deg,#ffc468,#ff8b00);border:none;color:black;font-weight:700;border-radius:40px}
        .btn-buy{background:#28a745;border-radius:40px;color:#fff;font-weight:700}
        .btn-share{background:#0d6efd;border-radius:40px;color:#fff;font-weight:700}
        .btn-qr{background:#ffffffaa;border-radius:40px;color:#111;border:none}
        .btn-download{background:#222;color:#fff;border-radius:40px}
        .skeleton-card{border-radius:12px;padding:12px;background:linear-gradient(180deg,#f6f6f6,#ededed)}
        .skeleton-img{width:100%;height:300px;border-radius:12px;background:linear-gradient(90deg,#e2e2e2,#f4f4f4,#e2e2e2);background-size:200% 100%;animation:shimmer 1.2s linear infinite}
        @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
        @media(max-width:768px){.product-img-box{height:420px}.floating-price{top:160px;left:12px}}
        @media(max-width:480px){.product-img-box{height:300px}}
      `}</style>
    </>
  );
}