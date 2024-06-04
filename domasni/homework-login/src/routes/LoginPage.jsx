import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("token", "super-secret-token123-semos");
    navigate("/");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
      <button className="secondary" onClick={handleSignUp}>
        Sign Up
      </button>
    </div>
  );
};

export default LoginPage;
