import { Card, Container, Button, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import NavBar from "../navBar/NavBar";
import { useEffect, useState } from "react";
// import { NavigationContext } from "../services/navigation/navigation.context";
// import { useEffect } from "react";
// import { useContext } from "react";

const MoviesDashboard = () => {

  const [movies, setMovies] = useState([]); // array vacio


  // llamada a la FAKE API. useEffect asegura q se ejecute una vez q el componente se renderice
  useEffect(() => {
    // defino funcion asincrona para fetchear la data
    const fetchMovies = async () =>{
      // intenta fetchear
      try{
        const response = await fetch("http://localhost:8000/movies");
        const movieData = await response.json();
        setMovies(movieData); //¡seteo movies
      } // si no puede, muestra error
      catch (error){
          console.log("Error al solicitar películas a la base de datos:" , error);
      }
    };
    fetchMovies();

  }, []); // dependencia vacía del useEffect significa que se ejecutará solo una vez después del primer renderizado

  
  // lo quité porque daba errores multiples

  // consume contexto
  // const {updateNavItems} = useContext(NavigationContext);

  // useEffect(() => {
  //   updateNavItems([
  //     { id: 1, text: "Cambiar tema"},
  //     { id: 2, text: 'Sobre Nosotros', link: '/profile' },
  //     { id: 3, text: 'Cerrar Sesión', link: '/' },
  //   ]);
  // });
  return (
    <>
    <NavBar/>
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
                  <Button variant="secondary">Comprar entrada</Button>
                </Card.Body>
              </Card>
            </Col>
          )) : null}
        </Row>
      </Container>
    </>
  );
};

export default MoviesDashboard;

MoviesDashboard.propTypes = {
  initialMovies: PropTypes.array,
};
