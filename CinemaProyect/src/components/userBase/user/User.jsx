import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ModifyUserModal from "../modifyUserModal/modifyUserModal";
import { useState } from "react";

const User = ({ id, userName, email, type, deleteUser, modifyUser }) => {
  const onClickDelete = () => {
    const confirmed = confirm(
      "¿Estás seguro de que deseas eliminar este usuario?"
    );
    if (confirmed) {
      deleteUser(id);
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col xs={2}>{userName}</Col>
          <Col xs={3}>{email}</Col>
          <Col xs={1}>{type}</Col>
          <Col xs={6} className="d-flex justify-content-end">
            <Button
              variant="primary"
              style={{ marginRight: "10px" }}
              onClick={handleShow}
            >
              Modificar
            </Button>{" "}
            <ModifyUserModal
              show={show}
              handleClose={handleClose}
              modifyUser={modifyUser}
              idUser={id}
              userEmail={email}
              nameUser={userName}
              rol={type}
            />
            <Button variant="danger" onClick={onClickDelete}>
              Eliminar
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  );
};

export default User;
