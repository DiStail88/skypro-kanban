import React from 'react';
import Card from '../Card/Card';

const Column = ({ title, tasks }) => {
  return (
    <>
      <div className="column__title"> 
        <p>{title}</p>
      </div>
      <div className="cards">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Card key={task.id} task={task} />
          ))
        ) : (
          <p className="column__empty">Нет задач</p>
        )}
      </div>
    </>
  );
};

export default Column;
