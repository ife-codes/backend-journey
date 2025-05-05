import React from "react";

const Signup = () => {
  return (
    <main className="auth-main">
      <form className="form">
        <h2>Sign Up</h2>
        <div className="inputs">
          <div className="email-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Please enter an email"
              name="email"
              required
            />
          </div>
          <div className="password-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Please enter a password"
              name="password"
              required
            />
          </div>
        </div>
      </form>
    </main>
  );
};

export default Signup;
