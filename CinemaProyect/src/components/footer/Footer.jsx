import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      className="mt-5 py-3 text-white"
      style={{ backgroundColor: "rgb(7,0,8)"}}
    >
      <Container>
        <Row>
          <Col md={4}>
            <h5>Dragon Cinema</h5>
            <p>Tu mejor experiencia en cine.</p>
          </Col>
          <Col md={4}>
            <h5>Enlaces útiles</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  Próximos estrenos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Redes sociales</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center mt-1">
              © 2024 Dragon Cinema. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
