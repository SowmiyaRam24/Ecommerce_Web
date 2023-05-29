import './App.css';
import React from "react";
import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route } from "react-router-dom";
// import { Router, Routes, Route } from 'react-router-dom';
import Store from './Components/Products/StorePage';
import About from './About/About';
import Home from './Home/Home';

// const router=createBrowserRouter([
//   {path:'/',element:<Home/>},
//   {path:'/store', element:<Store/>},
//   {path:'/about',element:<About/>}
// ]);
const routefinitions=createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home/>}/>
    <Route path="/store" element={<Store/>}/>
    <Route path="/about"  element={<About/>}/>
  </Route>
);
const router=createBrowserRouter(routefinitions)



function App() {
  return <RouterProvider router={router}/>
     

      {/* <Switch> 
       <Router>

        <Routes>
           
           
          <Route path="/home"   element={<Home/>}/>
          <Route path="/store"     element={<Store/>}/>
          <Route path="/about" element={<About/>}/>

        </Routes>
      </Router>
      

      
        </Switch> */}
    
  
}

export default App;
