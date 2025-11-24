import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./Nav";

const BASE_API_URL = "https://indokonabackend-1.onrender.com/api";
const PRODUCT_DETAIL_URL = (id) => `${BASE_API_URL}/myproducts/${id}/`;
const ADD_TO_CART_URL = `${BASE_API_URL}/cart/`;

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [readMore, setReadMore] = useState(false);

  const fetchProduct = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(PRODUCT_DETAIL_URL(id));
      setProduct(response.data);
    } catch (err) {
      console.log("Error fetching product: ", err);
      setError("Failed to load product. Try again.");
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const handleAddToCart = async () => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      alert("Please log in first.");
      navigate("/login");
      return;
    }

    setIsAddingToCart(true);
    try {
      await axios.post(
        ADD_TO_CART_URL,
        { product_id: id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("✅ Added to cart!");
    } catch (err) {
      console.log("Cart error:", err);
      alert("❌ Failed to add to cart");
    } finally {
      setIsAddingToCart(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary"></div>
        <p>Loading Product...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5 text-center alert alert-danger">
        <h3>⚠ Error</h3>
        <p>{error}</p>
        <button className="btn btn-secondary" onClick={fetchProduct}>
          Retry
        </button>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mt-5 text-center">
        <h3>Product Not Found</h3>
      </div>
    );
  }

  const {
    productname,
    productimg,
    productdescription,
    productdiscounted_price,
  } = product;
  const shortText = productdescription?.slice(0, 120);

  const handleShare = () => {
    const url = window.location.href;
    const text = `Check out this product: ${productname}`;
    const img = productimg;

    // ✅ If device supports native share API
    if (navigator.share) {
      navigator.share({
        title: productname,
        text: text,
        url: url,
      });
    } else {
      // ✅ Fallback social share links
      const whatsapp = `https://wa.me/?text=${encodeURIComponent(
        text + " " + url
      )}`;
      const facebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`;
      const twitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(url)}`;
      const telegram = `https://t.me/share/url?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(text)}`;

      // Open share menu
      window.open(whatsapp, "_blank");
      window.open(facebook, "_blank");
      window.open(twitter, "_blank");
      window.open(telegram, "_blank");
    }
  };

  return (
    <>
      <Helmet>
        <title>{productname} - INDOKONA</title>
        <meta property="og:title" content={productname} />
        <meta property="og:description" content={productdescription} />
        <meta property="og:image" content={productimg} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="product" />

        <meta name="twitter:title" content={productname} />
        <meta name="twitter:description" content={productdescription} />
        <meta name="twitter:image" content={productimg} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navbar />

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-5 text-center mb-3">
            <img
              src={productimg}
              alt={productname}
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>

          <div className="col-md-6">
            <h1 className="fw-bold">{productname}</h1>

            <p className="text-muted" style={{ whiteSpace: "pre-line" }}>
              {readMore ? productdescription : `${shortText}... `}

              {productdescription.length > 120 && (
                <button
                  className="btn btn-link p-0"
                  style={{
                    fontWeight: "bold",
                    color: "#007bff",
                    textDecoration: "none",
                  }}
                  onClick={() => setReadMore(!readMore)}
                >
                  {readMore ? "Read Less" : "Read More"}
                </button>
              )}
            </p>

            <h2 className="text-success fw-bold">₹{productdiscounted_price}</h2>

            <div className="mt-4 d-flex gap-3 custom-btn-group">
              <button
                className="glow-btn add-btn"
                onClick={handleAddToCart}
                disabled={isAddingToCart}
              >
                {isAddingToCart ? "Adding..." : "🛒 Add to Cart"}
              </button>

              <button
                className="glow-btn buy-btn"
                onClick={() => navigate("/cart?checkout=true")}
              >
                💳 Buy Now
              </button>

              <button className="glow-btn share-btn" onClick={handleShare}>
                📤 Share
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
  .btn-info {
    background: linear-gradient(90deg,#00b4db,#0083b0);
    border: none;
    font-weight: 600;
    color: white;
    border-radius: 50px;
  }
  .btn-info:hover {
    background: linear-gradient(90deg,#14d4f4,#0094c7);
    transform: scale(1.04);
    transition: 0.3s;
  }


.custom-btn-group {
  display: flex;
  gap: 20px;
}

/* Base Glow Button */
.glow-btn {
  padding: 14px 26px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 14px;
  border: none;
  color: white;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

/* Hover scale animation */
.glow-btn:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 8px 35px rgba(0, 0, 0, 0.35);
}

/* Add to Cart Button */
.add-btn {
  background: linear-gradient(135deg, #007bff, #00c6ff);
}

/* Buy Now Button */
.buy-btn {
  background: linear-gradient(135deg, #28a745, #6cff6c);
}

/* Share Button */
.share-btn {
  background: linear-gradient(135deg, #17a2b8, #5ce8ff);
}

/* Disabled Button */
.add-btn:disabled {
  background: gray !important;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

`}</style>
    </>
  );
};

export default ProductDetail;
