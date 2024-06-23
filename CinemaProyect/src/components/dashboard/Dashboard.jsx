import { Carousel, Container } from "react-bootstrap";
import NavBar from "../navBar/NavBar";

const Dashboard = () => {

  return (
    <>
      <NavBar/> 
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