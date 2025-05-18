import styled from 'styled-components';

export const PopExitWrapper = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopExitContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 30px;
  width: 100%;
  max-width: 400px;
`;

export const PopExitBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  font-size: 20px;
  color: #333;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const ExitButton = styled.button`
  flex: 1;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s ease;
  border: none;
  
  &.yes {
    background-color: #ff7a7a;
    color: #fff;

    &:hover {
      background-color: #e15e5e;
    }
  }

  &.no {
    background-color: #e6e6e6;
    color: #333;

    &:hover {
      background-color: #ccc;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
