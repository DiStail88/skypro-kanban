import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"

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

const Header = () => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const popupRef = useRef(null);
  const nameRef = useRef(null);

  const headerPopup = () => {
    setShowUserInfo((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (nameRef.current.contains(e.target)) return;
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
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </Logo>

          <Logo>
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </Logo>

          <Nav>
            <MainButton className="_hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </MainButton>
            <UserLink
              href="#user-set-target"
              ref={nameRef}
              onClick={(e) => {
                e.preventDefault();
                headerPopup();
              }}
            >
              Ivan Ivanov
            </UserLink>
            <UserPopup
              $visible={showUserInfo}
              ref={popupRef}
              id="user-set-target"
            >
              <UserName>Ivan Ivanov</UserName>
              <UserEmail>ivan.ivanov@gmail.com</UserEmail>
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
