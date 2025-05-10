import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Boxes from "../components/Boxes";
import { supabase } from "../config/supabaseClient";
import { getCurrentUser } from "../components/getCurrentUser";
const Home = () => {
  const [total, setTotal] = useState(0);
  const [recent, setRecent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [recentLinks, setRecentLinks] = useState([]);

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

      return count;
    } catch (error) {
      console.log(error);
    }
  };

  const recent_links_count = async (token) => {
    try {
      const data = await fetch("http://localhost:3000/links/stats/today", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const countJson = await data.json();
      const count = countJson.count;

      return count;
    } catch (error) {
      console.log(error);
    }
  };

  const recent_links = async (token) => {
    try {
      const request = await fetch("http://localhost:3000/links/recent", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const response = await request.json();
      const recent = response.links;

      return recent;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        const token = session?.access_token;
        const count = await total_posts(token);
        const count2 = await recent_links_count(token);
        const getMail = await getCurrentUser(session);
        const getRecentLinks = await recent_links(token);

        setTotal(count);
        setRecent(count2);
        setEmail(getMail);
        setRecentLinks(getRecentLinks);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);


  if (loading) {
    return <main className="main">loading your data...</main>;
  }

  return (
    <main className="main">
      <Header email={email} />
      <Boxes total={total} recent={recent} recent_links={recentLinks} />
    </main>
  );
};

export default Home;
