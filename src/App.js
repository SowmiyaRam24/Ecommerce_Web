import './App.css';
import React, { useContext ,useEffect} from "react";
import { Routes,Route,useNavigate,Navigate} from 'react-router-dom';
import Store from './Components/Products/StorePage';
import About from './About/About';
import Home from './Home/Home';
import Contact from './Components/Contact us/Contact';
import AuthForm from './Authendication/AthenticationForm';
import ProductPage from './Components/Products/ProductPage';
import Layout from './Navbar/Layout';
import AuthContext from './Authendication/AuthenContext';



function App(){
  const authCtx= useContext(AuthContext);
  const navigate=useNavigate();
  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      navigate("/auth");
    }
  }, [authCtx.isLoggedIn]);

    return(
      <Layout>
        <Routes>
        <Route path="/" exact  element={<AuthForm/>}/>
         <Route path="/home"   element={ authCtx.isLoggedIn?<Home/>:<Navigate to="/"/>}/>
         <Route path="/store"  element={authCtx.isLoggedIn?<Store/>:<Navigate to="/"/>}/>
         <Route path="/about" element={authCtx.isLoggedIn?<About/>:<Navigate to="/"/>}/>
        <Route path ="/contact" element={authCtx.isLoggedIn?<Contact/>:<Navigate to="/"/>}/>
        <Route path="/product/:id" element={authCtx.isLoggedIn ? <ProductPage/> : <Navigate to="/" />} />
          <Route path="*" element=
        {<Navigate to='/'/>}/>
          
        </Routes>
      </Layout> 
      );
  }

export default App;
