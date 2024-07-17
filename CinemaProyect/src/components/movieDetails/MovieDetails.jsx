import { Container, Button, Row, Col } from "react-bootstrap";
import ModalToBuy from "../moviesDashboard/modalToBuy/ModalToBuy";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const MovieDetails = () => {
  const location = useLocation();
  const [modalShow, setModalShow] = useState(false);
  const { title, image, rating, runTime } = location.state && location.state.movie ? location.state.movie : {};

  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  console.log("hola" + title,rating);


  return (
    <Container fluid style={{ marginLeft: "100px", width: "80%" }}>
      <Row>
      <Col md={4}>
          <img
            src={image}
            style={{ width: "500px", height: "700px", marginTop: "50px" }}
            alt={title}
          />
          <h1>{title}</h1>
          <p>Rating: {rating} / 5</p>
          <p>Duracion: {runTime}</p>
        </Col>
        <Col style={{ marginLeft: "200px", marginTop: "250px" }}>
          <p
            style={{ width: "700px", textAlign: "justify", marginTop: "50px" }}
          >
            Con este enfoque, cuando el usuario haga clic en el botón Comprar
            entrada en cualquier tarjeta de película, será redirigido a una
            nueva ruta que muestra los detalles de la película seleccionada. La
            información de la película se pasará utilizando el estado de la
            ubicación.fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff
          </p>
          <Button
            variant="success"
            onClick={handleModalShow}
            className="d-flex justify-content-end"
            style={{ marginLeft: "530px", marginTop: "100px" }}
          >
            Comprar entrada
          </Button>

          <ModalToBuy show={modalShow} handleClose={handleModalClose} />
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
