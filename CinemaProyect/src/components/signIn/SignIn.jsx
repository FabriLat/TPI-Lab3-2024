import { Form, Row, Col, Button} from "react-bootstrap";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {

 
  const navigate = useNavigate();
  // useRef para acceder al dom
  const userRef = useRef(null);
  const passRef = useRef(null);
  const secondPassRef = useRef(null);
  const emailRef = useRef(null);

  const signInHandler = (event) => {

    event.preventDefault();
    const user = userRef.current.value;
    const password = passRef.current.value;
    const secondPassword = secondPassRef.current.value;
    const email = emailRef.current.value;

    if (user.length === 0) {
      userRef.current.style.borderColor = "red";
      userRef.current.focus();
    } 
    else if (password.length === 0) {
      passRef.current.style.borderColor = "red";
      passRef.current.focus();
    }
    else if (email.length === 0) {
      emailRef.current.style.borderColor = "red";
      emailRef.current.focus();
    }
    else if (secondPassword.length === 0) {
      secondPassRef.current.style.borderColor = "red";
      secondPassRef.current.focus();
    }
    else{
      console.log("Registro exitoso");
      navigate("/login", {replace: true})
    }
  };


  return (
    <>
      <h1 className="d-flex justify-content-center mt-4">Registrarse</h1>
      <Form onSubmit={signInHandler}>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label>Usuario</Form.Label>
            <Form.Control ref={userRef}  placeholder="Ingresá tu usuario" type="text" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label>
              Email
            </Form.Label>
            <Form.Control ref={emailRef}  type="email" placeholder="Ingresá tu email" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label>
              Contraseña
            </Form.Label>
            <Form.Control ref={passRef}  type="password" placeholder="Ingresá tu contraseña" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label>Confirmar contraseña</Form.Label>
            <Form.Control ref={secondPassRef} type="password" placeholder="Confirmá tu contraseña"/>
            <Button type="submit" variant="dark" className=" mt-4 d-flex justify-content-center text-align-center align-items-center">Registrarse</Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};

export default SignIn;
