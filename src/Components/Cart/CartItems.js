import React from 'react';
import Modal from '../Modal/Modal';
import { Card, Button } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import Classes from './CartItems.module.css';
import CartHeader from "./cartheader";
import CartContext from '../../Context/Context';

function CartItems(props) {
  const [purches,purchaseing]=useState(" ");//for alert purchaseing
  const cartctx = useContext(CartContext);
  const [price, setPrice] = useState(0);
  const priceHandler = () => {
    let ans = 0;
    cartctx.items.map((item) => (ans = ans + item.amount * item.price));
    setPrice(ans);
  };
  useEffect(() => {
    priceHandler();
  });
  const ITemRemoveHandler = (id) => {
    const arr = cartctx.items.filter((item) => item.title !==id);
    cartctx.removeItem(arr);
  };
  const IncreaseAndDecrease = cartctx.incAndDecFun;
  const purchas=()=>{
    purchaseing(
    alert('Oder is placed'))
  }
  return (
    <Modal onClose={props.onHide}>
         {/* <button onClick={props.onHide}>x</button>  */}

        <div>
        <div style={{ margin: "1px 1px 1rem 34rem" }}>
        {" "}
        <Button
          onClick={props.onHide}
          variant="danger"
          as="input"
          size="sm"
          type="submit"
          value="X"
        ></Button>
        </div>
    <Card>
       <Card.Title style={{ textAlign: "center" }}>
            <h1>CART</h1>
            </Card.Title>
          <CartHeader> </CartHeader>
          {cartctx.items.map((item) => (
            <div key={item.title}>
              <div>
                <div style={{ display: "inline-block" }}>
                  <Card className={Classes.card}>
                    <img src={item.imageUrl} alt="img" width="90px"></img>{" "}
                    <b>
                      <span className={Classes.title}>{item.title}</span>
                    </b>
      
        
                  </Card>
                </div>
                <b>
                  <span className={Classes.price}>{item.price}</span>
                  <span className={Classes.quantity}>{item.amount} </span>
                  <button
                    className={Classes.button}
                    onClick={() => IncreaseAndDecrease(item, -1)}
                  >
                    -
                  </button>
                  <button
                    className={Classes.button}
                    onClick={() => IncreaseAndDecrease(item, +1)}
                  >
                    +
                  </button>
                </b>
                <Button
                  className={Classes.removeButton}
                  onClick={() => ITemRemoveHandler(item.title)}
                  variant="danger"
                >
                  REMOVE
                </Button>
              </div>
              <hr></hr>
            </div>
          ))}
        </Card>
        <div style={{ margin: " 1rem auto auto 25rem ", textAlign: "center" }}>
          {" "}
          <span>
              <h5>TOTAL AMOUNT💰:{price}₹</h5>
            
          </span>
        </div>
        <Button variant="info" style={{ margin: " 2rem auto auto 17rem " }} onClick={purchas} >
         PURCHASE
        </Button>
        <Button variant="danger"
        style={{ margin: " 2rem auto auto 2rem " }}
          as="input"
          size="sm"
          type="submit"
          value="close"onClick={props.onHide}></Button>
          
       
      </div>

    </Modal >
  )
}

export default CartItems;