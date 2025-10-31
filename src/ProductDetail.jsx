import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
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

  if (!product) return <h2 className="text-center mt-5">Loading Product...</h2>;

  return (
    <div className="container mt-4">
      <h2>{product.productname}</h2>
      <img src={product.productimg} alt="" style={{ width: "100%", maxWidth: "350px" }} />
      <p>{product.productdescription}</p>
      <h4>Price: ₹{product.productdiscounted_price}</h4>
    </div>
  );
};

export default ProductDetail;
