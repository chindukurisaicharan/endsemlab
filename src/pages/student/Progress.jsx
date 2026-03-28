import { useEffect, useState } from "react";

export default function Progress() {
  const [enrolled, setEnrolled] = useState([]);

  useEffect(() => {
    setEnrolled(JSON.parse(localStorage.getItem("enrolled")) || []);
  }, []);

  const credits = enrolled.length * 3;
  const progress = Math.min((credits / 24) * 100, 100);

  return (
    <div>
      <h2>Progress Tracker</h2>

      <div className="kpi-grid">
        <div className="kpi-card">
          <span>Credits Earned</span>
          <strong>{credits}</strong>
        </div>

        <div className="kpi-card">
          <span>Courses Completed</span>
          <strong>{enrolled.length}</strong>
        </div>

        <div className="kpi-card">
          <span>Progress</span>
          <strong>{progress.toFixed(0)}%</strong>
        </div>
      </div>

      <div className="section">
        <h3>Completion</h3>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}