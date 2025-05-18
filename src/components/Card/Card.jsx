import React from 'react';

const Card = ({ task }) => {
	if (!task) return null;

	return (
		<div className="cards__item">
			<div className="cards__card card">
				<div className="card__group">
					<div className={`card__theme ${task.themeClass}`}>
						<p className={task.themeClass}>{task.theme}</p>
					</div>
					<a href="#popBrowse" target="_self">
						<div className="card__btn">
							<div></div>
							<div></div>
							<div></div>
						</div>
					</a>
				</div>
				<div className="card__content">
					<a href="" target="_blank">
						<h3 className="card__title">{task.title}</h3>
					</a>
					<div className="card__date">
						<p>{task.date}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
