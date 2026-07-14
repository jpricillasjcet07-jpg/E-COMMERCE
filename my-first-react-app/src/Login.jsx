import React, { useState } from "react";
import API from "./api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      if (typeof res.data === "string" && res.data.includes(".")) {
        localStorage.setItem("token", res.data);
        navigate("/products");
      } else {
        setError(res.data);
      }
    } catch (err) {
      setError("Login failed. Check your credentials.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f5f5f5" }}>
      <form onSubmit={handleLogin} style={{ backgroundColor: "#fff", padding: "40px", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)", width: "320px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>

        {error && <p style={{ color: "red", fontSize: "14px", textAlign: "center" }}>{error}</p>}

        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required
          style={{ width: "100%", padding: "10px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "6px", boxSizing: "border-box" }} />

        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required
          style={{ width: "100%", padding: "10px", marginBottom: "20px", border: "1px solid #ccc", borderRadius: "6px", boxSizing: "border-box" }} />

        <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#2a9d8f", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "16px" }}>
          Login
        </button>

        <p style={{ textAlign: "center", marginTop: "15px", fontSize: "14px" }}>
          NEW USER <a href="/register">SIGN IN</a>
        </p>
      </form>
    </div>
  );
}

export default Login;