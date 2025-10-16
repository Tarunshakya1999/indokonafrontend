import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get('https://indokonabackend-1.onrender.com/api//cart/')
            .then(res => setCartItems(res.data))
    }, []);

    const removeItem = async (id) => {
        await axios.delete(`https://indokonabackend-1.onrender.com/api/cart/${id}/`);
        setCartItems(cartItems.filter(item => item.id !== id));
    }

    return (
        <Container className='mt-5'>
            <h2>Your Cart</h2>
            <Row>
                {cartItems.map(item => (
                    <Col md={4} key={item.id} className='mb-3'>
                        <Card>
                            <Card.Img variant="top" src={`https://indokonabackend-1.onrender.com/${item.product.productimg}`} />
                            <Card.Body>
                                <Card.Title>{item.product.productname}</Card.Title>
                                <Card.Text>Price: ₹{item.product.productdiscounted_price}</Card.Text>
                                <Card.Text>Quantity: {item.quantity}</Card.Text>
                                <Button variant="danger" onClick={() => removeItem(item.id)}>Remove</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CartPage;
