import React,{useState}from 'react';
import Cart from '../Cart/Cart';
import ProductToScreen from './ProductToScreen';
import CartItems from '../Cart/CartItems';
import CartProvider from '../../Context/ContextProvider';
import HeaderExpense from '../Cart/HeaderExpense';
import Navbar1 from '../../Navbar/Navbar';

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
      <Navbar1></Navbar1>
      {CartIsShown&&<CartItems onHide={hideCarthandeler}/>}
      {!CartIsShown&&<Cart onShow={showCartHandler}/>}
      <HeaderExpense></HeaderExpense>
      <ProductToScreen></ProductToScreen>
    </CartProvider>
    
        
  )
}

export default Store;