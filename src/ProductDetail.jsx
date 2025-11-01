import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./Nav";

const BASE_API_URL = "https://indokonabackend-1.onrender.com/api";
const PRODUCT_DETAIL_URL = (id) => `${BASE_API_URL}/product/${id}/`;
const ADD_TO_CART_URL = `${BASE_API_URL}/cart/`;

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const fetchProduct = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Public fetch — NO TOKEN
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

  const { productname, productimg, productdescription, productdiscounted_price } = product;

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
            <p className="text-muted">{productdescription}</p>
            <h2 className="text-success fw-bold">₹{productdiscounted_price}</h2>

            <div className="mt-4 d-flex gap-2">
              <button
                className="btn btn-primary btn-lg"
                onClick={handleAddToCart}
                disabled={isAddingToCart}
              >
                {isAddingToCart ? "Adding..." : "🛒 Add to Cart"}
              </button>

              <button
                className="btn btn-success btn-lg"
                onClick={() => navigate("/cart?checkout=true")}
              >
                💳 Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
