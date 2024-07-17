import { Card, Container, Button, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import ClientNavBar from "../clientNavBar/ClientNavBar";
import { useContext } from "react";
import { UserContext } from "../../services/authentication/user.context";
import AdminNavBar from "../adminNavBar/AdminNavBar";
import NavBar from "../navBar/NavBar";
import { useNavigate } from "react-router-dom";

const MoviesDashboard = ({ movies }) => {
  console.log("renderizado /movies");
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const getMovieHandle = (movie) => {
    let id = movie.id;
    let title = movie.title;
    let image = movie.image;
    let rating = movie.rating;
    let runTime = movie.runTime;
    let description = movie.description;
    console.log(movie.description);

    navigate(`/movie/${id}`, {
      state: {
        movie: {
          title,
          image,
          rating,
          runTime,
          description,
        },
      },
    });
  };

  return (
    <>
      {user && user.type === "client" ? (
        <ClientNavBar />
      ) : user && user.type === "admin" ? (
        <AdminNavBar />
      ) : (
        <NavBar />
      )}
      <Container className="d-flex justify-content-center align-items-center">
        <Row className="flex-wrap">
          <h1 className="align-items-center text-center m-4">Cartelera</h1>
          {movies.length > 0
            ? movies.map((movie) => (
                <Col
                  key={movie.id}
                  s={12}
                  sm={6}
                  md={4}
                  lg={3}
                  className="mb-4"
                >
                  <Card key={movie.id} style={{ backgroundColor: "black" }}>
                    <Card.Img
                      style={{ height: "500px", objectFit: "cover" }}
                      variant="top"
                      src={movie.image}
                      alt={movie.title} // Añade un atributo alt para accesibilidad
                    />
                    <Card.Body style={{ backgroundColor: "black" }}>
                      <Card.Title style={{ color: "white" }}>
                        {movie.title}
                      </Card.Title>
                      <Card.Text style={{ color: "white" }}>
                        Duración: {movie.runTime} min
                      </Card.Text>
                      <Card.Text style={{ color: "white" }}>
                        Rating: {movie.rating} / 5
                      </Card.Text>
                      <Button
                        variant="success"
                        onClick={() => getMovieHandle(movie)}
                      >
                        Comprar entrada
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            : null}
        </Row>
      </Container>
    </>
  );
};

export default MoviesDashboard;

MoviesDashboard.propTypes = {
  initialMovies: PropTypes.array,
};
