import { Form, Row, Col, Button } from "react-bootstrap";

const LogInDashboard = () => {
  return (
    <>
        <h1 className="d-flex justify-content-center mt-4">Iniciar sesión</h1>
      <Form>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label>Usuario/Email</Form.Label>
            <Form.Control required placeholder="Ingresá tu usuario o email" type="text" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label>
              Contraseña
            </Form.Label>
            <Form.Control required type="password" placeholder="Ingresá tu contraseña" />
            <Button type="submit" variant="success" className=" mt-4 d-flex justify-content-center text-align-center align-items-center">Iniciar sesión</Button>
          </Col>
        </Form.Group>
          
        </Form>
    </>
  );
};

export default LogInDashboard;