import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Cart.css';

const Cart = (props) => {
    const { img, name, time, details } = props.cart;
    return (
        <div className='carts'>
            <Card style={{ width: '18rem' }} className='cartItem'>
                <Card.Img variant="top" className='cardImage' src={img} />
                <Card.Body className='card-info'>
                    <Card.Title className='card-name'>Type of Swimming : {name}</Card.Title>
                    <Card.Text>
                        description:  {details}
                    </Card.Text>
                    <Card.Text className='time'>
                        Time: {time}S
                    </Card.Text>

                </Card.Body>
                <button onClick={() => props.AddToCart(props.cart)} className='card-button' variant="primary">Add to List</button>
            </Card>
        </div>
    );
};

export default Cart;