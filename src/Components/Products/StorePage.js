import React,{useState}from 'react';
// import Cart from '../Cart/Cart';
import ProductToScreen from './ProductToScreen';
import CartItems from '../Cart/CartItems';
import CartProvider from '../../Context/ContextProvider';
import HeaderExpense from '../Cart/HeaderExpense';
import Navbar1 from '../../Navbar/Navbar';
import FooterStore from '../../Home/FooterStore';
import CartButton from '../Cart/Cart';

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

      {!CartIsShown&&<Navbar1 onShow={showCartHandler}/>}
      {CartIsShown&&<CartItems onHide={hideCarthandeler}/>}
      <div style={{paddingTop:'60px'}}> 
      <HeaderExpense></HeaderExpense>
      </div>

      <ProductToScreen></ProductToScreen>
      <FooterStore/>
    </CartProvider>
    
        
  )
}

export default Store;