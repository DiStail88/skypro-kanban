import styled from 'styled-components';

export const CardWrapper = styled.div`
  margin-bottom: 16px;
`;

export const CardContainer = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 16px;
`;

export const CardGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardTheme = styled.div`
  padding: 4px 8px;
  border-radius: 6px;
  background-color: #eee;
`;

export const CardBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  cursor: pointer;

  & > div {
    width: 4px;
    height: 4px;
    background-color: #333;
    border-radius: 50%;
  }
`;

export const CardContent = styled.div`
  margin-top: 12px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  margin: 0;
`;

export const CardDate = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: #777;
`;
