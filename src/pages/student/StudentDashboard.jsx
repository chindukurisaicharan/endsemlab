import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  const [enrolled, setEnrolled] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setEnrolled(JSON.parse(localStorage.getItem("enrolled")) || []);
  }, []);

  return (
    <>
      {/* KPI */}
      <section className="kpi-grid">
        <div className="kpi-card glow-card">
          <span>Enrolled Courses</span>
          <strong>{enrolled.length}</strong>
        </div>

        <div className="kpi-card glow-card">
          <span>Credits</span>
          <strong>{enrolled.length * 3}</strong>
        </div>

        <div className="kpi-card glow-card">
          <span>Progress</span>
          <strong>72%</strong>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="section">
        <h3>Quick Actions</h3>
        <div className="cards">

          <button
            className="card-glass"
            onClick={() => navigate("/student/courses")}
          >
            📚 View Courses
          </button>

          <button
            className="card-glass"
            onClick={() => navigate("/student/planner")}
          >
            🗂 Open Planner
          </button>

        </div>
      </section>

      {/* ACTIVITY */}
      <section className="section">
        <h3>Recent Activity</h3>
        <div className="timeline-feed">
          <div className="timeline-event">Enrolled in course</div>
          <div className="timeline-event">Planner updated</div>
        </div>
      </section>
    </>
  );
}