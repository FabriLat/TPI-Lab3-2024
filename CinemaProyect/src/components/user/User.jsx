import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const User = ({ userName, email, type }) => {
  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col xs={2}>{userName}</Col>
          <Col xs={3}>{email}</Col>
          <Col xs={1}>{type}</Col>
          <Col xs={6} className="d-flex justify-content-end">
            <Button variant="primary" style={{ marginRight: "10px" }}>
              Modificar
            </Button>{" "}
            <Button variant="danger">Eliminar</Button>
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  );
};

export default User;
