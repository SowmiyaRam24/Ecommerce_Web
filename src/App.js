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
        <Route path="/login" exact  element={<AuthForm/>}/>
         <Route path="/home"   element={ authCtx.isLoggedIn?<Home/>:<Navigate to="/login"/>}/>
         <Route path="/store"  element={authCtx.isLoggedIn?<Store/>:<Navigate to="/login"/>}/>
         <Route path="/about" element={authCtx.isLoggedIn?<About/>:<Navigate to="/login"/>}/>
        <Route path ="/contact" element={authCtx.isLoggedIn?<Contact/>:<Navigate to="/login"/>}/>
        <Route path="/product/:id" element={authCtx.isLoggedIn ? <ProductPage/> : <Navigate to="/login" />} />
          <Route path="*" element=
        {<Navigate to='/login'/>}/>
          
        </Routes>
      </Layout> 
      );
  }

export default App;
