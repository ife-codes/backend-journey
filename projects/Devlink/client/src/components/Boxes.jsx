import React, { useEffect, useState } from "react";
import LinkCard from "./LinkCard";
import { supabase } from "../config/supabaseClient";

const Boxes = () => {
  const [total, setTotal] = useState(0);
  const [recent, setRecent] = useState(0);
  const [loading, setLoading] = useState(true)

  const data = [
    {
      id: 1,
      title: "Total links",
      num: total,
    },
    {
      id: 2,
      title: "Links created today",
      num: recent,
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

  const total_posts = async (token) => {
    try {
      const data = await fetch("http://localhost:3000/links/stats/total", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const countJson = await data.json();
      const count = countJson.count;

      return count
    } catch (error) {
      console.log(error);
    }
  };

  const recent_posts = async (token) => {
    try {
      const data = await fetch("http://localhost:3000/links/stats/today", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const countJson = await data.json();
      const count = countJson.count;

      return count
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      const token = session?.access_token;
      const count = await total_posts(token);
      const count2 = await recent_posts(token);

      setTotal(count)
      setRecent(count2)
      setLoading(false)
    };

    getData();
  }, []);

  if (loading) {
    return (
      <main>loading your data...</main>
    )
  }
  
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
