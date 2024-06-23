import { useContext } from "react";
import { NavigationContext } from "../services/navigation/navigation.context";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  // consumo nav items del contexto para llenar componente NavBar
  const { navItems} = useContext(NavigationContext);


  return (
    <Row>
      <nav className="">
        <ul className="nav justify-content-between">
          <Col md={3} className="d-flex align-items-center">
            <li className="m-2">
              <a className="navbar-brand" href="#">
                <img
                  src="https://ih1.redbubble.net/image.4839257361.1382/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
                  width="70"
                  height="70"
                  alt="Logo"
                />
              </a>
            </li>
            <li className="m-2">
              <a className="nav-link link-dark" href="#">
                DRAGON CINEMA
              </a>
            </li>
          </Col>
          <Col />
          <Col md={2} className="d-flex justify-content-end align-items-center">
            {navItems.map((item) => (
              <li className="m-3" key={item.id}>
                <button
                  className="btn btn-dark"
                  style={{ whiteSpace: "nowrap" }}
                  onClick={() => navigate(item.link)}>
                  {item.text}
                </button>
              </li>
            ))}
          </Col>
        </ul>
      </nav>
    </Row>
  );
};

export default NavBar;
