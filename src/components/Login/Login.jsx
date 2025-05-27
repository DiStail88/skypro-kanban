import { Link, useNavigate } from "react-router-dom"
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

const Login = ({setIsAuth}) => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
        e.preventDefault();
        setIsAuth(true);
        navigate("/");
  };
  return (
    <LoginBackground>
      <LoginBlock>
        <LoginHead>
          <h1>Вход</h1>
        </LoginHead>
        <LoginForm>
          <LoginInputBlock>
            <LoginInput type="email" placeholder="Эл. почта" />
            <LoginInput type="password" placeholder="Пароль" />
          </LoginInputBlock>
          <LoginButton onClick={handleLogin}>Войти</LoginButton>
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
