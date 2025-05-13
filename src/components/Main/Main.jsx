import React, { useState, useEffect } from 'react';
import Card from '../Card/Card.jsx';
import tasks from '../../data.js';

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
      <div className="loading">
        <p>Идет загрузка...</p>
      </div>
    );
  }

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statuses.map((status) => (
              <div key={status} className="main__column">
                <div className="column__title">
                  <p>{status}</p>
                </div>
                <div className="cards">
                  {loadedTasks
                    .filter((task) => task.status === status)
                    .map((task) => (
                      <Card key={task.id} task={task} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
