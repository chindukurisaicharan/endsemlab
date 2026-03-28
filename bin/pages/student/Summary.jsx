import { useEffect, useState } from "react";

export default function Summary() {
  const [enrolled, setEnrolled] = useState([]);

  useEffect(() => {
    setEnrolled(JSON.parse(localStorage.getItem("enrolled")) || []);
  }, []);

  return (
    <div>
      <h2>Academic Summary</h2>

      <div className="kpi-grid">
        <div className="kpi-card">
          <span>Total Courses</span>
          <strong>{enrolled.length}</strong>
        </div>

        <div className="kpi-card">
          <span>Total Credits</span>
          <strong>{enrolled.length * 3}</strong>
        </div>

        <div className="kpi-card">
          <span>Status</span>
          <strong>Active</strong>
        </div>
      </div>
    </div>
  );
}