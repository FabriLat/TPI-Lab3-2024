import { Form, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const LogIn = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  // const [alert, setAlert] = useState(false);
  // ALERTA OPCIONAL PARA AVISARLE AL USUARIO Q SE LOGUEO. LA SAQUE PORQUE NO SE RENDERIZABA MOVIES

  // useRef para acceder al dom
  const userRef = useRef(null);
  const passRef = useRef(null);

  const logInHandler = (event) => {
    event.preventDefault();
    const user = userRef.current.value;
    const password = passRef.current.value;

    if (user.length === 0) {
      userRef.current.style.borderColor = "red";
      userRef.current.focus();
    } 
    else if (password.length === 0) {
      passRef.current.style.borderColor = "red";
      passRef.current.focus();
    } 
    else {
      setIsLoggedIn(true); // logueo es True

      // setAlert(true);

      console.log("Logueo exitoso")
      navigate("/movies", { replace: true });
   
    }
  };

  return (
    <>
      <h1 className="d-flex justify-content-center mt-4">Iniciar sesión</h1>
      <Form onSubmit={logInHandler}>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label>Usuario/Email</Form.Label>
            <Form.Control
              ref={userRef}
              placeholder="Ingresá tu usuario o email"
              type="text"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              ref={passRef}
              type="password"
              placeholder="Ingresá tu contraseña"
            />
            <Button
              type="submit"
              variant="success"
              className=" mt-4 d-flex justify-content-center text-align-center align-items-center"
            >
              Iniciar sesión
            </Button>
          </Col>
        </Form.Group>
        {/* <Row className="d-flex justify-content-center text-center">
          <Col sm="6" md="4" lg="3">
            {alert && <Alert variant="success">Logueado correctamente!</Alert>}
          </Col>
        </Row> */} 
      </Form>
    </>
  );
};

export default LogIn;

LogIn.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};
