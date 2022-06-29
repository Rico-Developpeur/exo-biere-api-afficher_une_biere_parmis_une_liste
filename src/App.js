import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import BiereDetail from "./components/BiereDetail";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* route à segment dynamique */}
          <Route path="/:beerId" element={<BiereDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
