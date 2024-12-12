import React, { useState } from 'react';
import './Schedule.css';
import AgendaCard from './AgendaCard';

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("THURSDAY");
  const dayToDate = {
    THURSDAY: "19th DEC",
    FRIDAY: "20th DEC",
    SATURDAY: "21st DEC"
  };
  const dayToNumber = {
    THURSDAY: "DAY 1 ",
    FRIDAY: "DAY 2",
    SATURDAY: "DAY 3"
  };

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  const getButtonStyle = (day) => {
    return selectedDay === day ? { backgroundColor: "#FC0FF5", color: "#ffffff" } : { backgroundColor: "#38FBDB", color: "black" };
  };

  return (
    <div className='total'>
      <div className='firstside'>
      <div className='titles'>
        <h3 className='schedule'>Schedule</h3>
        <div className='description'>
          <div className='line'></div>
          <h6 className='scheduleagenda'>SEE THE FULL SCHEDULE</h6>
        </div>
      </div>
      <div className='buttons'>
        <button
          className='button'
          onClick={() => handleDayChange("THURSDAY")}
          style={getButtonStyle("THURSDAY")}
        >
          THU
        </button>
        <button
          className='button'
          onClick={() => handleDayChange("FRIDAY")}
          style={getButtonStyle("FRIDAY")}
        >
          FRI
        </button>
        <button
          className='button'
          onClick={() => handleDayChange("SATURDAY")}
          style={getButtonStyle("SATURDAY")}
        >
          SAT
        </button>
      </div>
      </div>
      <div className='agendapart'>
        <div className='days'>
          <h5 className='date'>{dayToDate[selectedDay]}</h5>
          <h1 className='day'>{dayToNumber[selectedDay]}</h1>
        </div>
        <AgendaCard day={selectedDay} />
      </div>
    </div>
  );
};

export default Schedule;
