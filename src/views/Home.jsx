import { Container, Row, Col } from "react-bootstrap";
import Image from "../assets/title.png";
import "../styles/styles.css";

const Home = () => {
  return (
    <Container className="custom-font">
      <Row className="justify-content-center align-items-center">
        <Col className="text-center container-title">
          <h1 className="title">Bienvenido a la Pokedex</h1>
          <img src={Image} alt="Imagen" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
