import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

const ModalToAddUser = ({ show, handleClose, addUser }) => {
  const [rolUser, setRolUser] = useState("Rol de usuario");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const clientUser = () => {
    setRolUser("client");
  };

  const adminUser = () => {
    setRolUser("admin");
  };

  const sysAdmin = () => {
    setRolUser("sysadmin");
  };

  const EmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const UserNAmeHandler = (event) => {
    setUserName(event.target.value);
  };

  const PasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const OnAddUser = () => {
    const user = {
      id: Math.random(),
      userName: userName,
      email: email,
      password: password,
      boughtShows: [],
      type: rolUser,
    };

    addUser(user);

    setEmail("");
    setPassword("");
    setUserName("");
    setRolUser("Rol de usuario");

    handleClose();

    setTimeout(() => {
      alert("Se registro el usuario exitosamente!!");
    }, 200);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>Nuevo Usuario</Modal.Title>
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
              <Form.Label style={{ color: "black" }}>Contraseña</Form.Label>
              <Form.Control
                type="password"
                rows={3}
                required
                value={password}
                onChange={PasswordHandler}
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
                  <Dropdown.Item onClick={sysAdmin}>SysAdmin</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={OnAddUser}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalToAddUser;
