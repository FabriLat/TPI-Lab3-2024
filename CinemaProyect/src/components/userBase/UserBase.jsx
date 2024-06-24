import User from "./user/User";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ModalToAddUser from "./modalToAddUser/ModalToAddUser";
import { useState } from "react";
import AdminNavBar from "../adminNavBar/AdminNavBar";

const UserBase = ({ listUsers, onDeletUserHandler, addUser, modifyUser }) => {
  const listMapped = listUsers.map((user) => (
    <User
      key={Math.random()}
      id={user.id}
      userName={user.userName}
      email={user.email}
      type={user.type}
      deleteUser={onDeletUserHandler}
      modifyUser={modifyUser}
    />
  ));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <AdminNavBar/>
      <h1 className="text-center mt-5" style={{ marginBottom: "170px" }}>
        Base de Datos de Usuarios
      </h1>
      <Container className="d-flex flex-column align-items-center justify-content-center vh-80">
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
              <Button variant="success" onClick={handleShow}>
                + Agregar usuario
              </Button>
            </Col>
            <ModalToAddUser
              show={show}
              handleClose={handleClose}
              addUser={addUser}
            />
          </Row>
          <Col md={{ span: 12, offset: 0 }}>
            <ListGroup
              className="border rounded p-3"
              style={{
                height: "50vh",
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
