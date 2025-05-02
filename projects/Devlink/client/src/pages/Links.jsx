import React from "react";
import Header from "../components/Header";

const Links = () => {
  return (
    <main className="main">
      <Header />
      <div class="links-container">
        <h2>Your Links</h2>

        <div class="link-card">
          <h3>GitHub</h3>
          <a href="https://github.com/yourusername" target="_blank">
            https://github.com/yourusername
          </a>
          <div class="card-actions">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
          </div>
        </div>

        <div class="link-card">
          <h3>Portfolio</h3>
          <a href="https://yourportfolio.com" target="_blank">
            https://yourportfolio.com
          </a>
          <div class="card-actions">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Links;
