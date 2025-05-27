import { Link, Navigate } from "react-router-dom"
import {
  RegisterBlock,
  RegisterHead,
  RegisterInput,
  RegisterForm,
  RegisterButton,
  RegisterInputBlock,
  RegisterLink,
  RegisterBackground
} from "./Register.styled.js";

const Register = () => {
  return (
    <RegisterBackground>
      <RegisterBlock>
        <RegisterHead>
          <h1>Регистрация</h1>
        </RegisterHead>
        <RegisterForm>
          <RegisterInputBlock>
            <RegisterInput type="name" placeholder="Имя" />
            <RegisterInput type="email" placeholder="Эл. почта" />
            <RegisterInput type="password" placeholder="Пароль" />
          </RegisterInputBlock>
          <RegisterButton>Зарегистрироваться</RegisterButton>
          <RegisterLink>
            <p>Уже есть аккаунт?</p>
            <Link to='/login'>Войдите здесь</Link>
          </RegisterLink>
        </RegisterForm>
      </RegisterBlock>
    </RegisterBackground>
  );
};

export default Register;
