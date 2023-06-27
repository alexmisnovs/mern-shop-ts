import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import products from "../products";
import { useParams } from "react-router-dom";
import { IProduct } from "../models/models";
import { Link } from "react-router-dom";

import Rating from "../components/Rating";

// const HomeScreen: React.FC = () => {
const ProductSreen = (): JSX.Element => {
  const { id: productId } = useParams();
  //temp for local data
  const product: IProduct | undefined = products.find(p => p._id === productId);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <h1>Product</h1>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>
              <h4>Price: ${product.price}</h4>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="mt-3">
          {product.description}
        </Col>
      </Row>
    </>
  );
};

export default ProductSreen;
