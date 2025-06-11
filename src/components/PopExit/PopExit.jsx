import { useNavigate } from "react-router-dom";
import {
  PopExitWrapper,
  PopExitContainer,
  PopExitBlock,
  PopExitTtl,
  PopExitFormGroup,
  PopExitYes,
  PopExitNo,
  PopExitForm,
} from "./PopExit.styled.js";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.js";


const PopExit = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleExitYes = (e) => {
    e.preventDefault();
    logout();
    navigate("/login");
  };

  const handleExitNo = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <PopExitWrapper id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>Выйти из аккаунта?</PopExitTtl>
          <PopExitForm>
            <PopExitFormGroup>
              <PopExitYes onClick={handleExitYes}>Да, выйти</PopExitYes>
              <PopExitNo onClick={handleExitNo}>Нет, остаться</PopExitNo>
            </PopExitFormGroup>
          </PopExitForm>
        </PopExitBlock>
      </PopExitContainer>
    </PopExitWrapper>
  );
};

export default PopExit;
