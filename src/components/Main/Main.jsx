import React, { useState, useEffect } from 'react';
import tasks from '../../data.js';
import Column from '../Column/Column.jsx';

import {
  MainWrapper,
  Container,
  MainBlock,
  MainContent,
  ColumnWrapper,
  Loading
} from './Main.styled';

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [loadedTasks, setLoadedTasks] = useState([]);

  const statuses = ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово'];

  useEffect(() => {
    setTimeout(() => {
      setLoadedTasks(tasks);
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <Loading>
        <p>Идет загрузка...</p>
      </Loading>
    );
  }

  return (
    <MainWrapper>
      <Container>
        <MainBlock>
          <MainContent>
            {statuses.map((status) => {
              const filteredTasks = loadedTasks.filter((task) => task.status === status);
              return (
                <ColumnWrapper key={status}>
                  <Column title={status} tasks={filteredTasks} />
                </ColumnWrapper>
              );
            })}
          </MainContent>
        </MainBlock>
      </Container>
    </MainWrapper>
  );
};

export default Main;
