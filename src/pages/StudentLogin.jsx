import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function StudentLogin() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (id === "student" && password === "123") {
      localStorage.setItem("role", "student");
      navigate("/student");
    } else {
      alert("Invalid student credentials");
    }
  }

  return (
    <div className="futuristic-bg fade-in">
      <form className="login-card glow" onSubmit={handleLogin}>
        <h2>Student Login</h2>

        <input placeholder="Student ID" value={id} onChange={(e) => setId(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button className="btn-glow">Login</button>

        <p className="login-switch">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}