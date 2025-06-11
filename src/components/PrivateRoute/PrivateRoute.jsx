import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const { isAuth, loading } = useContext(AuthContext);

  if (loading) return <div>Загрузка...</div>;

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
