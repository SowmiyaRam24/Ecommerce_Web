import React from 'react';
import HeaderForHome from './Headerforhome' ;
import FooterForHome from './FooterHome';
import HomeBody from './HomeBody';
import Navbar1 from '../Navbar/Navbar';
function Home() {
    return (
      <div>
         <Navbar1/>
         <div style={{paddingTop:'3px'}}>
          < HeaderForHome/> 
         </div>
         <HomeBody/>
          <FooterForHome/>
  
  
      </div>
    )
  }
  export default Home;