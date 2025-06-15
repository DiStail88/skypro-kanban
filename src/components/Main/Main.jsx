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

import { DragDropContext, Droppable } from "@hello-pangea/dnd";

const Main = () => {
  const { tasks, loading, error, updateTaskStatus } = useContext(TaskContext);

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

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination || destination.droppableId === source.droppableId) return;
    updateTaskStatus(draggableId, destination.droppableId);
  };

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
          <DragDropContext onDragEnd={onDragEnd}>
            <MainContent>
              {statuses.map((status) => {
                const filteredTasks = mappedTasks.filter(
                  (task) => task.status === status
                );

                return (
                  <Droppable droppableId={status} key={status}>
                    {(provided) => (
                      <MainColumn
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        <Column title={status} tasks={filteredTasks} />
                        {provided.placeholder}
                      </MainColumn>
                    )}
                  </Droppable>
                );
              })}
            </MainContent>
          </DragDropContext>
        </MainBlock>
      </Container>
    </MainWrapper>
  );
};

export default Main;
