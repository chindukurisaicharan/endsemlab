import { useEffect, useState } from "react";

export default function MyCourses() {
  const [courses, setCourses] = useState([]);
  const [enrolled, setEnrolled] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    id: "",
    semester: "",
    agree: false
  });

  useEffect(() => {
    setCourses(JSON.parse(localStorage.getItem("courses")) || []);
    setEnrolled(JSON.parse(localStorage.getItem("enrolled")) || []);
  }, []);

  function updateEnroll(data) {
    localStorage.setItem("enrolled", JSON.stringify(data));
    setEnrolled(data);
  }

  /* ===== OPEN FORM ===== */
  function openEnroll(course) {
    setSelectedCourse(course);
  }

  /* ===== SUBMIT ===== */
  function submitEnroll() {
    if (!form.name || !form.id || !form.semester || !form.agree) {
      setMessage("Fill all fields!");
      return;
    }

    if (enrolled.includes(selectedCourse.code)) {
      setMessage("Already enrolled!");
      return;
    }

    const updated = [...enrolled, selectedCourse.code];
    updateEnroll(updated);

    setMessage("Enrolled successfully!");
    setSelectedCourse(null);

    setForm({
      name: "",
      id: "",
      semester: "",
      agree: false
    });
  }

  /* ===== DROP ===== */
  function drop(course) {
    const updated = enrolled.filter((c) => c !== course.code);
    updateEnroll(updated);
    setMessage("Course dropped!");
  }

  return (
    <>
      <h3>Course Portal</h3>

      {/* MESSAGE */}
      {message && <div className="msg">{message}</div>}

      {/* ===== COURSE LIST ===== */}
      <div className="cards">
        {courses.map((c, i) => (
          <div key={i} className="card-glass course-card">

            <div>
              <h4>{c.name}</h4>
              <p>{c.code}</p>
              <p>Credits: {c.credits}</p>
            </div>

            {enrolled.includes(c.code) ? (
              <button className="btn-glow" onClick={() => drop(c)}>
                Drop
              </button>
            ) : (
              <button className="btn-glow" onClick={() => openEnroll(c)}>
                Enroll
              </button>
            )}
          </div>
        ))}
      </div>

      {/* ENROLL FORM  */}
      {selectedCourse && (
        <div className="section form-popup fade-in">
          <h4>Enroll in {selectedCourse.name}</h4>

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
              placeholder="Semester"
              value={form.semester}
              onChange={(e) =>
                setForm({ ...form, semester: e.target.value })
              }
            />
          </div>

          <label className="checkbox">
            <input
              type="checkbox"
              checked={form.agree}
              onChange={(e) =>
                setForm({ ...form, agree: e.target.checked })
              }
            />
            I confirm enrollment
          </label>

          <div className="form-actions">
            <button className="btn-glow" onClick={submitEnroll}>
              Submit
            </button>

            <button
              className="btn-glass"
              onClick={() => setSelectedCourse(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}