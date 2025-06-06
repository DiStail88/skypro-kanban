import React, { useState, useEffect } from "react";
import Column from "../Column/Column.jsx";
import {
  LoadingWrapper,
  MainWrapper,
  Container,
  MainBlock,
  MainContent,
  MainColumn,
} from "./Main.styled.js";
import { fetchTasks } from "../../services/api.js";
import { themeClassMap } from "../../utils/themeClassMap.js";
import { formatDate } from "../../utils/formatDate.js";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [loadedTasks, setLoadedTasks] = useState([]);
  const [error, setError] = useState(null);

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("Вы не авторизованы");
      setLoading(false);
      return;
    }

  fetchTasks(token)
    .then((tasks) => {
      const mappedTasks = tasks.map((task) => ({
        ...task,
        theme: task.topic || "Research", 
        themeClass: themeClassMap[task.topic] || themeClassMap["Default"],
        date: formatDate(task.date),
      }));
      setLoadedTasks(mappedTasks);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
}, []);

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
