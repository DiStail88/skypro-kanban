import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LoginBlock,
  LoginHead,
  LoginInput,
  LoginForm,
  LoginButton,
  LoginInputBlock,
  LoginLink,
  LoginBackground
} from "./Login.styled.js";
import { signIn } from "../../services/api.js"; 
import { AuthContext } from "../../context/AuthContext.js";

const Login = () => {
  const [form, setForm] = useState({ login: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {login} = useContext(AuthContext)

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const user = await signIn(form);
    login(user);
    setError('');
    navigate('/');
  } catch (err) {
    setError(err.message);
  }
};

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <LoginBackground>
      <LoginBlock $hasError={!!error}>
        <LoginHead>
          <h1>Вход</h1>
        </LoginHead>
        <LoginForm onSubmit={handleLogin}>
          <LoginInputBlock>
            <LoginInput
              type="text"
              name="login"
              placeholder="Логин"
              value={form.login}
              onChange={handleChange}
              required
            />
            <LoginInput
              type="password"
              name="password"
              placeholder="Пароль"
              value={form.password}
              onChange={handleChange}
              required
            />
          </LoginInputBlock>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <LoginButton type="submit">Войти</LoginButton>
          <LoginLink>
            <p>Нужно зарегистрироваться?</p>
            <Link to='/register'>Регистрируйтесь здесь</Link>
          </LoginLink>
        </LoginForm>
      </LoginBlock>
    </LoginBackground>
  );
};

export default Login;
