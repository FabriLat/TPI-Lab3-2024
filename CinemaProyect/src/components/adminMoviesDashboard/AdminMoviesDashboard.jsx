import { Card, Container, Button, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import AdminNavBar from "../adminNavBar/AdminNavBar";


const AdminMoviesDashboard = ({ movies}) => {
  return (
    <>
    <AdminNavBar/>
      <Container className="d-flex justify-content-center align-items-center">
        <Row className="flex-wrap"> 
          <h1 className="align-items-center text-center m-4">Cartelera</h1>
          {movies.length > 0 ? movies.map((movie) => (
            <Col key={movie.id} s={12} sm={6} md={4} lg={3} className="mb-4">
              <Card  key={movie.id}>
                <Card.Img  style={{ "height": "350px", "objectFit": "cover"}} variant="top" src={movie.image} />
                <Card.Body style={{"backgroundColor": "black"}}>
                  <Card.Title style={{"color": "white", "backgroundColor": "black"}}>{movie.title}</Card.Title>
                  <Card.Text style={{"backgroundColor": "black", "color": "white"}}>Duración: {movie.runTime} min</Card.Text>
                  <Card.Text  style={{"backgroundColor": "black", "color": "white"}}>Rating: {movie.rating} / 5</Card.Text>
                  <Button variant="primary" className="m-1">Modificar</Button>
                  <Button variant="danger" className="m-1">Eliminar</Button>
                  <Button variant="success" className="m-1">Comprar entrada</Button>
                </Card.Body>
              </Card>
            </Col>
          )) : null}
        </Row>
      </Container>
    </>
  );
};

export default AdminMoviesDashboard;

AdminMoviesDashboard.propTypes = {
  initialMovies: PropTypes.array,
};
