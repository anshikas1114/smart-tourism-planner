import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import PlanTrip from "./pages/PlanTrip";
import TripResult from "./pages/TripResult";

function App() {
  return (
    <Router>
      <div>
        {/* Simple Navigation Bar */}
        <nav style={{ padding: "10px", background: "#f2f2f2" }}>
          <Link to="/" style={{ marginRight: "15px" }}>
            Home
          </Link>
          <Link to="/plan">Plan Trip</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan" element={<PlanTrip />} />
          <Route path="/result" element={<TripResult />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
