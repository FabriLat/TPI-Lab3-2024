import { Form, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import { UserContext } from "../services/authentication/user.context";



const LogIn = ({ users }) => {
  const { setUser } = useContext(UserContext);

  // estados para mostrar y dejar de mostrar el modal
  const [show, setShow] = useState(false);
  const onClose = () => setShow(false);

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
      return;
    } else if (password.length === 0) {
      passRef.current.style.borderColor = "red";
      passRef.current.focus();
      return;
    } else {
      // MODAL PARA CUANDO EL USUARIO QUIERE LOGUEARSE ANTES DE REGISTRARSE PREVIAMENTE
      // setShow(true); (modal codificado mas abajo)

      // falta agregar logica para comparar y validar datos ingresados en el registro (SignIn)
      //setIsLoggedIn(true);

      // si son correctos (logueo true), redirecciona a cartelera. falta logica
      // if (loggedIn) {
      //   navigate("/movies", { replace: true });
      // }
      
      let userToAdd = {}
      let loggedUser = users.filter(
        (u) =>
          (u.userName === user || u.email === user) &&
          u.password === password
      );
      
      if (loggedUser.length > 0){ userToAdd = {id: loggedUser[0].id,
        userName: loggedUser[0].userName,
        email: loggedUser[0].email,
        showsBuyed: loggedUser[0].showsBuyed,
        type: loggedUser[0].type,
      }}
     
      console.log(userToAdd)
      if (loggedUser.length > 0) {
        setUser(userToAdd);
        loggedUser = []
        console.log(loggedUser, loggedUser.length)
        navigate("/movies", { replace: true });
      } else {  
        alert("Usuario o contraseña incorrectos. Intente nuevamente.")
        return;
      }
    }
    // x el momento queda una redireccion automatica hacia cartelera para pruebas.
    // alerta no utilizada setAlert(true);
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
              variant="dark"
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

      <Modal show={show}>
        <Modal.Header style={{ backgroundColor: "#39383d" }} closeButton>
          <Modal.Title style={{ backgroundColor: "#39383d" }}>
            Error!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#39383d" }}>
          Para iniciar sesión, primero debés estar registrado
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#39383d" }}>
          <Button onClick={onClose} variant="danger">
            Cerrar
          </Button>
          <Button variant="success">Registrarme</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LogIn;

LogIn.propTypes = {
  onLogin: PropTypes.func.isRequired,
  //setIsLoggedIn: PropTypes.func.isRequired,
  //loggedIn: PropTypes.bool,
};
