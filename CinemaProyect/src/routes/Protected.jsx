import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../services/authentication/user.context";

const Protected = ({ children }) => {
  const { user } = useContext(UserContext);

  if (user && user.type === "admin") {
    return children;
  } else if (user) {
    return children;
  } else {
    alert("Es necesario que inicie sesion o tenga permiso de admin");
    return <Navigate to="/movies"></Navigate>;
  }
};

export default Protected;

Protected.propTypes = {
  loggedIn: PropTypes.bool,
  children: PropTypes.object,
};
