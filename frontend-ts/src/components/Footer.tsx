import { Row, Col, Container } from "react-bootstrap";

const Footer = (): JSX.Element => {
  const currYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>MernShopTs &copy; {currYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
