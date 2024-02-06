import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import ReactDOM from "react-dom";
import TopBar from "./TopBar.tsx";
import App from "./App.tsx";
import About from "./About.tsx";
import Events from "./Events.tsx";

ReactDOM.render(
  <React.StrictMode>
    <TopBar />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
