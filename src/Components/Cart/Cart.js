// import React from 'react';
// import Button from 'react-bootstrap/Button';


// function Cart(props) {
//   return (
//     <Button onClick={props.onShow}>cart</Button>
    
//   )
// }

// import CartContext from 
// export default Cart; 
import { Fragment, useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from '../../Context/Context';
const CartButton = (props) => {
  const cartctx = useContext(CartContext);
  const quantity = cartctx.totalAmount;
  return (
    <Fragment>
      <Button
        onClick={props.onButtonpass}
        variant="dark"
        style={{ border: "1px solid skyblue" }}
        type="click">
        Cart {quantity}
      </Button>
    </Fragment>
  );
};
export default CartButton;