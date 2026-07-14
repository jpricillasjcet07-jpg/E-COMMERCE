import React, { useState } from "react";
import API from "./api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", { name, email, password });
      setMessage(res.data);
      setTimeout(() => navigate("/products"), 1000);
    } catch (err) {
      setMessage("Registration failed. Try a different email.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f5f5f5" }}>
      <form onSubmit={handleRegister} style={{ backgroundColor: "#fff", padding: "40px", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)", width: "320px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Create Account</h2>

        {message && <p style={{ color: "#2a9d8f", fontSize: "14px", textAlign: "center" }}>{message}</p>}

        <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required
          style={{ width: "100%", padding: "10px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "6px", boxSizing: "border-box" }} />

        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required
          style={{ width: "100%", padding: "10px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "6px", boxSizing: "border-box" }} />

        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required
          style={{ width: "100%", padding: "10px", marginBottom: "20px", border: "1px solid #ccc", borderRadius: "6px", boxSizing: "border-box" }} />

        <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#2a9d8f", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "16px" }}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;