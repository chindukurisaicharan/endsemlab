import { useState, useEffect } from "react";

export default function Settings() {
  const [theme, setTheme] = useState("dark");
  const [animations, setAnimations] = useState(true);

  /* ===== LOAD SETTINGS ===== */
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    const savedAnim = localStorage.getItem("animations") !== "false";

    setTheme(savedTheme);
    setAnimations(savedAnim);

    applyTheme(savedTheme);
  }, []);

  /* ===== APPLY THEME ===== */
  function applyTheme(mode) {
    if (mode === "light") {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }

  /* ===== TOGGLE THEME ===== */
  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  }

  /* ===== TOGGLE ANIMATIONS ===== */
  function toggleAnimations() {
    const newValue = !animations;

    setAnimations(newValue);
    localStorage.setItem("animations", newValue);

    alert(newValue ? "Animations Enabled 🎬" : "Animations Disabled ⛔");
  }

  /* ===== RESET SYSTEM ===== */
  function resetSystem() {
    if (!window.confirm("Are you sure? This will delete all data.")) return;

    localStorage.removeItem("courses");
    localStorage.removeItem("students");

    alert("System reset successfully!");
    window.location.reload();
  }

  return (
    <>
      <h3>System Settings</h3>

      {/* ===== GENERAL ===== */}
      <section className="section">
        <h4>General</h4>

        <div className="cards">
          <div className="card-glass setting-card" onClick={toggleTheme}>
            🌗 Toggle Theme ({theme.toUpperCase()})
          </div>

          <div className="card-glass setting-card" onClick={toggleAnimations}>
            🎬 Animations ({animations ? "ON" : "OFF"})
          </div>
        </div>
      </section>

      {/* ===== SYSTEM CONTROL ===== */}
      <section className="section">
        <h4>System Control</h4>

        <div className="cards">
          <div className="card-glass danger-card" onClick={resetSystem}>
            ⚠️ Reset All Data
          </div>
        </div>
      </section>

      {/* ===== ADMIN INFO ===== */}
      <section className="section">
        <h4>Admin Info</h4>

        <div className="overview-panel glow-card">
          <p>Role: Administrator</p>
          <p>Access Level: Full</p>
          <p>System Version: v1.0</p>
          <p>Theme: {theme}</p>
        </div>
      </section>

      {/* ===== ADVANCED ===== */}
      <section className="section">
        <h4>Advanced</h4>

        <div className="cards">
          <div
            className="card-glass"
            onClick={() => alert("Logs cleared 🧹")}
          >
            🧹 Clear Logs
          </div>

          <div
            className="card-glass"
            onClick={() => alert("System refreshed 🔄")}
          >
            🔄 Refresh System
          </div>
        </div>
      </section>
    </>
  );
}