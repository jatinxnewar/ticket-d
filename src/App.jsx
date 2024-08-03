import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/login";
import Signup from "./components/signup";
import Features from "./components/Features";
import LoggedIn from "./components/LoggedIn";
import FeaturesLI from "./components/FeaturesLI";
import Community from "./components/Community";
import profile from "./components/profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/FeaturesLI" element={<FeaturesLI />} />
        <Route path="/LoggedIn" element={<LoggedIn />} />
        <Route path="/LoggeIn/profile" element={<profile />} />
        <Route path="/community" element={<Community />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
