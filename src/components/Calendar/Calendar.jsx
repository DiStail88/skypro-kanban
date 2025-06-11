import React, { useState } from "react";

const DAYS_OF_WEEK = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

const Calendar = ({ onSelectDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const startDayIndex = (firstDayOfWeek + 6) % 7;

  const today = new Date();
  const isToday = (day) =>
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  const handleClick = (day) => {
    const date = new Date(year, month, day);
    const isoDate = date.toISOString();
    setSelectedDate(date);
    onSelectDate?.(isoDate);
  };

  const cells = [];

  for (let i = 0; i < startDayIndex; i++) {
    cells.push(
      <div key={"empty-" + i} className="calendar__cell _cell-empty"></div>
    );
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isSelected =
      selectedDate &&
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year;

    cells.push(
      <div
        key={day}
        className={`calendar__cell _cell-day 
  ${isToday(day) ? "_today" : ""} 
  ${isSelected ? "calendar__cell--active" : ""}`}
        onClick={() => handleClick(day)}
      >
        {day}
      </div>
    );
  }

  const goPrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const formatDate = (date) => {
    const d = date.getDate().toString().padStart(2, "0");
    const m = (date.getMonth() + 1).toString().padStart(2, "0");
    const y = date.getFullYear();
    return `${d}.${m}.${y}`;
  };

  return (
    <div className="calendar">
      <h3 className="calendar__title">Даты</h3>

      <div className="calendar__header">
        <div className="calendar__month-year">
          {(() => {
            const localeString = currentDate.toLocaleString("ru-RU", {
              month: "long",
              year: "numeric",
            });
            return localeString.charAt(0).toUpperCase() + localeString.slice(1);
          })()}
        </div>
        <div className="calendar__block-button">
          <button className="calendar__arrow-left" onClick={goPrevMonth}>
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.72 1.45C6.09 1.12 6.09 0.58 5.72 0.25C5.36 -0.09 4.77 -0.09 4.41 0.25L0.52 3.82C-0.18 4.47 -0.18 5.52 0.52 6.17L4.41 9.74C4.77 10.08 5.36 10.08 5.72 9.74C6.09 9.41 6.09 8.87 5.72 8.54L1.87 5L5.72 1.45Z"
                fill="#94A6BE"
              />
            </svg>
          </button>

          <button className="calendar__arrow-right" onClick={goNextMonth}>
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.27 8.54C-0.1 8.87 -0.1 9.41 0.27 9.74C0.63 10.08 1.22 10.08 1.58 9.74L5.47 6.17C6.17 5.52 6.17 4.47 5.47 3.82L1.58 0.25C1.22 -0.09 0.63 -0.09 0.27 0.25C-0.1 0.58 -0.1 1.12 0.27 1.45L4.12 5L0.27 8.54Z"
                fill="#94A6BE"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="calendar__days-of-week">
        {DAYS_OF_WEEK.map((day) => (
          <div key={day} className="calendar__cell _cell-weekday">
            {day}
          </div>
        ))}
      </div>

      <div className="calendar__cells">{cells}</div>

      <div className="calendar__footer">
        {selectedDate ? (
          <>
            Срок исполнения:{" "}
            <span style={{ color: "black", paddingLeft:"2px" }}>{formatDate(selectedDate)}</span>
          </>
        ) : (
          "Выберите срок исполнения."
        )}
      </div>
    </div>
  );
};

export default Calendar;
