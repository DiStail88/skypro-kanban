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
  NotFoundButton,
} from "./NotFound.styled.js";

import { ThemeContext } from "../../context/ThemeContext.js";
import { useContext } from "react";

const NotFound = () => {
    const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  return (
    <NotFoundWrapper>
      <HeaderNotFound>
        <NotFoundContainer>
          <NotFoundBlock>
            <Logo>
              <a href="/" target="_self">
                <img
                  src={isDark ? "images/logo_dark.png" : "images/logo.png"}
                  alt="logo"
                />
              </a>
            </Logo>
          </NotFoundBlock>
        </NotFoundContainer>
      </HeaderNotFound>
      <NotFoundMain>
        <NotFoundImg src="cat.png" alt="cat" />
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
