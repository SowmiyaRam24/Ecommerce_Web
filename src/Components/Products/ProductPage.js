import { useParams } from "react-router-dom";
import productsArr from './product';
import Navbar1 from "../../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import './ProductPage.css';

const ProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = productsArr[id];

  const backToPage = () => {
    navigate("/store");
  }

  return (
    <>
      
        <Navbar1 />
       <div className="product-page-container">
        <div className="product-details">
          <h1>{product.title}</h1>
          <img src={product.imageUrl} alt={product.title} />
          <h2>${product.price}</h2>
          <p>Reviews:</p>
          {product.title}
          <button style={{backgroundColor:'skyblue'}} onClick={backToPage}>Back</button>
        </div>
      </div>
    </>

  );
};

export default ProductPage;