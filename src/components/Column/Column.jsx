import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext.js";
import Card from "../Card/Card";
import CardSkeleton from "../CardSkeleton/CardSkeleton.jsx";
import { ColumnTitle, CardsWrapper, EmptyMessage } from "./Column.styled.js";

const Column = ({ title, tasks }) => {
  const { loading } = useContext(TaskContext);

  const skeletonCountByStatus = {
    "Без статуса": 5,
    "Нужно сделать": 1,
    "В работе": 3,
    Тестирование: 1,
    Готово: 1,
  };

  const skeletonCount = skeletonCountByStatus[title] || 2; 

  return (
    <>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsWrapper>
        {loading ? (
          Array.from({ length: skeletonCount }).map((_, i) => (
            <CardSkeleton key={i} />
          ))
        ) : tasks.length > 0 ? (
          tasks.map((task, index) => (
            <Card key={task._id} task={task} index={index} />
          ))
        ) : (
          <EmptyMessage>Нет задач</EmptyMessage>
        )}
      </CardsWrapper>
    </>
  );
};

export default Column;
