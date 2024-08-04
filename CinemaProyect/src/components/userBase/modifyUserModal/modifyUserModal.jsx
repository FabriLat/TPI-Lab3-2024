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
  const [rolUser, setRolUser] = useState(rol || "client");
  const [email, setEmail] = useState(userEmail);
  const [userName, setUserName] = useState(nameUser);

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

  const modifyUserAsync = async (idUser, newData) => {
    try {
      await modifyUser(idUser, newData);
    } catch (error) {
      console.log("Error al modificar usuario:", error);
      throw error;
    }
  };

  const OnModifyUser = async () => {
    const newData = {
      email: email,
      userName: userName,
      type: rolUser,
    };

    try {
      await modifyUserAsync(idUser, newData);
      handleClose();

      setTimeout(() => {
        alert("Se realizó la modificación exitosamente!!");
      }, 200);
    } catch (error) {
      // Manejar el error de modificación aquí si es necesario
      console.log("Error al modificar usuario en el modal:", error);
      // Puedes mostrar un mensaje de error si lo deseas
      alert(
        "Hubo un error al modificar el usuario. Por favor, intenta de nuevo."
      );
    }
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
              <Dropdown required value={rolUser}>
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
          <Button variant="primary" onClick={OnModifyUser}>
            Modificar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModifyUserModal;
