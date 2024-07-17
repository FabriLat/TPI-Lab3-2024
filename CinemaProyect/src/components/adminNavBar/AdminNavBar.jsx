import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../services/theme/theme.context";
import { UserContext } from "../../services/authentication/user.context";

const AdminNavBar = () => {
  const navItems = [
    { id: 1, text: "Cambiar tema" },
    { id: 2, text: "Sobre Nosotros", link: "/about" },
    { id: 3, text: "Cartelera", link: "/movies" },
    { id: 4, text: "Usuarios", link: "/userbase" },
    { id: 5, text: "Peliculas admin", link: "/adminmovies" },
  ];

  const navigate = useNavigate();
  const { toggleTheme } = useContext(ThemeContext);
  const { setUser } = useContext(UserContext);

  const logOutHandle = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <Row>
      <nav className="">
        <ul className="nav justify-content-between">
          <Col md={3} className="d-flex align-items-center">
            <li className="m-2">
              <a className="navbar-brand" href="/">
                <img
                  src="https://ih1.redbubble.net/image.4839257361.1382/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
                  width="70"
                  height="70"
                  alt="Logo"
                />
              </a>
            </li>
            <li className="m-2">
              <a
                className="nav-link "
                href="/"
                style={{ fontFamily: "Poppins", color: "white" }}
              >
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
                  onClick={() =>
                    item.id === 1 ? toggleTheme() : navigate(item.link)
                  }
                >
                  {item.text}
                </button>
              </li>
            ))}
            <li className="m-3" key={6}>
              <button
                className="btn btn-dark"
                style={{ whiteSpace: "nowrap" }}
                onClick={logOutHandle}
              >
                Cerrar sesión
              </button>
            </li>
          </Col>
        </ul>
      </nav>
    </Row>
  );
};

export default AdminNavBar;
