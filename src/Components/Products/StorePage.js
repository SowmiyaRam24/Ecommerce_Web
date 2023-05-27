import React,{useState}from 'react';
import Cart from '../Cart/Cart';
import ProductToScreen from './ProductToScreen';
import CartItems from '../Cart/CartItems';
import CartProvider from '../../Context/ContextProvider';
import HeaderExpense from '../Cart/HeaderExpense';

function Store() {
const [CartIsShown,setCartIsShown]=useState(false)
const showCartHandler=()=>{
  setCartIsShown(true);
};
const hideCarthandeler=()=>{
  setCartIsShown(false);
};



  return (
    <CartProvider>
      {CartIsShown&&<CartItems onHide={hideCarthandeler}/>}
      {!CartIsShown&&<Cart onShow={showCartHandler}/>}
      <HeaderExpense></HeaderExpense>
      <ProductToScreen></ProductToScreen>
    </CartProvider>
    
        
  )
}

export default Store;