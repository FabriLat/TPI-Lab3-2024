import { Modal, Button, Card, Row, Col } from "react-bootstrap";

const UserBoughtShows = ({ show, handleClose, boughtShows }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Mis Funciones Compradas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="d-flex justify-content-center">
          {boughtShows.length > 0 ? (
            boughtShows.map((show) => (
              <Col
                key={Math.random()}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="mb-4"
              >
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>{show.movieTitle}</Card.Title>
                    <Card.Text>
                      <strong>Horario:</strong> {show.showtime}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col>
              <p className="text-center" style={{ color: "black" }}>
                No has comprado ninguna función.
              </p>
            </Col>
          )}
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserBoughtShows;
