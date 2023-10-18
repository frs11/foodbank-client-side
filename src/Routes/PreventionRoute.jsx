import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PreventionRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

PreventionRoute.propTypes = {
  children: PropTypes.node,
};

export default PreventionRoute;
