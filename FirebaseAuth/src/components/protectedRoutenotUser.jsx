import { Navigate } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";
const ProtectedRoutenotUser = ({ children }) => {
  let { user } = useUserAuth();

  if (user) {
    return <Navigate to="/home" />;
  }
  return children;
};

export default ProtectedRoutenotUser;
