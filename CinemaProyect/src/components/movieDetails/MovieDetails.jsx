
import { Card, Button, Row, Col } from "react-bootstrap";
import ModalToBuy from "../moviesDashboard/modalToBuy/ModalToBuy";

const MovieDetails = ({ movie, onBuy }) => {
  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  return (
    <Card className="mb-4" style={{ maxWidth: "700px" }}>
      <Row noGutters>
        <Col md={4}>
          {/* <Card.Img
            src={movie.image}
            style={{ height: "100%", objectFit: "cover" }}
            alt={movie.title}
          /> */}
          <Card.Body>
            <Card.Title>Titulo</Card.Title>
            <Card.Text>Rating: --- / 5</Card.Text>
          </Card.Body>
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Text>DESCRIPCIÓN </Card.Text>
            <Button variant="success" onClick={onBuy}>
              Comprar entrada
            </Button>
            <ModalToBuy  handleClose={handleModalClose} />
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default MovieDetails;