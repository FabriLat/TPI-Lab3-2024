import { Row, Col, Carousel, Container } from "react-bootstrap";

const Dashboard = ({movies}) => {
  // const mappedMovies = movies.map((movie) => (
  //   <Row className="mb-3 bg-color-red" key={movie.id}>
  //     <Col className="align-items-center">
  //       <h2>Titulo: {movie.title}</h2>
  //       <br />
  //       <img src={movie.image} width="200" alt="" />
  //       <p>Rating: {movie.rating}</p>
  //       <br />
  //       <p>Duracion: {movie.runTime}</p>
  //       <br />
  //     </Col>
  //   </Row>
  // ));

  return (
    <>
      <Row>
        <nav className="">
          <ul className="nav justify-content-between">
            <Col md={3} className="d-flex align-items-center">
              <li className="m-2">
                <a className="navbar-brand" href="#">
                  <img
                    src="https://ih1.redbubble.net/image.4839257361.1382/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
                    width="70"
                    height="70"
                    alt=""
                  />
                </a>
              </li>

              <li className="m-2">
                <a className="nav-link link-dark" href="#">
                  DRAGON CINEMA
                </a>
              </li>
            </Col>
            <Col />
            <Col
              md={2}
              className="d-flex justify-content-end align-items-center"
            >
              <li className="m-2">
                <a className="nav-link link-dark" href="#">
                  Ingresar
                </a>
              </li>
              <li className="m-2">
                <a className="nav-link link-dark" href="#">
                  Registrarse
                </a>
              </li>
            </Col>
          </ul>
        </nav>
      </Row>


      <Container className="text-center">
        <h1 className="mb-4">BIENVENIDO</h1>
        <p className="mb-4">Peliculas destacadas</p>
        <Carousel className="mb-4" style={{ maxWidth: '1620px' }}>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://www.animationxpress.com/wp-content/uploads/2020/12/shrek.jpg"
              alt="First slide"
              style={{ maxHeight: '2400px', objectFit: 'cover' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://paulstriptothemovies.com/wp-content/uploads/2023/07/banner.jpg"
              alt="Second slide"
              style={{ maxHeight: '2400px', objectFit: 'cover' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://www.highdefgeoff.com/uploads/6/1/1/2/61127263/jigsawheader_orig.jpg"
              alt="Third slide"
              style={{ maxHeight: '2400px', objectFit: 'cover' }}
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default Dashboard;