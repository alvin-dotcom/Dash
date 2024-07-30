import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Dash from "./components/Dash";

function App() {
  return (
    <>
      <Navbar />
      <Router>
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
