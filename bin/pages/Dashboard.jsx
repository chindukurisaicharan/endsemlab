import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="futuristic-bg">
      <div className="portal-container fade-in">

        {/* HERO */}
        <h1 className="portal-title">Academic Course Portal</h1>
        <p className="portal-sub">
          Plan smarter. Track progress. Graduate with confidence.
        </p>

        {/* LOGIN CTA */}
        <div className="cta-container">
          <button
            className="cta-button admin"
            onClick={() => navigate("/admin-login")}
          >
            Administrator Login
          </button>

          <button
            className="cta-button student"
            onClick={() => navigate("/student-login")}
          >
            Student Login
          </button>
        </div>

        {/* FEATURES */}
        <section className="landing-section">
          <h3 className="section-title">Platform Features</h3>
          <div className="feature-grid">
            <div className="feature-card glow-card">📅 Semester Planning</div>
            <div className="feature-card glow-card">📊 Credit Tracking</div>
            <div className="feature-card glow-card">⚡ Real-time Analytics</div>
            <div className="feature-card glow-card">🔐 Secure Access</div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="landing-section">
          <h3 className="section-title">Academic Timeline</h3>
          <div className="timeline">
            <div className="timeline-item pulse">Semester 1</div>
            <div className="timeline-item pulse">Semester 2</div>
            <div className="timeline-item pulse">Semester 3</div>
            <div className="timeline-item pulse">Graduation 🎓</div>
          </div>
        </section>

        {/* STATS */}
        <section className="landing-section">
          <h3 className="section-title">Platform Impact</h3>
          <div className="stats-grid">
            <div className="stat-box glow-card">👩‍🎓 10K+ Students</div>
            <div className="stat-box glow-card">📚 500+ Courses</div>
            <div className="stat-box glow-card">🏫 50+ Programs</div>
          </div>
        </section>

        <div className="landing-footer">© 2026 Academic Planner</div>
      </div>
    </div>
  );
}