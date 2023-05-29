import Container from "react-bootstrap/Container";
import { Navbar,Nav} from "react-bootstrap";
// import CartButton from "./navbarcartbutton";
import {NavLink} from "react-router-dom";
// import AuthContext from "../../Auth/auth-context";
// import { useContext } from "react";

const Navbar1 = (props) => {
//   const authCtx = useContext(AuthContext);

// const history=useHistory()
//   const isLoggedIn = authCtx.isLoggedIn;
//   const logoutHandler = () =>{authCtx.logout();
//     history.replace("/");}
  
  return (
    <div>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <NavLink to="/" className="nav-link">
            HOME
          </NavLink>
          <NavLink to="/store" className="nav-link">
            STORE
          </NavLink>
          <NavLink to="/about" className="nav-link">
            ABOUT
          </NavLink>
          {/* <NavLink to="/contact" className="nav-link">
            CONTACT US
          </NavLink> */}
        </Nav>
      
       {/* <CartButton onButtonpass={props.onOpenButton} />
       <Nav>
       {isLoggedIn && (
            <Button onClick={logoutHandler}variant="info"
            style={{ border: "1px solid skyblue",
            marginLeft: "10px", }}
            type="click">
              Logout
            </Button>
            
          )}
          </Nav> */}
       </Container>
      </Navbar>
     
    </div>
	
   
  );
};
export default Navbar1;