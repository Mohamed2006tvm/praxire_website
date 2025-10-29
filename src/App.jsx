import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Components/HomePage";
import ServicePage from "./Components/ServicePage";
import ContactPage from "./Components/ContactPage";
import Preloader from "./Components/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 2-second loading time
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Service" element={<ServicePage />} />
            <Route path="/Contact" element={<ContactPage />} />
          </Routes>
        </Router>
      )}
    </div>
  );
};

export default App;
