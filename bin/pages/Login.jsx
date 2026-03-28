import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function login(role) {
    localStorage.setItem("role", role);
    navigate(role === "admin" ? "/admin" : "/student");
  }

  return (
    <div className="auth-bg fade-in">
      <div className="glass-card auth-card role-card">
        <h2 className="auth-title">Academic Portal</h2>
        <p className="auth-sub">Select your role to continue</p>

        <div className="role-grid">
          <button className="role-btn admin" onClick={() => login("admin")}>
            Administrator
          </button>

          <button className="role-btn student" onClick={() => login("student")}>
            Student
          </button>
        </div>
      </div>
    </div>
  );
}