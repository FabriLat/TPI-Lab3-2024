import { useContext, useState } from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../services/theme/theme.context";
import { UserContext } from "../../services/authentication/user.context";
import UserBoughtShows from "../userBoughtShows/UserBoughtShows";

const ClientNavBar = () => {
  const navItems = [
    { id: 1, text: "Cambiar tema" },
    { id: 2, text: "Sobre Nosotros", link: "/about" },
    { id: 3, text: "Cartelera", link: "/movies" },
  ];

  const navigate = useNavigate();
  const { toggleTheme } = useContext(ThemeContext);
  const { setUser } = useContext(UserContext);
  const [boughtShows, setBoughtShows] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const logOutHandle = () => {
    setUser(null);
    navigate("/");
  };

  const ViewBoughtShows = async () => {
    const usuarioLogueado = JSON.parse(localStorage.getItem("user"));
    const response = await fetch(
      `http://localhost:8000/users/${usuarioLogueado.id}`
    );
    const currentUser = await response.json();
    setBoughtShows(currentUser.boughtShows);
    setModalShow(true);
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
            style={{ fontFamily: "Poppins", color: "white" }}
            className="nav-link"
            href="/"
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
                className="btn btn-dark me-3"
                style={{ whiteSpace: "nowrap" }}
                onClick={ViewBoughtShows}
              >
                Mis Funciones
              </button>
            </li>
            <UserBoughtShows
              show={modalShow}
              handleClose={() => setModalShow(false)}
              boughtShows={boughtShows}
            />
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

export default ClientNavBar;
