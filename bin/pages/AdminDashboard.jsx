import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setCourses(JSON.parse(localStorage.getItem("courses")) || []);
    setStudents(JSON.parse(localStorage.getItem("students")) || []);
  }, []);

  const actions = [
    { label: "Manage Courses", path: "/admin/courses" },
    { label: "Manage Students", path: "/admin/students" },
    { label: "View Analytics", path: "/admin/analytics" },
  ];

  return (
    <>
      {/* KPI */}
      <section className="kpi-grid">
        <div className="kpi-card glow-card">
          <span>Total Courses</span>
          <strong>{courses.length}</strong>
        </div>

        <div className="kpi-card glow-card">
          <span>Total Students</span>
          <strong>{students.length}</strong>
        </div>

        <div className="kpi-card glow-card">
          <span>Programs</span>
          <strong>32</strong>
        </div>

        <div className="kpi-card glow-card">
          <span>Requests</span>
          <strong>12</strong>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="section">
        <h3>Quick Actions</h3>

        <div className="cards">
          {actions.map((action, index) => (
            <button
              key={index}
              className="card-glass"
              onClick={() => navigate(action.path)}
            >
              {action.label}
            </button>
          ))}
        </div>
      </section>

      {/* ACTIVITY */}
      <section className="section">
        <h3>Recent Activity</h3>

        <div className="timeline-feed">
          <div className="timeline-event">Course added</div>
          <div className="timeline-event">Student enrolled</div>
          <div className="timeline-event">System updated</div>
        </div>
      </section>
    </>
  );
}