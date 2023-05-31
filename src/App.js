import './App.css';
import React from "react";
// import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route } from "react-router-dom";
import {  Route } from 'react-router-dom';
import Store from './Components/Products/StorePage';
import About from './About/About';
import Home from './Home/Home';
import Contact from './Components/Contact us/Contact';

// const router=createBrowserRouter([
//   {path:'/',element:<Home/>},
//   {path:'/store', element:<Store/>},
//   {path:'/about',element:<About/>}
// ]);
// const routefinitions=createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home/>}/>
//     <Route path="/store" element={<Store/>}/>
//     <Route path="/about"  element={<About/>}/>
//     <Route path="/contact" element={<Contact/>}/>
//   </Route>
// );
// // const router=createBrowserRouter(routefinitions)



function App() {
    // return(
  //<RouterProvider router={router}/>
     

      // //  <Switch> 
      //  <Router>

      //   <Routes>
           
        // <>
        //   <Route path="/home"   element={<Home/>}/>
        //   <Route path="/store"     element={<Store/>}/>
        //   <Route path="/about"   element={<About/>}/>
        // </>

        //  </Routes>
      // </Router>
      

      
      //   </Switch> 
      // // return(

      //   <>
      //   <Route path="/home">
      //     <Home/>
      //   </Route> 
      //   <Route path="/store" >
      //     <Store/>
      //   </Route>
      //   <Route path="/about" >
      //     <About/>
      //   </Route>
      //   <Route path="/contact">
      //     <Contact/>
      //   </Route> 
      //   </>
      );
      
    
  
}

export default App;
