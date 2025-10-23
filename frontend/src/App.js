import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import BlindMixers from "./pages/BlindMixers";
import UpcomingEvents from "./pages/UpcomingEvents";
import CustomCursor from "./components/ui/CustomCursor";

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <CustomCursor />
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
