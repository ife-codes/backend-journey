import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
      setLoading(false);
    });
  }, []);

  if (loading) return <main className="other-main">Loading...</main>;
  if (user) return <Navigate to="/" replace />;

  return children;
};

export default PublicRoute;
