import { Form, Row, Col, Button } from "react-bootstrap";

const SignInDashboard = () => {
  return (
    <>
        <h1 className="d-flex justify-content-center mt-4">Registrarse</h1>
      <Form>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label>Usuario</Form.Label>
            <Form.Control required placeholder="Ingresá tu usuario" type="text" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label>
              Email
            </Form.Label>
            <Form.Control required type="email" placeholder="Ingresá tu email" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label>
              Contraseña
            </Form.Label>
            <Form.Control required type="password" placeholder="Ingresá tu contraseña" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label>Confirmar contraseña</Form.Label>
            <Form.Control required type="password" placeholder="Confirmá tu contraseña"/>
            <Button type="submit" variant="success" className=" mt-4 d-flex justify-content-center text-align-center align-items-center">Registrarse</Button>
          </Col>
       
        </Form.Group>
      </Form>
    </>
  );
};

export default SignInDashboard;
