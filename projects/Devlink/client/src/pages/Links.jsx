import React from "react";
import Header from "../components/Header";
import LinkCard from "../components/LinkCard";

const Links = () => {
  const data = [
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
    {
      title: "Github",
      link: "https://github.io",
    },
  ];

  
  return (
    <main className="main">
      <Header />
      <div class="links-container">
        <h2>Your Links</h2>
        <div className="links">
          {data.map((item) => (
            <LinkCard title={item.title} link={item.link} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Links;
