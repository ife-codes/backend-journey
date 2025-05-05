import { useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Aside from "./components/Aside";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NewLink from "./pages/NewLink";
import Links from "./pages/Links";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  const [count, setCount] = useState(0);

  const location = useLocation();
  const hideAside =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideAside && <Aside />}
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/links"
          element={
            <PrivateRoute>
              <Links />
            </PrivateRoute>
          }
        />
        <Route
          path="/links/:id"
          element={
            <PrivateRoute>
              <Details />
            </PrivateRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/create"
          element={
            <PrivateRoute>
              <NewLink />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
