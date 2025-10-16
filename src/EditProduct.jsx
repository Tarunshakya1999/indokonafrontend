import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const { id } = useParams(); // product id from URL
  const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDiscountedPrice, setProductDiscountedPrice] = useState("");
  const [productRating, setProductRating] = useState(5);
  const [productImage, setProductImage] = useState(null); // string (URL) or File
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("access_token");

  // ✅ Fetch existing product data
  useEffect(() => {
    if (!token) {
      alert("Please login as admin!");
      navigate("/login");
      return;
    }

    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `https://indokonabackend-1.onrender.com/api/product/${id}/`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setProductName(res.data.productname);
        setProductDescription(res.data.productdescription);
        setProductPrice(res.data.productprice);
        setProductDiscountedPrice(res.data.productdiscounted_price);
        setProductRating(res.data.productrating);
        setProductImage(res.data.productimg); // existing image URL
      } catch (error) {
        console.error("Error fetching product:", error);
        alert("Failed to fetch product data!");
      }
    };

    fetchProduct();
  }, [id, token, navigate]);

  // ✅ Update product
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("productname", productName);
    formData.append("productdescription", productDescription);
    formData.append("productprice", productPrice);
    formData.append("productdiscounted_price", productDiscountedPrice);
    formData.append("productrating", productRating);
    if (productImage instanceof File) formData.append("productimg", productImage);

    try {
      await axios.put(
        `https://indokonabackend-1.onrender.com/api/product/${id}/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Product updated successfully!");
      navigate("/"); // back to product list
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      <h2>Edit Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Original Price (₹)</Form.Label>
          <Form.Control
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Discounted Price (₹)</Form.Label>
          <Form.Control
            type="number"
            value={productDiscountedPrice}
            onChange={(e) => setProductDiscountedPrice(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Rating</Form.Label>
          <Form.Control
            type="number"
            value={productRating}
            min={1}
            max={5}
            onChange={(e) => setProductRating(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Image</Form.Label>

          {/* ✅ Show existing or newly selected image */}
          {productImage && (
            <div className="mb-2">
              <img
                src={
                  typeof productImage === "string"
                    ? productImage
                    : URL.createObjectURL(productImage)
                }
                alt="Product"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            </div>
          )}

          <Form.Control
            type="file"
            onChange={(e) => setProductImage(e.target.files[0])}
          />
        </Form.Group>

        <Button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update Product"}
        </Button>
      </Form>
    </Container>
  );
};

export default EditProduct;
