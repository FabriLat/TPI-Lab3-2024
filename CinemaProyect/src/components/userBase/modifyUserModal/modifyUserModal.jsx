import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

const ModifyUserModal = ({
  show,
  handleClose,
  modifyUser,
  idUser,
  userEmail,
  nameUser,
  rol,
}) => {
  const [rolUser, setRolUser] = useState(rol);
  const [email, setEmail] = useState(userEmail);
  const [userName, setUserName] = useState(nameUser);

  const clientUser = () => {
    setRolUser("client");
  };

  const adminUser = () => {
    setRolUser("admin");
  };

  const EmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const UserNAmeHandler = (event) => {
    setUserName(event.target.value);
  };

  const OnModifyUser = () => {
    const newData = {
      email: email,
      uName: userName,
      rol: rolUser,
    };

    modifyUser(idUser, newData);

    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>
            Modificacion de datos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ color: "black" }}>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                required
                value={email}
                onChange={EmailHandler}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label style={{ color: "black" }}>
                Nombre de Usuario
              </Form.Label>
              <Form.Control
                type="text"
                rows={3}
                required
                value={userName}
                onChange={UserNAmeHandler}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Dropdown required rows={3}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {rolUser.charAt(0).toUpperCase() + rolUser.slice(1)}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={clientUser}>Client</Dropdown.Item>
                  <Dropdown.Item onClick={adminUser}>Admin</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={OnModifyUser}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModifyUserModal;
