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

function App() {
  const [count, setCount] = useState(0);

  const location = useLocation()
  const hideAside = location.pathname === "/login" || location.pathname === "/signup"

  return (
    <>
      {!hideAside && <Aside />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/links" element={<Links />} />
          <Route path="/links/:id" element={<Details />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<NewLink />} />
        </Routes>
    </>
  )
}

export default App;
