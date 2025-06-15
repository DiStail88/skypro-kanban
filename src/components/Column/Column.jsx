import Card from "../Card/Card";
import { ColumnTitle, CardsWrapper, EmptyMessage } from "./Column.styled.js";

const Column = ({ title, tasks }) => {
  return (
    <>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsWrapper>
        {tasks.length > 0 ? (
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
