import { Row, Col } from "react-bootstrap";


const Dashboard = ({ movies, shows }) => {
  const mappedMovies = movies.map((movie) => (
    <Row className="mb-3 bg-color-red" key={movie.id}>
      <Col className="align-items-center">
        <h2>Titulo: {movie.title}</h2>
        <br />
        <img src={movie.image} width="200" alt="" />

        <p> Rating: {movie.rating}</p>

        <br />
        <p>Duracion: {movie.runTime}</p>

        <br />
      </Col>
    </Row>
  ));

  return (
    <>
    <Row>
      <nav className="">
        <ul className="nav justify-content-between">
        <Col md={3}  className="d-flex align-items-center">
          <li className="m-2">
            <a className="navbar-brand" href="">
              <img
                src="https://ih1.redbubble.net/image.4839257361.1382/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
                width="70"
                height="70"
                alt=""
              />
            </a>
          </li>
         
          <li className="m-2">
            <a className="nav-link link-dark" href="">
              DRAGON CINEMA
            </a>
          </li>
       
          </Col>
          <Col/>
          <Col md={2} className="d-flex justify-content-end align-items-center">
          <li className="m-2">
            <a className="nav-link link-dark" href="">
              Ingresar
            </a>
          </li>
          <li className="m-2">
            <a className="nav-link link-dark" href="">
              Registrarse
            </a>
          </li>
          </Col>
        </ul>
      </nav>
      </Row>


      <h1 className="d-flex justify-content-center">BIENVENIDO</h1>

      <div className="d-flex justify-content-around mt-5">{mappedMovies}</div>
      </>
  );
};
export default Dashboard;
