import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient"; // adjust path

const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });
  }, []);

  if (loading) return <main className="main">Loading...</main>;
  if (!user) return <Navigate to="/login" replace />;

  return children;
};

export default PrivateRoute;
