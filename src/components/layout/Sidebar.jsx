import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="sidebar-title">Academic Portal</h1>

      <nav>
        <NavLink to="/" className="nav-link">
          Dashboard
        </NavLink>
        <NavLink to="/planner" className="nav-link">
          Planner
        </NavLink>
        <NavLink to="/courses" className="nav-link">
          Courses
        </NavLink>
      </nav>
    </aside>
  );
}