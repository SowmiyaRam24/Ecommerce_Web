import Container from "react-bootstrap/Container";
import { Navbar,Nav} from "react-bootstrap";
import {NavLink,useLocation,useNavigate} from "react-router-dom";
import AuthContext from "../Authendication/AuthenContext";
import Button from "react-bootstrap/Button";

import CartButton from "../Components/Cart/Cart";
import { useContext } from "react";

const Navbar1 = (props) => {
  const authCtx = useContext(AuthContext);
  const navigate=useNavigate();
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () =>{authCtx.logout()
    navigate("/")}
  const location = useLocation();
  
  return (
    <div>
    <header>

    <Navbar bg="dark" variant="dark" >
      <Container>
        <Nav className="me-auto">
         {!isLoggedIn&& <NavLink to="/" className="nav-link">LOGIN</NavLink>}
          {isLoggedIn&&<NavLink to="/home" className="nav-link">
            HOME
          </NavLink>}
          {isLoggedIn&&<NavLink to="/store" className="nav-link">
            STORE
          </NavLink>}
          {isLoggedIn&&<NavLink to="/about" className="nav-link">
            ABOUT
          </NavLink>}
          {isLoggedIn&& <NavLink to="/contact" className="nav-link">
            CONTACT US
          </NavLink> }
          {/* {isLoggedIn&& <NavLink className="nav-link"> LOGOUT</NavLink>} */}

        </Nav>
      
       {location.pathname === "/store" && <CartButton onButtonpass={props.onShow} />}
           
       <Nav>
       {isLoggedIn && (
            <Button onClick={logoutHandler}variant="info"
            style={{ border: "1px solid skyblue",
            marginLeft: "10px", }}
            type="click">
              Logout
            </Button>
            
          )}
          </Nav>
       </Container>
      </Navbar>
     
    </header>
    </div>
	
   
  );
};
export default Navbar1;