import React from 'react';
import {
  CalendarWrapper,
  Title,
  CalendarBlock,
  Nav,
  Month,
  NavActions,
  NavAction,
  Content,
  DaysNames,
  DayName,
  Cells,
  Cell,
  Period,
  PeriodText,
} from './Calendar.styled';

const Calendar = () => {
  const days = [
    { label: '28', other: true }, { label: '29', other: true }, { label: '30', other: true },
    { label: '31' }, { label: '1' }, { label: '2', weekend: true }, { label: '3', weekend: true },
    { label: '4' }, { label: '5' }, { label: '6' }, { label: '7' }, { label: '8', current: true },
    { label: '9', weekend: true }, { label: '10', weekend: true }, { label: '11' }, { label: '12' },
    { label: '13' }, { label: '14' }, { label: '15' }, { label: '16', weekend: true },
    { label: '17', weekend: true }, { label: '18' }, { label: '19' }, { label: '20' },
    { label: '21' }, { label: '22' }, { label: '23', weekend: true }, { label: '24', weekend: true },
    { label: '25' }, { label: '26' }, { label: '27' }, { label: '28' }, { label: '29' },
    { label: '30', weekend: true }, { label: '1', other: true, weekend: true }
  ];

  return (
    <CalendarWrapper>
      <Title>Даты</Title>
      <CalendarBlock>
        <Nav>
          <Month>Сентябрь 2023</Month>
          <NavActions>
            <NavAction data-action="prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </NavAction>
            <NavAction data-action="next">
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </NavAction>
          </NavActions>
        </Nav>

        <Content>
          <DaysNames>
            {['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'].map((d, idx) => (
              <DayName key={d} className={idx > 4 ? 'weekend' : ''}>{d}</DayName>
            ))}
          </DaysNames>

          <Cells>
            {days.map((day, index) => (
              <Cell
                key={index}
                isWeekend={day.weekend}
                isCurrent={day.current}
                isOther={day.other}
              >
                {day.label}
              </Cell>
            ))}
          </Cells>
        </Content>

        <input type="hidden" id="datepick_value" value="08.09.2023" />
        <Period>
          <PeriodText>
            Выберите срок исполнения <span className="date-control"></span>.
          </PeriodText>
        </Period>
      </CalendarBlock>
    </CalendarWrapper>
  );
};

export default Calendar;
