import styled from "styled-components";

export const CalendarWrapper = styled.div`
  width: 168px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0 21px;
`;

export const CalendarTitle = styled.h3`
  width: 37px;
  height: 16px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 14px;
  padding: 0;

  flex: none;
  order: 0;
  flex-grow: 0;

  color: ${({ theme }) => theme.text};
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0;
  text-align: left;

  margin-left: 6px;
`;


