import { useEffect, useState } from "react";

export default function Enrollments() {
  const [enrolled, setEnrolled] = useState([]);

  useEffect(() => {
    setEnrolled(JSON.parse(localStorage.getItem("enrolled")) || []);
  }, []);

  return (
    <div>
      <h2>My Enrollments</h2>

      <div className="cards">
        {enrolled.length === 0 && (
          <div className="card-glass">No courses enrolled</div>
        )}

        {enrolled.map((course, i) => (
          <div key={i} className="card-glass">
            {course.name || course}
          </div>
        ))}
      </div>
    </div>
  );
}