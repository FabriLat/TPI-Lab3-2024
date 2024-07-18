import { useState } from "react";
import {
  Modal,
  Button,
  Form,
  DropdownButton,
  DropdownItem,
} from "react-bootstrap";

const ModalToBuy = ({ show, handleClose, movies, selectedMovie }) => {
  const [asientos, setAsientos] = useState(1);
  const [metodoPago, setMetodoPago] = useState("efectivo");
  const [tarjeta, setTarjeta] = useState({ numero: "", fecha: "", cvv: "" });
  const [showtime, setShowTime] = useState("");

  // evenKey captura el valor del dropdown (item seleccionado)
  const showtimeHandler = (eventKey) => {
    setShowTime(eventKey);
    console.log("Función seleccionada: ", eventKey);
  };

  const handleMetodoPagoChange = (e) => {
    setMetodoPago(e.target.value);
  };

  const handleTarjetaChange = (e) => {
    const { name, value } = e.target;
    setTarjeta({ ...tarjeta, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  manejar el envío del formulario
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title
          style={{
            color: "black",
            marginTop: "10px",
          }}
        >
          Comprar Entradas
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFunciones">
            <Form.Label
              style={{
                color: "black",
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              Funciones
            </Form.Label>
            <DropdownButton
              id="dropdown-basic-button"
              variant="dark"
              title={showtime === "" ? "Seleccionar horario" : showtime}
              onSelect={showtimeHandler}
            >
              {movies &&
                movies.map((movie) =>
                  movie.shows && Array.isArray(movie.shows)
                    ? movie.shows.map((show) =>
                        show.movie === selectedMovie ? (
                          <DropdownItem eventKey={show.time} key={show.id}>
                            {show.time} hs
                          </DropdownItem>
                        ) : null
                      )
                    : null
                )}
            </DropdownButton>
          </Form.Group>

          <Form.Group controlId="formAsientos">
            <Form.Label
              style={{
                color: "black",
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              Cantidad de Asientos
            </Form.Label>
            <Form.Control
              type="number"
              min="1"
              value={asientos}
              onChange={(e) => setAsientos(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formMetodoPago">
            <Form.Label
              style={{
                color: "black",
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              Método de Pago
            </Form.Label>
            <Form.Check
              type="radio"
              label="Efectivo en el Comercio"
              style={{ color: "black", marginTop: "10px" }}
              value="efectivo"
              checked={metodoPago === "efectivo"}
              onChange={handleMetodoPagoChange}
            />
            <Form.Check
              type="radio"
              label="Tarjeta"
              style={{ color: "black", marginTop: "10px" }}
              value="tarjeta"
              checked={metodoPago === "tarjeta"}
              onChange={handleMetodoPagoChange}
            />
          </Form.Group>

          {metodoPago === "tarjeta" && (
            <>
              <Form.Group
                controlId="formNumeroTarjeta"
                style={{ marginTop: "20px" }}
              >
                <Form.Label
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  Número de Tarjeta
                </Form.Label>
                <Form.Control
                  type="text"
                  name="numero"
                  value={tarjeta.numero}
                  onChange={handleTarjetaChange}
                />
              </Form.Group>

              <Form.Group controlId="formFechaExpiracion">
                <Form.Label
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  Fecha de Expiración
                </Form.Label>
                <Form.Control
                  type="month"
                  name="fecha"
                  value={tarjeta.fecha}
                  onChange={handleTarjetaChange}
                />
              </Form.Group>

              <Form.Group controlId="formCVV">
                <Form.Label
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  CVV
                </Form.Label>
                <Form.Control
                  type="text"
                  name="cvv"
                  value={tarjeta.cvv}
                  onChange={handleTarjetaChange}
                />
              </Form.Group>
            </>
          )}

          <Button variant="dark" type="submit" style={{ marginTop: "30px" }}>
            Comprar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalToBuy;
