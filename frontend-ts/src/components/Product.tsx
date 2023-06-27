import React from "react";
import { Card, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { IProduct } from "../models/models";

type ProductProps = {
  product: IProduct;
};

// const HomeScreen: React.FC = () => {
const Product = ({ product }: ProductProps): JSX.Element => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <a href={`/product/${product._id}`}></a>
        <Card.Img src={product.image} variant="top" />

        <Card.Body>
          <a href={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </a>
          <Card.Text as="h3">{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
