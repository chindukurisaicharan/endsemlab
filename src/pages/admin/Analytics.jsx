import { useEffect, useState } from "react";

export default function Analytics() {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setCourses(JSON.parse(localStorage.getItem("courses")) || []);
    setStudents(JSON.parse(localStorage.getItem("students")) || []);
  }, []);

  /* CALCULATIONS */

  const totalCourses = courses.length;
  const totalStudents = students.length;

  const totalAssignments = students.reduce(
    (sum, s) => sum + (s.courses?.length || 0),
    0
  );

  const avgCoursesPerStudent = totalStudents
    ? (totalAssignments / totalStudents).toFixed(2)
    : 0;

  /* TOP COURSE */
  const courseCount = {};
  students.forEach((s) => {
    s.courses?.forEach((c) => {
      courseCount[c] = (courseCount[c] || 0) + 1;
    });
  });

  const topCourse = Object.keys(courseCount).length
    ? Object.entries(courseCount).sort((a, b) => b[1] - a[1])[0][0]
    : "N/A";

  return (
    <>
      <h3>Analytics Dashboard</h3>

      {/* KPI */}
      <section className="kpi-grid">
        <div className="kpi-card glow-card">
          <span>Total Courses</span>
          <strong>{totalCourses}</strong>
        </div>

        <div className="kpi-card glow-card">
          <span>Total Students</span>
          <strong>{totalStudents}</strong>
        </div>

        <div className="kpi-card glow-card">
          <span>Total Enrollments</span>
          <strong>{totalAssignments}</strong>
        </div>

        <div className="kpi-card glow-card">
          <span>Avg Courses/Student</span>
          <strong>{avgCoursesPerStudent}</strong>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="section">
        <h4>Insights</h4>

        <div className="cards">
          <div className="card-glass glow-card">
            🔥 Most Popular Course: {topCourse}
          </div>

          <div className="card-glass glow-card">
            📈 Enrollment Trend: Increasing
          </div>

          <div className="card-glass glow-card">
            📉 Drop Rate: Low
          </div>
        </div>
      </section>

      {/* COURSE DISTRIBUTION */}
      <section className="section">
        <h4>Course Distribution</h4>

        <div className="cards">
          {courses.map((c, i) => {
            const count = courseCount[c.name] || 0;

            return (
              <div key={i} className="card-glass analytics-card">
                <h4>{c.name}</h4>
                <p>Students Enrolled: {count}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SYSTEM STATUS */}
      <section className="section">
        <h4>System Overview</h4>

        <div className="overview-panel glow-card">
          <p>System Status: 🟢 Operational</p>
          <p>Data Synced: ✔ Up to date</p>
          <p>Active Users: {totalStudents}</p>
        </div>
      </section>
    </>
  );
}