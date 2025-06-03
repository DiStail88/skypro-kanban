import styled from "styled-components";

export const LoginBackground = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;


    position: relative;
    background: rgb(234, 238, 246);

`;

export const LoginLink = styled.div`
    display: flex;
    flex-direction: column;
    p{
        color: rgba(148, 166, 190, 0.4);
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.1px;
        text-align: center;
    }

    a{
        color: rgba(148, 166, 190, 0.4);
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.1px;
        text-align: center;
        text-decoration: underline;
        cursor: pointer;
    }

`;

export const LoginInputBlock = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 7px;
`;



export const LoginForm = styled.form`
    width: 248px;
    height: 164px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
`;

export const LoginInput = styled.input`
  width: 248px;
  height: 30px;

  padding: 8px 10px;

  color: rgb(148, 166, 190);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.2px;
  text-align: left;

  box-sizing: border-box;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;

  outline: none;

  &::placeholder {
    color: rgb(148, 166, 190);
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.2px;
    text-align: left;
  }
`;

export const LoginButton = styled.button`
    width: 248px;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10;
    padding: 8px 10px 8px 10px;

    color: rgb(255, 255, 255);
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -1%;
    text-align: center;

    border-radius: 4px;
    background: rgb(86, 94, 239);
    border: none;

`;

export const LoginHead = styled.div`
    width: 248px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    padding: 0;

    h1 {
        color: rgb(0, 0, 0);
        font-family: Roboto;
        font-size: 20px;
        font-weight: 700;
        line-height: 150%;
        letter-spacing: -0.3px;
        text-align: center;
    }
`;

export const LoginBlock = styled.div`
  width: 368px;
  height: ${({ $hasError }) => ($hasError ? "390px" : "329px")};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  padding: 50px 60px;

  box-sizing: border-box;
  border: 0.7px solid rgb(212, 219, 229);
  border-radius: 10px;

  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  background: rgb(255, 255, 255);
  z-index: 100;
  transition: height 0.3s ease;
`;
