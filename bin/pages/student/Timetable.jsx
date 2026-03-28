export default function Timetable() {
  const schedule = [
    { day: "Monday", subject: "Data Structures" },
    { day: "Tuesday", subject: "Operating Systems" },
    { day: "Wednesday", subject: "DBMS" },
    { day: "Thursday", subject: "Computer Networks" },
    { day: "Friday", subject: "AI" },
  ];

  return (
    <div>
      <h2>Timetable</h2>

      <div className="cards">
        {schedule.map((s, i) => (
          <div key={i} className="card-glass">
            <strong>{s.day}</strong>
            <p>{s.subject}</p>
          </div>
        ))}
      </div>
    </div>
  );
}