import styled from "styled-components";

export const LoadingWrapper = styled.div`
  padding: 40px;
  text-align: center;

  p {
    font-size: 18px;
    color: ${({ theme }) => theme.text};
  }
`;

export const MainWrapper = styled.main`
  width: 100%;
  background-color: ${({ theme }) =>
    theme.background === "#FFFFFF" ? "#eaeef6" : theme.background};
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

export const MainColumn = styled.div`
  width: 20%;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 20%;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;
