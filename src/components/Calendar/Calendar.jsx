import React, { useState } from "react";
import { CalendarWrapper, CalendarTitle } from "./Calendar.styled.js";
import { useTheme } from "styled-components";

const DAYS_OF_WEEK = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

const Calendar = ({ selectedDate, onSelectDate }) => {
  const theme = useTheme();
  const [currentDate, setCurrentDate] = useState(new Date());

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
    <CalendarWrapper className="calendar">
      <CalendarTitle className="calendar__title">Даты</CalendarTitle>

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
            {/* svg ... */}
          </button>

          <button className="calendar__arrow-right" onClick={goNextMonth}>
            {/* svg ... */}
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
            <span style={{ color: theme.text, paddingLeft: "2px" }}>
              {formatDate(selectedDate)}
            </span>
          </>
        ) : (
          "Выберите срок исполнения."
        )}
      </div>
    </CalendarWrapper>
  );
};

export default Calendar;
