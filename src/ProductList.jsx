import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://indokonabackend-1.onrender.com/api/product/')
            .then(res => setProducts(res.data))
    }, []);

    const addToCart = async (id) => {
        await axios.post('https://indokonabackend-1.onrender.com/api/cart/', { product_id: id });
        alert('Added to cart');
    }

    return (
        <Container className='mt-5'>
            <h2>Products</h2>
            <Row>
                {products.map(product => (
                    <Col md={4} key={product.id} className='mb-3'>
                        <Card>
                            <Card.Img variant="top" src={`https://indokonabackend-1.onrender.com${product.productimg}`} />
                            <Card.Body>
                                <Card.Title>{product.productname}</Card.Title>
                                <Card.Text>{product.productdescription}</Card.Text>
                                <Card.Text>Price: ₹{product.productdiscounted_price}</Card.Text>
                                <Button onClick={() => addToCart(product.id)}>Add to Cart</Button>
                                <Button variant='success' className='ms-2' onClick={() => navigate('/cart')}>Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ProductList;
