import React, { useState, useEffect } from "react";
import tasks from "../../data.js";
import Column from "../Column/Column.jsx";
import {
  LoadingWrapper,
  MainWrapper,
  Container,
  MainBlock,
  MainContent,
  MainColumn,
} from "./Main.styled.js";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [loadedTasks, setLoadedTasks] = useState([]);

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoadedTasks(tasks);
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <LoadingWrapper>
        <p>Идет загрузка...</p>
      </LoadingWrapper>
    );
  }

  return (
    <MainWrapper>
      <Container>
        <MainBlock>
          <MainContent>
            {statuses.map((status) => {
              const filteredTasks = loadedTasks.filter(
                (task) => task.status === status
              );
              return (
                <MainColumn key={status}>
                  <Column title={status} tasks={filteredTasks} />
                </MainColumn>
              );
            })}
          </MainContent>
        </MainBlock>
      </Container>
    </MainWrapper>
  );
};

export default Main;
