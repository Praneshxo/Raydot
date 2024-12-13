import React, {useState, useRef } from 'react';
import { gsap } from 'gsap';
import './Calendar.css';

const Calendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const calendarRef = useRef(null);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleDateClick = (day) => {
    const clickedElement = calendarRef.current.querySelector(`.day-${day}`);

    if (selectedDate === day) {
      setSelectedDate(null);
      if (clickedElement) {
        gsap.to(clickedElement.querySelector('.circle'), { strokeDashoffset: 157, duration: 0.5 });
      }
    } else {
      setSelectedDate(day);
      if (clickedElement) {
        const circle = clickedElement.querySelector('.circle');
        gsap.set(circle, { strokeDasharray: 157, strokeDashoffset: 157 });
        gsap.to(circle, { strokeDashoffset: 0, duration: 0.5 });
      }
    }
  };

  const renderCalendarDays = () => {
    const totalDays = getDaysInMonth(currentMonth, currentYear);
    const days = [];

    for (let i = 1; i <= totalDays; i++) {
      const isToday =
        i === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();

      const isSelected = i === selectedDate;

      days.push(
        <div
          key={i}
          className={`calendar__day day-${i} ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}`}
          onClick={() => handleDateClick(i)}
        >
          {i}
          <svg className="circle-svg" width="40" height="40">
            <circle
              className="circle"
              cx="20"
              cy="20"
              r="18"
              fill="none"
              stroke="#ff6347"
              strokeWidth="2"
              strokeDasharray="157"
              strokeDashoffset="157"
            />
          </svg>
        </div>
      );
    }

    return days;
  };

  return (
  <div className='call-box'>
    <div className="calendar-container" ref={calendarRef}>
      <div className="calendar-header">
        <button className="calendar-nav prev" onClick={handlePreviousMonth}>
          &lt;
        </button>
        <div className="calendar-month-year">
          {monthNames[currentMonth]} {currentYear}
        </div>
        <button className="calendar-nav next" onClick={handleNextMonth}>
          &gt;
        </button>
      </div>
      <div className="calendar-body">
        {renderCalendarDays()}
      </div>
    </div>
  </div>
  );
};

export default Calendar;

