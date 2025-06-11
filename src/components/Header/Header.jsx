import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import {
  StyledHeader,
  Container,
  HeaderBlock,
  Logo,
  Nav,
  MainButton,
  UserLink,
  UserPopup,
  UserName,
  UserEmail,
  ThemeToggle,
  ExitButton,
} from "./Header.styled.js";

import { AuthContext } from "../../context/AuthContext"; // ✅ проверь путь

const Header = () => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const popupRef = useRef(null);
  const nameRef = useRef(null);

  const { user } = useContext(AuthContext);

  const headerPopup = () => {
    setShowUserInfo((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (nameRef.current?.contains(e.target)) return;
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowUserInfo(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <StyledHeader>
      <Container>
        <HeaderBlock>
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

          <Nav>
            <MainButton className="_hover01" id="btnMainNew">
              <Link to="/new">Создать новую задачу</Link>
            </MainButton>

            <UserLink
              href="#user-set-target"
              ref={nameRef}
              onClick={(e) => {
                e.preventDefault();
                headerPopup();
              }}
            >
              {user?.name || "Пользователь"}
            </UserLink>

            <UserPopup $visible={showUserInfo} ref={popupRef} id="user-set-target">
              <UserName>{user?.name || "Имя не указано"}</UserName>
              <UserEmail>{user?.login || "email@example.com"}</UserEmail>
              <ThemeToggle>
                <p>Темная тема</p>
                <input type="checkbox" name="checkbox" />
              </ThemeToggle>
              <ExitButton className="_hover03">
                <Link to="/exit">Выйти</Link>
              </ExitButton>
            </UserPopup>
          </Nav>
        </HeaderBlock>
      </Container>
    </StyledHeader>
  );
};

export default Header;
