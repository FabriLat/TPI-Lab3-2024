import { useContext, useState } from "react";
import { Row, Col } from "react-bootstrap";
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
    <Row>
      <nav className="">
        <ul className="nav justify-content-between">
          <Col md={3} className="d-flex align-items-center">
            <li className="m-2">
              <a className="navbar-brand" href="/">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR01H0HqRV4PGvIaqK9uWoBATZn3_xeebFxMw&s"
                  width="70"
                  height="70"
                  alt="Logo"
                  style={{ borderRadius: "50px" }}
                />
              </a>
            </li>
            <li className="m-2">
              <a
                style={{ fontFamily: "Poppins", color: "white" }}
                className="nav-link "
                href="/"
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
            <li className="m-3" key={4}>
              <button
                className="btn btn-dark"
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
            <li className="m-3" key={5}>
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

export default ClientNavBar;
