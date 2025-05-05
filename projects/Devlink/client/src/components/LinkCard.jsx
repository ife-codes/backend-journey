import React from "react";

const LinkCard = ({title, link}) => {
  return (
    <div class="link-card">
      <h3>{title}</h3>
      <a href={link} target="_blank">
        {link}
      </a>
      <div class="card-actions">
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default LinkCard;
