import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: #fff;
  padding: 10px 0;
  border-bottom: 1px solid #e6e6e6;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  img {
    height: 40px;
  }

  &._dark {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const MainButton = styled.button`
  background-color: #5570f1;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #445ace;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

export const UserName = styled.a`
  color: #3b3b3b;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Popup = styled.div`
  position: absolute;
  top: 60px;
  right: 15px;
  background-color: #fff;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0px 8px 16px rgba(0,0,0,0.1);
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  z-index: 10;
`;

export const PopupName = styled.p`
  font-weight: bold;
  margin-bottom: 4px;
`;

export const PopupMail = styled.p`
  color: #888;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const PopupTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  p {
    margin: 0;
  }
`;

export const LogoutButton = styled.button`
  background: transparent;
  border: none;
  color: #5570f1;
  cursor: pointer;

  a {
    color: inherit;
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
  }
`;
