import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./Firebase";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Register.module.css"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successfully", {
        position: "bottom-right",
        autoClose: 3000,
      });
      setEmail("");
      setPassword("");
      setTimeout(() => navigate("/App"), 3000);
    } catch {
      toast.error("Login Failed. Please check credentials.", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <ToastContainer />
      <div className={styles.loginCard}>
        <h2 className={styles.loginTitle}>Welcome Back</h2>
        <p className={styles.loginSubtitle}>Login to continue shopping</p>
        <form onSubmit={handleLogin} className={styles.loginForm}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
        <p className={styles.loginFooter}>
          Don’t have an account?{" "}
          <Link to="/register" className={styles.loginLink}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
