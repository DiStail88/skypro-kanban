import { Link } from "react-router-dom";
import {
  HeaderNotFound,
  NotFoundContainer,
  NotFoundBlock,
  Logo,
  NotFoundMain,
  NotFoundWrapper,
  NotFoundHead,
  NotFoundP,
  NotFoundImg,
  NotFoundButton
} from "./NotFound.styled.js";

import { AuthContext } from "../../context/AuthContext";

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <HeaderNotFound>
        <NotFoundContainer>
          <NotFoundBlock>
            <Logo>
              <a href="/" target="_self">
                <img src="images/logo.png" alt="logo" />
              </a>
            </Logo>

            <Logo>
              <a href="/" target="_self">
                <img src="images/logo_dark.png" alt="logo" />
              </a>
            </Logo>
          </NotFoundBlock>
        </NotFoundContainer>
      </HeaderNotFound>
      <NotFoundMain>
        <NotFoundImg src="public/cat.png" alt="cat" />
        <NotFoundHead>404</NotFoundHead>
        <NotFoundP>Страница не найдена</NotFoundP>
        <NotFoundButton className="_hover01" id="btnMainNew">
          <Link to="/">Перейти на главную страницу</Link>
        </NotFoundButton>
      </NotFoundMain>
    </NotFoundWrapper>
  );
};

export default NotFound;
