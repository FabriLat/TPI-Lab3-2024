import { Container, Button, Row, Col } from "react-bootstrap";
import ModalToBuy from "../moviesDashboard/modalToBuy/ModalToBuy";
import { useState } from "react";

const MovieDetails = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  console.log("hola");

  return (
    <Container fluid style={{ marginLeft: "100px", width: "80%" }}>
      <Row>
        <Col md={4}>
          {"imagen"}
          <h1>TITULO</h1>
          <p>Rating: --- / 5</p>
          <p>DESCRIPCION DE LA PELICULA</p>
        </Col>
        <Col style={{ marginLeft: "200px" }}>
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
