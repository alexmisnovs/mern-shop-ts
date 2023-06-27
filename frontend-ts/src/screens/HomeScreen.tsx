import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import products from "../products";

// const HomeScreen: React.FC = () => {
const HomeScreen = (): JSX.Element => {
  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map(product => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <p></p>
            {product.name}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;