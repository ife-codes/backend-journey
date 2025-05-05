import React from "react";
import LinkCard from "./LinkCard";

const Boxes = () => {
  const data = [
    {
      id: 1,
      title: "Total links",
      num: 10,
    },
    {
      id: 2,
      title: "Links created today",
      num: 2,
    },
  ];

  const links = [
    {
      title: "Github",
      link: "https://github.io",
    },
    {
      title: "Github",
      link: "https://github.io",
    },
    {
      title: "Github",
      link: "https://github.io",
    },
  ];
  return (
    <section>
      <div className="general">
        <h2>General stats</h2>
        <div className="general-stats">
          {data.map((item) => (
            <div key={item.id} className="box">
              <h4>{item.title}</h4>
              <p>{item.num}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="recent">
        <h2>Recent links</h2>
        <div className="recent-links">
          {links.map((item) => (
            <LinkCard title={item.title} link={item.link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Boxes;
