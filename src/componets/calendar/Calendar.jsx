"use client";
import "./Calendar.css";

export default function Calendar() {
  const day = ["일", "월", "화", "수", "목", "금", "토"];
  let date = [];
  for (let i = 0; i < 35; i++) {
    date[i] = i + 1;
  }

  return (
    <div className="calendar-container">
      <h3>5월</h3>
      <div className="calendar-grid">
        {day.map((data) => (
          <p className="calendar-day" key={data}>
            {data}요일
          </p>
        ))}
        {date.map((data, i) => {
          return (
            <div className="calendar-date" key={i}>
              {data}
            </div>
          );
        })}
      </div>
    </div>
  );
}
