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

const Header = () => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const popupRef = useRef(null);
  const nameRef = useRef(null);

  const headerPopup = () => {
    setShowUserInfo((prev) => !prev);
  };

  useEffect(() => {
    const headerClickPopup = (e) => {
      if (nameRef.current.contains(e.target)) return;
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowUserInfo(false);
      }
    };

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
  );
};

export default Header;
