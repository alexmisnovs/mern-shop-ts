import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
// import products from "../products";
import { IProduct } from "../models/models";
import Product from "../components/Product";
import axios from "axios";

// const HomeScreen: React.FC = () => {
const HomeScreen = (): JSX.Element => {
  const [products, setProducts] = useState<IProduct[]>();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products?.map(product => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
