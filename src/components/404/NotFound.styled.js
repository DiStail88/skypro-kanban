import styled from "styled-components";

export const HeaderNotFound = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const NotFoundContainer = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const NotFoundBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const Logo = styled.div`
  img {
    width: 85px;
    display: block;
    filter: ${({ $theme }) => ($theme === "dark" ? "brightness(0.8)" : "none")};
  }
`;

export const NotFoundMain = styled.main`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NotFoundHead = styled.h1`
  color: rgb(0, 0, 0);
  font-family: Roboto;
  font-size: 96px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -2%;
  text-align: center;
`;

export const NotFoundP = styled.p`
  color: rgb(0, 0, 0);
  font-family: Roboto;
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -2%;
  text-align: center;
`;

export const NotFoundWrapper = styled.div``;

export const NotFoundImg = styled.img`
  width: 150px;
  height: 150px;
`;

export const NotFoundButton = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 12px;
  line-height: 1;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 30px;

  &._hover01:hover {
    background-color: #33399b;
  }

  a {
    color: #ffffff;
  }
`;
