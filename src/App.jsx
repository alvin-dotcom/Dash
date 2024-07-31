import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Dash from "./components/Dash";
import Sidebar from "./components/Sidebar";
import StudentOperations from "./components/StudentOperations";
import HumanResources from "./components/HumanResources";
import Finance from "./components/Finance";
import Placements from "./components/Placements";
import StrategicProjects from "./components/StrategicProjects";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Footer />
            </>
          }
        />
            <Route path="/dashboard" element={<Dash />} />
            <Route path="/dashboard/student-operations" element={<StudentOperations />} />
            <Route path="/dashboard/human-resources" element={<HumanResources />} />
            <Route path="/dashboard/finance" element={<Finance />} />
            <Route path="/dashboard/placements" element={<Placements />} />
            <Route path="/dashboard/strategic-projects" element={<StrategicProjects />} />
          </Routes>
    </Router>
  );
}

export default App;
