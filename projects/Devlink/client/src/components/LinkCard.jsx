import React from "react";

const LinkCard = ({ title, link, key }) => {
  return (
    <div className="link-card" key={key}>
      <h3>{title.substring(0, 10) + "..."}</h3>
      <a href={link} target="_blank">
        {link.substring(0, 25) + "..."}
      </a>
      <div className="card-actions">
        <button className="edit-btn">Edit</button>
        <button className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default LinkCard;
