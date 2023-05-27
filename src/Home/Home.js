import React from 'react';
import HeaderForHome from './Headerforhome' ;
import FooterForHome from './FooterHome';
import HomeBody from './HomeBody';
function Home() {
    return (
      <div>
         {/* <Navbar1 /> */}
         <HeaderForHome/> 
         <HomeBody/>
          <FooterForHome/>
  
  
      </div>
    )
  }
  export default Home;