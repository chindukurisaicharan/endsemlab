export default function Notifications() {
  const notifications = [
    "New course added",
    "Planner updated",
    "Enrollment successful",
    "Credits updated"
  ];

  return (
    <div>
      <h2>Notifications</h2>

      <div className="timeline-feed">
        {notifications.map((n, i) => (
          <div key={i} className="timeline-event">
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}