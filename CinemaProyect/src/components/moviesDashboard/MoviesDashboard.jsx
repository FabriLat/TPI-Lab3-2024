import { Card, Container, Button, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const MoviesDashboard = ({ initialMovies }) => {
  return (
    <>
      <Container className="d-flex justify-content-center align-items-center">
        <Row className="flex-wrap"> 
          <h1 className="align-items-center text-center">Cartelera</h1>
          {initialMovies.map((movie) => (
            <Col key={movie.id} s={12} sm={6} md={4} lg={3} className="mb-4">
              <Card key={movie.id}>
                <Card.Img  style={{ height: "350px", objectFit: "cover"}} variant="top" src={movie.image} />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>Duración: {movie.runTime} min</Card.Text>
                  <Card.Text>Rating: {movie.rating} / 5</Card.Text>
                  <Button variant="success">Comprar entrada</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default MoviesDashboard;

MoviesDashboard.propTypes = {
  initialMovies: PropTypes.array,
};
