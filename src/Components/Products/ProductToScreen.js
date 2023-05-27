import React,{useContext} from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import productsArr from './product';
import CartContext from '../../Context/Context';

function ProductToScreen() {
  const cartcxt = useContext(CartContext);


  return (
    <>
 
  <Row xs={1} md={2} className="g-4 mt-3 ms-5">
      {productsArr.map((product, idx) => (
        <Col key={idx}>
          <Card style={{ width: "18rem" }} className="shadow-lg mx-auto">
            <Card.Img variant="top" src={product.imageUrl}/>
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
                  onClick={() => cartcxt.addItem({...product,amount:1,id:Math.random().toString(36)})}
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
    style={{ color: "skyblue", textAlign: "center" }}
  >
    See the cart
  </Button>
  </div>{" "}
    </>
  );
}

export default ProductToScreen;
// const Items = (props) => {
//   const cartcxt = useContext(CartContext);

//   return (
//     <div>
//       <h1 className={classes.h1}>MUSIC</h1>
//       {props.Item.map((items) => (
//         <div className={classes.item} key={items.title}>
//           <Card style={{ width: "18rem", height: "15rem" }}>
//             <Card.Title
//               style={{ color: "black", textAlign: "center", margin: "20px" }}
//             >
//               {items.title}
//             </Card.Title>

//             <Card.Img src={items.imageUrl} alt="colorimg" />

//             <Card.Body>
//               {items.price}₹
//               <span>
//                 <Button
//                   variant="info"
//                   style={{ color: "white", textDecorationStyle: "bold" }}
//                   as="input"
//                   type="submit"
//                   value="ADD TO CART"
//                   size="sm"
//                   onClick={() => cartcxt.addItem({...items,amount:1,id:Math.random().toString(36)})}
//                 />
//               </span>
//             </Card.Body>
//           </Card>
//         </div>
//       ))}
//       <div style={{ color: "skyblue", textAlign: "center" }}>
//         <Button
//           variant="secondary"
//           style={{ color: "skyblue", textAlign: "center" }}
//         >
//           See the cart
//         </Button>
//       </div>
//     </div>
//   );
// };
// export default Items;