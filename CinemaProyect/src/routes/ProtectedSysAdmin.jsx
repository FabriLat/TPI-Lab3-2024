import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../services/authentication/user.context";

const ProtectedSysAdmin = ({ children }) => {
  const { user } = useContext(UserContext);

  if (user && user.type === "sysadmin") {
    return children;
  } else {
    alert("Es necesario que tenga permiso de SysAdmin");
    return <Navigate to="/movies"></Navigate>;
  }
};

export default ProtectedSysAdmin;

ProtectedSysAdmin.propTypes = {
  loggedIn: PropTypes.bool,
  children: PropTypes.object,
};
