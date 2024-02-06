import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import ReactDOM from "react-dom";
import TopBar from "./components/TopBar.tsx";
import App from "./App.tsx";
import About from "./About.tsx";
import Events from "./Events.tsx";
import BottomBar from "./components/BottomBar.tsx";

ReactDOM.render(
  <React.StrictMode>
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <TopBar />
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </Router>
      </div>
      <BottomBar />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
