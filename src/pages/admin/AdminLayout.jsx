import { useNavigate, Outlet } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("role");
    navigate("/");
  }

  return (
    <div className="workspace">

      {/* SIDEBAR */}
      <aside className="sidebar futuristic">
        <h1 className="logo">Admin Control</h1>

        <nav className="nav">
          <div className="nav-link" onClick={() => navigate("/admin")}>
            🏠 Overview
          </div>

          <div className="nav-link" onClick={() => navigate("/admin/courses")}>
            📚 Courses
          </div>

          <div className="nav-link" onClick={() => navigate("/admin/students")}>
            👩‍🎓 Students
          </div>

          <div className="nav-link" onClick={() => navigate("/admin/analytics")}>
            📊 Analytics
          </div>

          <div className="nav-link" onClick={() => navigate("/admin/settings")}>
            ⚙️ Settings
          </div>
        </nav>
      </aside>

      {/* MAIN */}
      <div className="content">

        {/* HEADER */}
        <header className="topbar futuristic hero">
          <h2>Administrator Command Center</h2>
          <button className="btn-glow" onClick={logout}>
            Logout
          </button>
        </header>

        {/* 🔥 ONLY THIS — NO AdminDashboard HERE */}
        <div className="page-content fade-in">
          <Outlet />
        </div>
      </div>
    </div>
  );
}