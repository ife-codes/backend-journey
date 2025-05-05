import React, { useState } from "react";
import { supabase } from "../config/supabaseClient";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const loginForm = async (e) => {
    e.preventDefault();

    const { data: user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      window.location = "/";
    }
  };
  return (
    <main className="auth-main">
      <form className="form"  onSubmit={loginForm}>
        <h2>Log In</h2>
        <div className="inputs">
          <div className="email-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Please enter an email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="password-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Please enter a password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="auth-btn">Log in</button>
          {error && <p>{error}</p>}
        </div>
      </form>
    </main>
  );
};

export default Login;
