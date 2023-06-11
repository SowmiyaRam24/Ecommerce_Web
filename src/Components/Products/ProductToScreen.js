import React,{useContext,useState} from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import productsArr from './product';
import CartContext from '../../Context/Context';
import CartItems from '../Cart/CartItems';

function ProductToScreen() {
  const cartcxt = useContext(CartContext);
  const [cartVisible, setCartVisible] = useState(false); // State variable to manage cart visibility

  const showCartHandler = () => {
    setCartVisible(true);
  };

  return (
    <>
 
  <Row xs={1} md={2} className="g-4 mt-3 ms-5">
      {productsArr.map((product, idx) => (
        <Col key={idx}>
          <Card style={{ width: "18rem" }} className="shadow-lg mx-auto">
             <Link to={`/product/${idx}`}>
                <Card.Img variant="top" src={product.imageUrl} />
              </Link>
            <Card.Title  style={{fontFamily:"fantasy"}}className="text-center " as="h4">
            {product.title}
             </Card.Title>
            <Card.Body >
              <span style={{fontSize:"20px",fontWeight:"bold"}}>
                ${product.price}
              </span>
              <span style={{paddingLeft:"40%"}} >
                <Button
                  variant="info"
                  style={{ color: "white", textDecorationStyle: "bold"}}
                  as="input"
                  type="submit"
                  value="ADD TO CART"
                  size="sm"
                  onClick={() => cartcxt.addItem({...product,amount:1,id:Math.random().toString(36)})}//in this we given the initial cart amounts..
                  
                />
              </span>
            </Card.Body>
            
          </Card>
        </Col>
      ))}
    </Row>
    <div style={{ color: "skyblue", textAlign: "center" }}>
    <Button
    variant="primary"
    style={{ color: "white", textAlign: "center" }}
    onClick={showCartHandler}
  >
    See the cart
  </Button>
  </div>{" "}
  {cartVisible && <CartItems onHide={() => setCartVisible(false)} />}
    </>
  );
}

export default ProductToScreen;
