import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import LinkCard from "../components/LinkCard";
import { supabase } from "../config/supabaseClient";
import { getCurrentUser } from "../components/getCurrentUser";

const Links = () => {
  const [links, setLinks] = useState([]);
  const [email, setEmail] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLink = async (token) => {
    const res = await fetch("http://localhost:3000/links", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw Error("Failed to fetch links");
    }

    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const getLinks = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      const token = session?.access_token;
      try {
        const data = await fetchLink(token);
        const getMail = await getCurrentUser(session)
        setLinks(data);
        setEmail(getMail)
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false)
      }
    };

    getLinks();
  }, []);

  if (loading) {
    return (
      <main className="main">
        loading your links...
      </main>
    )
  }

  

  return (
    <main className="main">
      <Header email={email} />
      <div className="links-container">
        <h2>Your Links</h2>
        <div className="links">
          {links.length !== 0 ? (
            links.map((item) => (
              <LinkCard title={item.title} key={item.id} link={item.url} />
            ))
          ) : (
            <p>Your links are empty.</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Links;
