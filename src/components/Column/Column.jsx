import React from 'react';
import Card from '../Card/Card';
import {
  ColumnWrapper,
  ColumnTitle,
  CardsContainer,
  EmptyText
} from './Column.styled';

const Column = ({ title, tasks }) => {
  return (
    <ColumnWrapper>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsContainer>
        {tasks.length > 0 ? (
          tasks.map((task) => <Card key={task.id} task={task} />)
        ) : (
          <EmptyText>Нет задач</EmptyText>
        )}
      </CardsContainer>
    </ColumnWrapper>
  );
};

export default Column;
