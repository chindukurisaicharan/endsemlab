import { useState, useEffect } from "react";

export default function StudentSettings() {
  const [theme, setTheme] = useState("dark");
  const [animations, setAnimations] = useState(true);
  const [notifications, setNotifications] = useState(true);

  /* LOAD SETTINGS */
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    const savedAnim = localStorage.getItem("animations") !== "false";

    setTheme(savedTheme);
    setAnimations(savedAnim);

    applyTheme(savedTheme);
  }, []);

  /* APPLY THEME */
  function applyTheme(mode) {
    if (mode === "light") {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }

  /* TOGGLE THEME */
  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  }

  /* TOGGLE ANIMATIONS */
  function toggleAnimations() {
    const newValue = !animations;
    setAnimations(newValue);
    localStorage.setItem("animations", newValue);

    alert(newValue ? "Animations Enabled 🎬" : "Animations Disabled ⛔");
  }

  /* TOGGLE NOTIFICATIONS */
  function toggleNotifications() {
    setNotifications(!notifications);
  }

  /* RESET ENROLLED COURSES */
  function resetCourses() {
    if (!window.confirm("Clear all enrolled courses?")) return;

    localStorage.removeItem("enrolled");
    alert("Courses cleared!");
    window.location.reload();
  }

  return (
    <>
      <h3>Student Settings</h3>

      {/* ===== APPEARANCE ===== */}
      <section className="section">
        <h4>Appearance</h4>

        <div className="cards">
          <div className="card-glass setting-card" onClick={toggleTheme}>
            🌗 Theme: {theme.toUpperCase()}
          </div>

          <div className="card-glass setting-card" onClick={toggleAnimations}>
            🎬 Animations: {animations ? "ON" : "OFF"}
          </div>
        </div>
      </section>

      {/* ===== PREFERENCES ===== */}
      <section className="section">
        <h4>Preferences</h4>

        <div className="cards">
          <div className="card-glass" onClick={toggleNotifications}>
            🔔 Notifications: {notifications ? "ON" : "OFF"}
          </div>

          <div className="card-glass">
            🧠 Planner Mode: Smart
          </div>
        </div>
      </section>

      {/* ===== PROFILE ===== */}
      <section className="section">
        <h4>Profile</h4>

        <div className="overview-panel glow-card">
          <p>Name: Student User</p>
          <p>ID: 2025CS001</p>
          <p>Department: Computer Science</p>
          <p>Year: 3rd Year</p>
        </div>
      </section>

      {/* ===== ACTIONS ===== */}
      <section className="section">
        <h4>Actions</h4>

        <div className="cards">
          <div className="card-glass danger-card" onClick={resetCourses}>
            ⚠️ Reset Enrolled Courses
          </div>

          <div
            className="card-glass"
            onClick={() => alert("Planner refreshed")}
          >
            🔄 Refresh Planner
          </div>
        </div>
      </section>
    </>
  );
}