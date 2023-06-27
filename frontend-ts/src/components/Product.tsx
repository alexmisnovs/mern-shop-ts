import { Card } from "react-bootstrap";
import { IProduct } from "../models/models";
import { Link } from "react-router-dom";
import Rating from "./Rating";

type ProductProps = {
  product: IProduct;
};

// const HomeScreen: React.FC = () => {
const Product = ({ product }: ProductProps): JSX.Element => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}></Link>
        <Card.Img src={product.image} variant="top" />

        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
          </Card.Text>
          <Card.Text as="h3">{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
