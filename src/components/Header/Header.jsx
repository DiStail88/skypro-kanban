import React, { useState, useEffect, useRef } from 'react';
import {
  HeaderWrapper,
  Container,
  HeaderBlock,
  Logo,
  Nav,
  MainButton,
  UserName,
  Popup,
  PopupName,
  PopupMail,
  PopupTheme,
  LogoutButton
} from './Header.styled';

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
} from './Header.styled.js';

const Header = () => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const popupRef = useRef(null);
  const nameRef = useRef(null);

  const headerPopup = () => {
<<<<<<< HEAD
    setShowUserInfo((prev) => !prev);
  };

  useEffect(() => {
    const headerClickPopup = (e) => {
=======
    setShowUserInfo(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
>>>>>>> 7b89ddc (Заменил основные компоненты на styled-components)
      if (nameRef.current.contains(e.target)) return;
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowUserInfo(false);
      }
    };

<<<<<<< HEAD
    document.addEventListener('mousedown', headerClickPopup);
    return () => {
      document.removeEventListener('mousedown', headerClickPopup);
    };
  }, []);

  return (
    <HeaderWrapper>
      <Container>
        <HeaderBlock>
          <Logo className="_show _light">
            <a href="#"><img src="images/logo.png" alt="logo" /></a>
          </Logo>
          <Logo className="_dark">
            <a href="#"><img src="images/logo_dark.png" alt="logo" /></a>
          </Logo>

          <Nav>
            <MainButton id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </MainButton>

            <UserName
              ref={nameRef}
              onClick={(e) => {
                e.preventDefault();
                headerPopup();
              }}
            >
              Ivan Ivanov
            </UserName>

            <Popup ref={popupRef} visible={showUserInfo}>
              <PopupName>Ivan Ivanov</PopupName>
              <PopupMail>ivan.ivanov@gmail.com</PopupMail>
              <PopupTheme>
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" />
              </PopupTheme>
              <LogoutButton>
                <a href="#popExit">Выйти</a>
              </LogoutButton>
            </Popup>
          </Nav>
        </HeaderBlock>
      </Container>
    </HeaderWrapper>
=======
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
            <UserPopup $visible={showUserInfo} ref={popupRef} id="user-set-target">
              <UserName>Ivan Ivanov</UserName>
              <UserEmail>ivan.ivanov@gmail.com</UserEmail>
              <ThemeToggle>
              <p>Темная тема</p>
              <input type="checkbox" name="checkbox" />
              </ThemeToggle>
              <ExitButton className="_hover03">
                <a href="#popExit">Выйти</a>
              </ExitButton>
            </UserPopup>
          </Nav>
        </HeaderBlock>
      </Container>
    </StyledHeader>
>>>>>>> 7b89ddc (Заменил основные компоненты на styled-components)
  );
};

export default Header;
