import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';

const AddProduct = () => {
    const [formData, setFormData] = useState({
        productname: '',
        productdescription: '',
        productprice: '',
        productdiscounted_price: '',
        productrating: 5,
        productimg: null
    });

    const handleChange = (e) => {
        if(e.target.name === 'productimg'){
            setFormData({...formData, productimg: e.target.files[0]});
        } else {
            setFormData({...formData, [e.target.name]: e.target.value});
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach(key => data.append(key, formData[key]));
        
        await axios.post('https://indokonabackend-1.onrender.com/api/add-product/', data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        alert('Product Added Successfully!');
    }

    return (
        <Container className='mt-5'>
            <h2>Add Product</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" name="productname" onChange={handleChange} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="productdescription" onChange={handleChange} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name="productprice" onChange={handleChange} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Discounted Price</Form.Label>
                    <Form.Control type="number" name="productdiscounted_price" onChange={handleChange} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="number" name="productrating" onChange={handleChange} value={formData.productrating} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Product Image</Form.Label>
                    <Form.Control type="file" name="productimg" onChange={handleChange} required />
                </Form.Group>
                <Button type="submit" className='mt-3'>Add Product</Button>
            </Form>
        </Container>
    );
}

export default AddProduct;
