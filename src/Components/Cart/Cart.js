import React from 'react';
import Button from 'react-bootstrap/Button';


function Cart(props) {
  return (
    <Button onClick={props.onShow}>cart</Button>
    
  )
}

export default Cart;