import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import BlindMixers from "./pages/BlindMixers";
import UpcomingEvents from "./pages/UpcomingEvents";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/events" element={<UpcomingEvents />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blind-mixers" element={<BlindMixers />} />
      </Routes>
    </Router>
  );
}

export default App;
