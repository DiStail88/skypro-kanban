import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import LoginPage from "../../pages/LoginPage/LoginPage.jsx";
import RegisterPage from "../../pages/RegisterPage/RegisterPage.jsx";
import PopExitPage from "../../pages/PopExitPage/PopExitPage.jsx";
import PopBrowsePage from "../../pages/PopBrowsePage/PopBrowsePage.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import { AuthContext } from "../../context/AuthContext.js";
import PopNewCardPage from "../../pages/PopNewCardPage/PopNewCardPage.jsx";

function AppRoutes() {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<HomePage />}>
          <Route path="exit" element={<PopExitPage />} />
          <Route path="card/:id" element={<PopBrowsePage />} />
          <Route path="new" element={<PopNewCardPage />} />
        </Route>
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/*" element={<h1>Страница не найдена</h1>} />
    </Routes>
  );
}

export default AppRoutes;
