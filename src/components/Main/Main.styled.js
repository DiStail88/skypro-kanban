import styled from 'styled-components';

<<<<<<< HEAD
export const MainWrapper = styled.main`
  padding: 20px 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 10px;
`;

export const ColumnWrapper = styled.div`
  flex: 0 0 250px;
  min-width: 250px;
`;

export const Loading = styled.div`
  padding: 40px;
  text-align: center;
  font-size: 18px;
  color: #94a6be;
`;
=======
export const LoadingWrapper = styled.div`
  padding: 40px;
  text-align: center;

  p {
    font-size: 18px;
    color: #555;
  }
`;

export const MainWrapper = styled.main`
  width: 100%;
  background-color: #EAEEF6;
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
>>>>>>> 7b89ddc (Заменил основные компоненты на styled-components)
