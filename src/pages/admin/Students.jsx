import { useState, useEffect } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [mode, setMode] = useState("");

  const [form, setForm] = useState({
    name: "",
    id: "",
    department: ""
  });

  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  /* LOAD */
  useEffect(() => {
    setStudents(JSON.parse(localStorage.getItem("students")) || []);
    setCourses(JSON.parse(localStorage.getItem("courses")) || []);
  }, []);

  function save(data) {
    localStorage.setItem("students", JSON.stringify(data));
    setStudents(data);
  }

  /* ADD STUDENT */
  function addStudent() {
    if (!form.name || !form.id) return;

    const newStudent = {
      ...form,
      courses: []
    };

    save([...students, newStudent]);

    setForm({ name: "", id: "", department: "" });
    setMode("view");
  }

  /* DELETE */
  function deleteStudent(i) {
    save(students.filter((_, idx) => idx !== i));
  }

  /* ASSIGN COURSE */
  function assignCourse() {
    const updated = students.map((s) => {
      if (s.id === selectedStudent) {
        return {
          ...s,
          courses: [...s.courses, selectedCourse]
        };
      }
      return s;
    });

    save(updated);
    setSelectedCourse("");
  }

  return (
    <>
      <h3>Student Management</h3>

      {/* ACTIONS */}
      <div className="cards">
        <div className="card-glass" onClick={() => setMode("add")}>
          ➕ Add Student
        </div>

        <div className="card-glass" onClick={() => setMode("view")}>
          👩‍🎓 View Students
        </div>

        <div className="card-glass" onClick={() => setMode("assign")}>
          📚 Assign Courses
        </div>
      </div>

      {/* ===== ADD ===== */}
      {mode === "add" && (
        <div className="section fade-in">
          <h4>Add Student</h4>

          <div className="form-grid">
            <input
              placeholder="Student Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              placeholder="Student ID"
              value={form.id}
              onChange={(e) =>
                setForm({ ...form, id: e.target.value })
              }
            />

            <input
              placeholder="Department"
              value={form.department}
              onChange={(e) =>
                setForm({ ...form, department: e.target.value })
              }
            />
          </div>

          <button className="btn-glow" onClick={addStudent}>
            Add Student
          </button>
        </div>
      )}

      {/* ===== VIEW ===== */}
      {mode === "view" && (
        <div className="section fade-in">
          <h4>All Students</h4>

          <div className="cards">
            {students.map((s, i) => (
              <div key={i} className="card-glass student-card">

                <div>
                  <h4>{s.name}</h4>
                  <p>ID: {s.id}</p>
                  <p>Dept: {s.department}</p>

                  {s.courses.length > 0 && (
                    <p>Courses: {s.courses.join(", ")}</p>
                  )}
                </div>

                <button
                  className="delete-btn"
                  onClick={() => deleteStudent(i)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===== ASSIGN ===== */}
      {mode === "assign" && (
        <div className="section fade-in">
          <h4>Assign Course to Student</h4>

          <select
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(e.target.value)}
          >
            <option value="">Select Student</option>
            {students.map((s, i) => (
              <option key={i} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>

          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value="">Select Course</option>
            {courses.map((c, i) => (
              <option key={i} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <button className="btn-glow" onClick={assignCourse}>
            Assign
          </button>
        </div>
      )}
    </>
  );
}