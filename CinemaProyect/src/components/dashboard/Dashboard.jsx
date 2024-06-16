import { Row, Col, Carousel, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();


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
              <li className="m-4">
                <button className="btn btn-dark" onClick={() => navigate("/login")}>
                  Ingresar
                </button>
              </li>
              <li className="m-4">
                <button className="btn btn-dark" onClick={() => navigate("/signin")}>
                  Registrarse
                </button>
              </li>
            </Col>
          </ul>
        </nav>
      </Row>


      <Container className="text-center">
        <h1 className="mb-4" style={{"fontFamily": "Poppins"}}>Bienvenido</h1>
        <h4 className="mb-4">Peliculas destacadas</h4>
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