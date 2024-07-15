import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../components/services/authentication/user.context";

const Protected = ({ children }) => {
  const { user } = useContext(UserContext);

  if (user && user.type === "admin") {
    return children;
  } else {
    return <Navigate to="/movies"></Navigate>;
  }
};

export default Protected;

Protected.propTypes = {
  loggedIn: PropTypes.bool,
  children: PropTypes.object,
};
