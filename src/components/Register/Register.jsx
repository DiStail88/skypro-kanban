import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // добавили useNavigate
import {
  RegisterBlock,
  RegisterHead,
  RegisterInput,
  RegisterForm,
  RegisterButton,
  RegisterInputBlock,
  RegisterLink,
  RegisterBackground,
} from "./Register.styled.js";
import { signUp } from "../../services/api.js";

const Register = () => {
  const [form, setForm] = useState({ login: "", name: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedName = form.name.trim();
    const trimmedLogin = form.login.trim();
    const trimmedPassword = form.password.trim();

    if (!trimmedName || !trimmedLogin || !trimmedPassword) {
      setError("Все поля должны быть заполнены и не содержать только пробелы.");
      return;
    }

    try {
      await signUp({
        name: trimmedName,
        login: trimmedLogin,
        password: trimmedPassword,
      });
      setError("");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <RegisterBackground>
      <RegisterBlock $hasError={!!error}>
        <RegisterHead>
          <h1>Регистрация</h1>
        </RegisterHead>
        <RegisterForm onSubmit={handleSubmit}>
          <RegisterInputBlock>
            <RegisterInput
              type="text"
              name="name"
              placeholder="Имя"
              value={form.name}
              onChange={handleChange}
              required
            />
            <RegisterInput
              type="text"
              name="login"
              placeholder="Логин"
              value={form.login}
              onChange={handleChange}
              required
            />
            <RegisterInput
              type="password"
              name="password"
              placeholder="Пароль"
              value={form.password}
              onChange={handleChange}
              required
            />
          </RegisterInputBlock>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <RegisterButton type="submit">Зарегистрироваться</RegisterButton>
          <RegisterLink>
            <p>Уже есть аккаунт?</p>
            <Link to="/login">Войдите здесь</Link>
          </RegisterLink>
        </RegisterForm>
      </RegisterBlock>
    </RegisterBackground>
  );
};

export default Register;
