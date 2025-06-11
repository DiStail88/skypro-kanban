import React, { useContext } from "react";
import Column from "../Column/Column.jsx";
import {
  LoadingWrapper,
  MainWrapper,
  Container,
  MainBlock,
  MainContent,
  MainColumn,
} from "./Main.styled.js";
import { TaskContext } from "../../context/TaskContext";  
import { themeClassMap } from "../../utils/themeClassMap.js";
import { formatDate } from "../../utils/formatDate.js";

const Main = () => {
  const { tasks, loading, error } = useContext(TaskContext);

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];


  const mappedTasks = tasks.map((task) => ({
    ...task,
    theme: task.topic || "Research",
    themeClass: themeClassMap[task.topic] || themeClassMap["Default"],
    date: formatDate(task.date),
  }));

  if (loading) {
    return (
      <LoadingWrapper>
        <p>Идет загрузка...</p>
      </LoadingWrapper>
    );
  }

  if (error) {
    return (
      <LoadingWrapper>
        <p>Ошибка: {error}</p>
      </LoadingWrapper>
    );
  }

  return (
    <MainWrapper>
      <Container>
        <MainBlock>
          <MainContent>
            {statuses.map((status) => {
              const filteredTasks = mappedTasks.filter(
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
