import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import LoginPage from "../../pages/LoginPage/LoginPage.jsx";
import RegisterPage from "../../pages/RegisterPage/RegisterPage.jsx";
import PopExitPage from "../../pages/PopExitPage/PopExitPage.jsx";
import PopBrowsePage from "../../pages/PopBrowsePage/PopBrowsePage.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuth(true);
    }
    setLoading(false); 
  }, []);

  if (loading) {
    return <div>Загрузка...</div>; 
  }

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<HomePage loading={loading} />}>
          <Route path="/exit" element={<PopExitPage setIsAuth={setIsAuth} />} />
          <Route path="/card/:id" element={<PopBrowsePage />} />
        </Route>
      </Route>

      <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/*" element={<h1>Страница не найдена</h1>} />
    </Routes>
  );
}
export default AppRoutes;
