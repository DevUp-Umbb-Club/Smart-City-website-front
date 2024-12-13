import React from 'react';
import './Schedule.css';

const agenda = {
  THURSDAY: [
    { time: "17:00-18:00", activity: "Reception (at our local 203.bloc5 FS)" },
    { time: "18:00-19:00", activity: "Opening Ceremony" },
    { time: "19:00-19:30", activity: "Prayer Time" },
    { time: "19:30-21:00", activity: "Hacking Starts" },
    { time: "21:00-22:00", activity: "Dinner Time" },
    { time: "22:00-00:00", activity: "Hacking" }
  ],
  FRIDAY: [
    { time: "00:00-02:00", activity: "Hacking" },
    { time: "02:00-03:00", activity: "Coffee & Snack Break" },
    { time: "03:00-06:00", activity: "Hacking" },
    { time: "06:00-06:30", activity: "Prayer Time" },
    { time: "06:30-08:00", activity: "Hacking" },
    { time: "08:00-09:00", activity: "Breakfast" },
    { time: "09:00-12:30", activity: "Hacking" },
    { time: "12:30-14:00", activity: "Prayer Time" },
    { time: "14:00-15:45", activity: "Lunch Time + Prayer Time" },
    { time: "15:45-17:30", activity: "Hacking" },
    { time: "17:35-18:30", activity: "Coffee & Snack Break + Prayer Time" },
    { time: "18:30-19:10", activity: "Hacking" },
    { time: "19:10-19:30", activity: "Prayer Time" },
    { time: "19:30-21:00", activity: "Hacking" },
    { time: "21:00-22:00", activity: "Dinner" },
    { time: "22:00-00:00", activity: "Hacking" }
  ],
  SATURDAY: [
    { time: "00:00-02:00", activity: "Hacking" },
    { time: "02:00-03:00", activity: "Coffee & Snack Break" },
    { time: "03:00-06:00", activity: "Hacking" },
    { time: "06:00-06:30", activity: "Prayer Time" },
    { time: "06:30-08:00", activity: "Hacking" },
    { time: "08:00-09:00", activity: "Breakfast" },
    { time: "09:00-11:00", activity: "Final Touches on Coding" },
    { time: "11:00", activity: "Submission Deadline" },
    { time: "11:00-12:00", activity: "Lunch" },
    { time: "12:00-14:00", activity: "Presentation des Projets + Time pour les Jury" },
    { time: "14:00-15:00", activity: "Coffee Break" },
    { time: "15:00-16:00", activity: "Winners Announcement & Closing Ceremony" }
  ]
};

export default function AgendaCard({ day = "THURSDAY" }) {
  const dayAgenda = agenda[day] || [];

  return (
    <div className="card">
      <div className="agenda-card">
        <ul className="timeline">
          {dayAgenda.map((event, index) => (
            <li className="timeline-item" key={index}>
              <div className={`dot ${index === 0 ? "active" : ""}`}></div>
              <div className="content">
                <span className="time">{event.time}</span>
                <span className="activity">{event.activity}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
