import { useState, useEffect } from "react";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [mode, setMode] = useState("");

  const [form, setForm] = useState({
    name: "",
    code: "",
    credits: "",
    semester: ""
  });

  const [selectedCourse, setSelectedCourse] = useState("");
  const [prereq, setPrereq] = useState("");

  /* LOAD */
  useEffect(() => {
    setCourses(JSON.parse(localStorage.getItem("courses")) || []);
  }, []);

  function save(data) {
    localStorage.setItem("courses", JSON.stringify(data));
    setCourses(data);
  }

  /* ADD COURSE */
  function addCourse() {
    if (!form.name || !form.code) return;

    const newCourse = {
      ...form,
      prerequisites: []
    };

    save([...courses, newCourse]);

    setForm({ name: "", code: "", credits: "", semester: "" });
    setMode("view");
  }

  /* DELETE */
  function deleteCourse(i) {
    save(courses.filter((_, idx) => idx !== i));
  }

  /* ADD PREREQUISITE */
  function addPrerequisite() {
    const updated = courses.map((c) => {
      if (c.code === selectedCourse) {
        return {
          ...c,
          prerequisites: [...c.prerequisites, prereq]
        };
      }
      return c;
    });

    save(updated);
    setPrereq("");
  }

  return (
    <>
      <h3>Course Management</h3>

      {/* ACTION CARDS */}
      <div className="cards">
        <div className="card-glass" onClick={() => setMode("add")}>
          ➕ Add Course
        </div>

        <div className="card-glass" onClick={() => setMode("view")}>
          📂 View Courses
        </div>

        <div className="card-glass" onClick={() => setMode("prereq")}>
          🧩 Assign Prerequisites
        </div>
      </div>

      {/* ===== ADD COURSE ===== */}
      {mode === "add" && (
        <div className="section fade-in">
          <h4>Add New Course</h4>

          <div className="form-grid">
            <input
              placeholder="Course Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              placeholder="Course Code"
              value={form.code}
              onChange={(e) =>
                setForm({ ...form, code: e.target.value })
              }
            />

            <input
              placeholder="Credits"
              value={form.credits}
              onChange={(e) =>
                setForm({ ...form, credits: e.target.value })
              }
            />

            <input
              placeholder="Semester"
              value={form.semester}
              onChange={(e) =>
                setForm({ ...form, semester: e.target.value })
              }
            />
          </div>

          <button className="btn-glow" onClick={addCourse}>
            Add Course
          </button>
        </div>
      )}

      {/* ===== VIEW COURSES ===== */}
      {mode === "view" && (
        <div className="section fade-in">
          <h4>All Courses</h4>

          <div className="cards">
            {courses.map((c, i) => (
              <div key={i} className="card-glass course-card">

                <div>
                  <h4>{c.name}</h4>
                  <p>Code: {c.code}</p>
                  <p>Credits: {c.credits}</p>
                  <p>Semester: {c.semester}</p>

                  {c.prerequisites.length > 0 && (
                    <p>
                      Prerequisites: {c.prerequisites.join(", ")}
                    </p>
                  )}
                </div>

                <button
                  className="delete-btn"
                  onClick={() => deleteCourse(i)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===== PREREQUISITES ===== */}
      {mode === "prereq" && (
        <div className="section fade-in">
          <h4>Assign Prerequisites</h4>

          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="">Select Course</option>
            {courses.map((c, i) => (
              <option key={i} value={c.code}>
                {c.name}
              </option>
            ))}
          </select>

          <select
            value={prereq}
            onChange={(e) => setPrereq(e.target.value)}
          >
            <option value="">Select Prerequisite</option>
            {courses.map((c, i) => (
              <option key={i} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <button className="btn-glow" onClick={addPrerequisite}>
            Add Prerequisite
          </button>
        </div>
      )}
    </>
  );
}