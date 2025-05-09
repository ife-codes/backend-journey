import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Boxes from "../components/Boxes";
import { supabase } from "../config/supabaseClient";
import { getCurrentUser } from "../components/getCurrentUser";
const Home = () => {
  const [total, setTotal] = useState(0);
  const [recent, setRecent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("")

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

      return count;
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
      const getMail = await getCurrentUser(session)

      setTotal(count);
      setRecent(count2);
      setLoading(false);
      setEmail(getMail)
    };

    getData();
  }, []);

  if (loading) {
    return <main className="main">loading your data...</main>;
  }
  return (
    <main className="main">
      <Header email={email} />
      <Boxes total={total} recent={recent} />
    </main>
  );
};

export default Home;
