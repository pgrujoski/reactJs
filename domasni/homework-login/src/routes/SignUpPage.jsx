import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    if (username && password) {
      localStorage.setItem("token", "super-secret-token123-semos");
      navigate("/");
    } else {
      alert("Please enter a username and password.");
    }
  };

  const handleBackToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
      <button className="secondary" onClick={handleBackToLogin}>
        Back to Login
      </button>
    </div>
  );
};

export default SignUpPage;
