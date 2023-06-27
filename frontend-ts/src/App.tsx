import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>hello shop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
