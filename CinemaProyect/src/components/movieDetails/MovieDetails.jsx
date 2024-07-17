import { Container, Button, Row, Col } from "react-bootstrap";
import ModalToBuy from "../moviesDashboard/modalToBuy/ModalToBuy";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../services/authentication/user.context";
import ClientNavBar from "../clientNavBar/ClientNavBar";
import AdminNavBar from "../adminNavBar/AdminNavBar";
import NavBar from "../navBar/NavBar";

const MovieDetails = () => {
  const location = useLocation();
  const [modalShow, setModalShow] = useState(false);
  const { title, image, rating, runTime, description } =
    location.state && location.state.movie ? location.state.movie : {};

  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  const { user } = useContext(UserContext);

  console.log("hola" + title, rating);

  return (
    <>
      {user && user.type === "client" ? (
        <ClientNavBar />
      ) : user && user.type === "admin" ? (
        <AdminNavBar />
      ) : (
        <NavBar />
      )}
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
            <p>Duracion: {runTime} mins</p>
          </Col>
          <Col style={{ marginLeft: "200px", marginTop: "250px" }}>
            <p
              style={{
                fontSize: "20px",
                width: "700px",
                textAlign: "justify",
                marginTop: "10px",
              }}
            >
              {description}
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
    </>
  );
};

export default MovieDetails;
