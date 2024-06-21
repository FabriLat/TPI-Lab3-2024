import User from "./user/User";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserBase = ({ listUsers, onDeletUserHandler }) => {
  const listMapped = listUsers.map((user) => (
    <User
      key={Math.random()}
      id={user.id}
      userName={user.username}
      email={user.email}
      type={user.type}
      deleteUser={onDeletUserHandler}
    />
  ));

  return (
    <>
      <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
        <Row className="w-100">
          <Row className="mb-2">
            <Col xs={2} style={{ marginLeft: "50px" }}>
              <strong>Username</strong>
            </Col>
            <Col xs={2} style={{ marginLeft: "50px" }}>
              <strong>Email</strong>
            </Col>
            <Col xs={2} style={{ marginLeft: "20px" }}>
              <strong>Rol</strong>
            </Col>
            <Col className="d-flex justify-content-end">
              <Button variant="success">+ Agregar usuario</Button>
            </Col>
          </Row>
          <Col md={{ span: 12, offset: 0 }}>
            <ListGroup
              className="border rounded p-3"
              style={{
                height: "500px",
                overflowY: "auto",
                border: "1px solid #ddd",
                borderRadius: "4px",
                padding: "15px",
              }}
            >
              {listMapped}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserBase;
