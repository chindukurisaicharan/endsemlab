import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();

  const [role, setRole] = useState("student");
  const [form, setForm] = useState({
    name: "",
    email: "",
    studentId: "",
    password: "",
    confirmPassword: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSignup(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("Please fill all required fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (role === "student" && !form.studentId) {
      alert("Student ID is required");
      return;
    }

    alert("Account created successfully!");

    // redirect to appropriate login
    navigate(role === "admin" ? "/admin-login" : "/student-login");
  }

  return (
    <div className="futuristic-bg fade-in">
      <form className="login-card glow" onSubmit={handleSignup}>
        <h2>Create Account</h2>

        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        {/* Role selector */}
        <select
          className="select-field"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="student">Student</option>
          <option value="admin">Administrator</option>
        </select>

        {/* Student ID only for students */}
        {role === "student" && (
          <input
            name="studentId"
            placeholder="Student ID"
            value={form.studentId}
            onChange={handleChange}
          />
        )}

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <button className="btn-glow">Sign Up</button>

        {/* Login redirect */}
        <p className="login-switch">
          Already have an account?{" "}
          <Link to={role === "admin" ? "/admin-login" : "/student-login"}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}