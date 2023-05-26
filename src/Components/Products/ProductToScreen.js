import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import productsArr from './product';

function ProductToScreen() {
  return (
  //   <Row xs={1} md={2} className="g-4 mt-3 ms-5">
  //     <Col>
  //       <Card style={{width:'18rem'}} className="shadow-lg mx-auto">
  //       <Card.Img variant="top" src={props.img}/>

  //       <Card.Title className="text-center " as="h4">{props.title}</Card.Title>
  //       <Card.Body style={{text:'inline'}}>
  //       <Card.Text>${props.price}</Card.Text>
  //        <Button >Add To Cart</Button>
  //      </Card.Body>
  //     </Card>
      
  //     </Col>

  //   </Row>
  // ) 
  <Row xs={1} md={2} className="g-4 mt-3 ms-5">
      {productsArr.map((product, idx) => (
        <Col key={idx}>
          <Card style={{ width: "18rem" }} className="shadow-lg mx-auto">
            <Card.Title className="text-center p-3" as="h4">
              {product.title}
            </Card.Title>
            <Card.Img variant="top" src={product.imageUrl}/>
            <Card.Body>
              <Card.Text as="h4">${product.price}</Card.Text>
              <Button >Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProductToScreen;