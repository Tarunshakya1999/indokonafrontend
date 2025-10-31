import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Nav";

// --- Constants for API endpoints ---
const BASE_API_URL = "https://indokonabackend-1.onrender.com/api";
const PRODUCT_DETAIL_URL = (id) => `${BASE_API_URL}/product/${id}/`;
const ADD_TO_CART_URL = `${BASE_API_URL}/cart/`;

/**
 * Helper to retrieve the Authorization header.
 * @param {string} token - The access token.
 * @returns {object} The headers object.
 */
const getAuthHeaders = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // State for data and UI feedback
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAddingToCart, setIsAddingToCart] = useState(false); // For button loading state

  // --- Data Fetching Logic ---
  const fetchProduct = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        // Handle case where token might be needed to view the product
        // or redirect to login if viewing unauthenticated is not allowed.
        // For now, proceed with token if available.
        console.warn("No access token found. Fetching product might fail if login is required.");
      }

      const headers = token ? getAuthHeaders(token) : {};

      const response = await axios.get(PRODUCT_DETAIL_URL(id), headers);
      setProduct(response.data);
    } catch (err) {
      console.error("Error fetching product details:", err);
      setError("Failed to load product details. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  // --- Add to Cart Logic ---
  const handleAddToCart = async () => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      alert("🔐 Please log in to add items to your cart.");
      navigate("/login");
      return;
    }

    setIsAddingToCart(true);
    try {
      await axios.post(
        ADD_TO_CART_URL,
        { product_id: id },
        getAuthHeaders(token)
      );

      // In a real app, you might use a toast notification instead of alert
      alert("✅ Product successfully added to your cart!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      // More specific error handling could be added here (e.g., checking status codes)
      alert("❌ Failed to add product to cart. Please try again.");
    } finally {
      setIsAddingToCart(false);
    }
  };

  // --- Render based on state ---
  if (isLoading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading Product Details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5 text-center alert alert-danger">
        <h3>🚨 Error</h3>
        <p>{error}</p>
        <button className="btn btn-secondary" onClick={fetchProduct}>
          Retry Loading
        </button>
      </div>
    );
  }

  // Handle case where product might not be found after loading
  if (!product) {
      return (
        <div className="container mt-5 text-center">
            <h3>🔍 Product Not Found</h3>
            <p>The requested product could not be located.</p>
        </div>
      );
  }
  
  // Destructure for cleaner JSX
  const { productname, productimg, productdescription, productdiscounted_price } = product;

  return (
    <>
    <Navbar/>
    <div className="container my-5 product-detail-container">
      <div className="row justify-content-center">
        <div className="col-md-5 col-lg-4 text-center mb-4">
          <img
            src={productimg}
            alt={productname}
            className="img-fluid rounded-3 shadow-sm"
            style={{ maxHeight: "400px", objectFit: "cover" }}
            onError={(e) => { e.target.onerror = null; e.target.src = ""; }} // Add a fallback image
          />
        </div>
        <div className="col-md-7 col-lg-6">
          <h1 className="display-5 fw-bold mb-3">{productname}</h1>

          <p className="lead text-muted mb-4">{productdescription}</p>
          
          <h2 className="text-success mb-4">
            Price: <span className="fw-bolder">₹{productdiscounted_price}</span>
            {/* You could add the original price here with a strikethrough */}
          </h2>

          <div className="d-flex flex-column flex-sm-row gap-2">
            <button
              className="btn btn-primary btn-lg d-flex align-items-center justify-content-center"
              onClick={handleAddToCart}
              disabled={isAddingToCart}
            >
              {isAddingToCart ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Adding...
                </>
              ) : (
                <>
                  <span className="me-2">🛒</span> Add to Cart
                </>
              )}
            </button>

            <button
              className="btn btn-success btn-lg"
              onClick={() => navigate("/cart?checkout=true")} // Suggest a slight change to indicate intent
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