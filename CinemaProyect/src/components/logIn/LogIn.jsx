import { Form, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import { UserContext } from "../../services/authentication/user.context";
import useWindowSize from "../../custom/useWindowSize";
import useEnglishTranslator from "../../custom/useEnglishTranslator";
const LogIn = ({ users }) => {
  // custom hook
  const [isEnglish, setIsEnglish] = useState(false);

  const handleLanguageSwitch = () => {
    setIsEnglish(!isEnglish);
  };

  const loginTitle = useEnglishTranslator("Iniciar sesión", isEnglish);
  const userInputText = useEnglishTranslator("Usuario/Email", isEnglish);
  const passwordInputText = useEnglishTranslator("Contraseña", isEnglish);
  const loginButtonText = useEnglishTranslator("Iniciar sesión", isEnglish);
  const widthText = useEnglishTranslator("Ancho de pantalla", isEnglish);
  const heightText = useEnglishTranslator("Alto de pantalla", isEnglish);
  const forgotPasswordText = useEnglishTranslator(
    "Olvidé mi contraseña",
    isEnglish
  );
  const userInputPlaceholder = useEnglishTranslator(
    "Ingresá tu usuario o email",
    isEnglish
  );
  const passwordInputPlaceholder = useEnglishTranslator(
    "Ingresá tu contraseña",
    isEnglish
  );

  console.log("Renderizando LogIn");
  const { setUser } = useContext(UserContext);
  const { width, height } = useWindowSize();

  // estados para mostrar y dejar de mostrar el modal
  const [show, setShow] = useState(false);
  const onClose = () => setShow(false);

  const navigate = useNavigate();

  // useRef para acceder al dom
  const userRef = useRef("");
  const passRef = useRef("");

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
      let userToAdd = {};
      let loggedUser = users.filter(
        (u) =>
          (u.userName === user || u.email === user) && u.password === password
      );

      if (loggedUser.length > 0) {
        userToAdd = {
          id: loggedUser[0].id,
          userName: loggedUser[0].userName,
          email: loggedUser[0].email,
          boughtShows: loggedUser[0].boughtShows,
          type: loggedUser[0].type,
        };
      }

      console.log(userToAdd);
      if (loggedUser.length > 0) {
        setUser(userToAdd);
        loggedUser = [];
        console.log(loggedUser, loggedUser.length);
        navigate("/movies", { replace: true });
      } else {
        alert("Usuario o contraseña incorrectos. Intente nuevamente.");
        return;
      }
    }
  };

  return (
    <>
      <h1 className="d-flex justify-content-center mt-4">{loginTitle}</h1>
      <Form onSubmit={logInHandler}>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label>{userInputText}</Form.Label>
            <Form.Control
              ref={userRef}
              placeholder={userInputPlaceholder}
              type="text"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="m-4  d-flex justify-content-center">
          <Col sm="3">
            <Form.Label>{passwordInputText}</Form.Label>
            <Form.Control
              ref={passRef}
              type="password"
              placeholder={passwordInputPlaceholder}
            />
            <a
              href="#"
              className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              {forgotPasswordText}
            </a>

            <Button
              type="submit"
              variant="dark"
              className=" mt-4 d-flex justify-content-center text-align-center align-items-center"
            >
              {loginButtonText}
            </Button>
            <Button
              onClick={handleLanguageSwitch}
              variant="dark"
              style={{ marginTop: "10px" }}
            >
              {isEnglish ? "Change to Spanish" : "Cambiar a Inglés"}
            </Button>
            <p style={{ marginTop: "40px" }}>
              {widthText}: {height}px 🖥️
            </p>
            <p style={{ marginTop: "40px" }}>
              {heightText}: {width}px 🖥️
            </p>
          </Col>
        </Form.Group>
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
  onLogin: PropTypes.func,
};
