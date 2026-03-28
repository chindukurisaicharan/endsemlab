import { useNavigate, Outlet, useLocation } from "react-router-dom";

export default function StudentLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  function logout() {
    localStorage.removeItem("role");
    navigate("/");
  }

  return (
    <div className="workspace">

      {/* SIDEBAR */}
      <aside className="sidebar futuristic">
        <h1 className="logo">Student Hub</h1>

        <nav className="nav">

          <div
            className={`nav-link ${location.pathname === "/student" ? "active" : ""}`}
            onClick={() => navigate("/student")}
          >
            🏠 Dashboard
          </div>

          <div
            className={`nav-link ${location.pathname === "/student/courses" ? "active" : ""}`}
            onClick={() => navigate("/student/courses")}
          >
            📚 Courses
          </div>

          <div
            className={`nav-link ${location.pathname === "/student/planner" ? "active" : ""}`}
            onClick={() => navigate("/student/planner")}
          >
            🗂 Planner
          </div>

          <div
            className={`nav-link ${location.pathname === "/student/progress" ? "active" : ""}`}
            onClick={() => navigate("/student/progress")}
          >
            📈 Progress
          </div>

          <div
            className={`nav-link ${location.pathname === "/student/enrollments" ? "active" : ""}`}
            onClick={() => navigate("/student/enrollments")}
          >
            🎓 My Enrollments
          </div>

          <div
            className={`nav-link ${location.pathname === "/student/timetable" ? "active" : ""}`}
            onClick={() => navigate("/student/timetable")}
          >
            🕒 Timetable
          </div>

          <div
            className={`nav-link ${location.pathname === "/student/summary" ? "active" : ""}`}
            onClick={() => navigate("/student/summary")}
          >
            📊 Summary
          </div>

          <div
            className={`nav-link ${location.pathname === "/student/notifications" ? "active" : ""}`}
            onClick={() => navigate("/student/notifications")}
          >
            🔔 Notifications
          </div>

          <div
            className={`nav-link ${location.pathname === "/student/settings" ? "active" : ""}`}
            onClick={() => navigate("/student/settings")}
          >
            ⚙️ Settings
          </div>

        </nav>
      </aside>

      {/* MAIN */}
      <div className="content">

        <header className="topbar futuristic hero">
          <h2>Student Command Center</h2>
          <button className="btn-glow" onClick={logout}>
            Logout
          </button>
        </header>

        <div className="page-content fade-page">
          <Outlet />
        </div>

      </div>
    </div>
  );
}