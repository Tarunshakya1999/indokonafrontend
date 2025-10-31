import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const res = await axios.get(
          `https://indokonabackend-1.onrender.com/api/product/${id}/`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, [id]);

  // ✅ Add to Cart function
  const addToCart = async () => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      alert("Please login first!");
      navigate("/login");
      return;
    }

    try {
      await axios.post(
        "https://indokonabackend-1.onrender.com/api/cart/",
        { product_id: id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("✅ Product added to your cart!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("❌ Something went wrong!");
    }
  };

  if (!product) return <h2 className="text-center mt-5">Loading Product...</h2>;

  return (
    <div className="container mt-4 text-center">
      <h2 className="mb-3">{product.productname}</h2>

      <img
        src={product.productimg}
        alt=""
        style={{ width: "100%", maxWidth: "350px", borderRadius: "10px" }}
      />

      <p className="mt-3">{product.productdescription}</p>
      <h4>Price: ₹{product.productdiscounted_price}</h4>

      {/* ✅ Add to Cart Button */}
      <button className="btn btn-primary mt-3" onClick={addToCart}>
        🛒 Add to Cart
      </button>

      {/* ✅ Buy Now Button */}
      <button
        className="btn btn-success mt-3 ms-2"
        onClick={() => navigate("/cart")}
      >
        💳 Buy Now
      </button>
    </div>
  );
};

export default ProductDetail;
