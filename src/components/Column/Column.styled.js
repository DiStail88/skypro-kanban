import styled from "styled-components";

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;

  p {
    color: #94a6be;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
`;

export const EmptyMessage = styled.p`
  color: ${({ theme }) => theme.text};
`;
