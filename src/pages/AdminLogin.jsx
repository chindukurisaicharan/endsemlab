import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (email === "admin@uni.com" && password === "admin123") {
      localStorage.setItem("role", "admin");
      navigate("/admin");
    } else {
      alert("Invalid admin credentials");
    }
  }

  return (
    <div className="futuristic-bg fade-in">
      <form className="login-card glow" onSubmit={handleLogin}>
        <h2>Administrator Login</h2>

        <input placeholder="Admin Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button className="btn-glow">Login</button>

        <p className="login-switch">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}