import React, { useState, useEffect } from 'react';
import tasks from '../../data.js';
import Column from '../Column/Column.jsx';

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
            {statuses.map((status) => {
              const filteredTasks = loadedTasks.filter((task) => task.status === status);
              return (
                <div key={status} className="main__column">
                  <Column title={status} tasks={filteredTasks} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
