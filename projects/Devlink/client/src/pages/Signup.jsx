import React, { useState } from "react";
import { supabase } from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null)

  const signupForm = async (e) => {
    e.preventDefault() 

    const { data: user, error } = await supabase.auth.signUp({
      email,
      password,
    });
    
    if (error) {
      setError(error.message)
    } else {
      window.location = "/"
    }
  };

  return (
    <main className="auth-main">
      <form className="form" onSubmit={signupForm}>
        <h2>Sign Up</h2>
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
          <button className="auth-btn">sign up</button>
          {error && <p>{error}</p>}
        </div>
      </form>
    </main>
  );
};

export default Signup;
