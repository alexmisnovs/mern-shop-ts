import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import products from "../products";
import Product from "../components/Product";

// const HomeScreen: React.FC = () => {
const HomeScreen = (): JSX.Element => {
  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map(product => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
