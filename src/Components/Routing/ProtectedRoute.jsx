import { Navigate, Outlet } from "react-router-dom";
import { checking } from "../Common Funtions/ValidateLogin";

const ProtectedRoute = () => {
  const data = JSON.parse(localStorage.getItem("credentials"));
  const isUserAuthenticated = checking(data);
  return isUserAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
