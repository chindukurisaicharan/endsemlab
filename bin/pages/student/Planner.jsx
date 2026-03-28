import { useEffect, useState } from "react";

export default function Planner() {
  const [courses, setCourses] = useState([]);
  const [enrolled, setEnrolled] = useState([]);

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem("courses")) || [];
    const en = JSON.parse(localStorage.getItem("enrolled")) || [];

    setCourses(all);
    setEnrolled(en);
  }, []);

  const myCourses = courses.filter((c) => enrolled.includes(c.code));

  const totalCredits = myCourses.reduce(
    (sum, c) => sum + Number(c.credits || 0),
    0
  );

  return (
    <>
      <h3>Academic Planner</h3>

      {/* SUMMARY */}
      <section className="kpi-grid">
        <div className="kpi-card glow-card">
          <span>Courses</span>
          <strong>{myCourses.length}</strong>
        </div>

        <div className="kpi-card glow-card">
          <span>Total Credits</span>
          <strong>{totalCredits}</strong>
        </div>

        <div className="kpi-card glow-card">
          <span>Status</span>
          <strong>{totalCredits > 20 ? "Heavy Load" : "Balanced"}</strong>
        </div>
      </section>

      {/* COURSES */}
      <section className="section">
        <h3>My Plan</h3>

        <div className="cards">
          {myCourses.map((c, i) => (
            <div key={i} className="card-glass">
              <h4>{c.name}</h4>
              <p>{c.code}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}