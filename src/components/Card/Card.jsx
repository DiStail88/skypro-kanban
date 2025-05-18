import React from 'react';
import {
  CardWrapper,
  CardContainer,
  CardGroup,
  CardTheme,
  CardBtn,
  CardContent,
  CardTitle,
  CardDate,
} from './Card.styled';

const Card = ({ task }) => {
  if (!task) return null;

  return (
    <CardWrapper>
      <CardContainer>
        <CardGroup>
          <CardTheme className={task.themeClass}>
            <p className={task.themeClass}>{task.theme}</p>
          </CardTheme>
          <a href="#popBrowse" target="_self">
            <CardBtn>
              <div></div>
              <div></div>
              <div></div>
            </CardBtn>
          </a>
        </CardGroup>
        <CardContent>
          <a href="" target="_blank">
            <CardTitle>{task.title}</CardTitle>
          </a>
          <CardDate>
            <p>{task.date}</p>
          </CardDate>
        </CardContent>
      </CardContainer>
    </CardWrapper>
  );
};

export default Card;