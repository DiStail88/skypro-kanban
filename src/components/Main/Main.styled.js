import styled from 'styled-components';

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
