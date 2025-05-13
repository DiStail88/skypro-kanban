import React from 'react';
import Card from '../Card/Card';

const Column = ({ title, tasks }) => {
	return (
		<div className="column">
			<h2 className="column__title">{title}</h2>
			<div className="column__tasks">
				{tasks.length > 0 ? (
					tasks.map((task) => (
						<Card
							key={task.id}
							id={task.id}
							topic={task.topic}
							title={task.title}
							date={task.date}
							status={task.status}
						/>
					))
				) : (
					<p className="column__empty">Нет задач</p>
				)}
			</div>
		</div>
	);
};

export default Column;
