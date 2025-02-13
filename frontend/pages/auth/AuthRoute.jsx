import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import {jwtDecode} from "jwt-decode";

const ProtectedRoute = ({ children }) => {
  
  ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/auth/login" replace />; // Redirect if no token
  }

  try {
    jwtDecode(token);
    return children; 
  } catch (error) {
    console.error("Token verification error:", error);
    localStorage.removeItem('token'); 
    return <Navigate to="/auth/login" replace />; 
  }
};

export default ProtectedRoute;