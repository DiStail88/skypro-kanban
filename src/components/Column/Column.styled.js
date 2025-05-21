import styled from 'styled-components';

<<<<<<< HEAD
export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnTitle = styled.div`
  padding: 10px 0;
  font-size: 16px;
  font-weight: bold;
  color: #3b3b3b;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const EmptyText = styled.p`
  color: #94A6BE;
  font-size: 14px;
  font-style: italic;
`;
=======
export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;

  p {
  color: #94A6BE;
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
`;
>>>>>>> 7b89ddc (Заменил основные компоненты на styled-components)
