import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Spinner, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productname: '',
    productdescription: '',
    productprice: '',
    productdiscounted_price: '',
    productrating: 5,
    productimg: null,
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === 'productimg') {
      setFormData({ ...formData, productimg: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Blur and show spinner

    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));

    try {
      await axios.post('https://indokonabackend-1.onrender.com/api/product/', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setLoading(false);
      setSuccessMsg(true);

      // Hide success message after 5 seconds
      setTimeout(() => setSuccessMsg(false), 5000);

      // Reset form fields
      setFormData({
        productname: '',
        productdescription: '',
        productprice: '',
        productdiscounted_price: '',
        productrating: 5,
        productimg: null,
      });
    } catch (error) {
      console.error('Error adding product:', error);
      setLoading(false);
      alert('Failed to add product. Please try again.');
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* ✅ Blur Effect */}
      <div style={{ filter: loading ? 'blur(5px)' : 'none', pointerEvents: loading ? 'none' : 'auto' }}>
        <Container className="mt-5 p-4 bg-light rounded shadow">
          <h2 className="mb-4 text-center">Add Product</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="productname"
                value={formData.productname}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="productdescription"
                value={formData.productdescription}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="productprice"
                value={formData.productprice}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Discounted Price</Form.Label>
              <Form.Control
                type="number"
                name="productdiscounted_price"
                value={formData.productdiscounted_price}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                name="productrating"
                value={formData.productrating}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Product Image</Form.Label>
              <Form.Control type="file" name="productimg" onChange={handleChange} required />
            </Form.Group>

            <div className="text-center">
              <Button type="submit" className="mt-2 px-4">
                Add Product
              </Button>
            </div>
          </Form>
        </Container>
      </div>

      {/* ✅ Loading Overlay */}
      {loading && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Spinner animation="border" role="status" variant="primary" />
          <span className="ms-2 fw-bold">Adding Product...</span>
        </div>
      )}

      {/* ✅ Success Message */}
      {successMsg && (
        <Alert
          variant="success"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 9999,
            boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
          }}
        >
          ✅ Product added successfully!
        </Alert>
      )}
    </div>
  );
};

export default AddProduct;
