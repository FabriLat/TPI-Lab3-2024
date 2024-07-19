import { useContext } from "react";
import { Col } from "react-bootstrap";
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
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "rgb(7 0 8)" }}
    >
      <div className="container-fluid">
        <Col md={3} className="d-flex align-items-center">
          <a className="navbar-brand" href="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR01H0HqRV4PGvIaqK9uWoBATZn3_xeebFxMw&s"
              width="70"
              height="70"
              alt="Logo"
              style={{ borderRadius: "50px" }}
            />
          </a>
          <a
            className="nav-link"
            href="/"
            style={{ fontFamily: "Poppins", color: "white" }}
          >
            DRAGON CINEMA
          </a>
        </Col>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <button
                  className="btn btn-dark me-3"
                  style={{ whiteSpace: "nowrap" }}
                  onClick={() =>
                    item.id === 1 ? toggleTheme() : navigate(item.link)
                  }
                >
                  {item.text}
                </button>
              </li>
            ))}
            <li className="nav-item">
              <button
                className="btn btn-dark"
                style={{ whiteSpace: "nowrap" }}
                onClick={logOutHandle}
              >
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavBar;
