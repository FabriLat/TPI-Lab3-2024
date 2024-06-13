import PropTypes from "prop-types"
import { Navigate } from "react-router-dom";

const Protected = ({loggedIn, children}) => {
    
    if(loggedIn === false){
        return <Navigate to="/login"></Navigate>
    }
    
    return children;
    

}

export default Protected;

Protected.propTypes={
    loggedIn: PropTypes.bool,
    children: PropTypes.object
}