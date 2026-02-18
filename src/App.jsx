import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Partners from "./pages/Partners"; // Import the new page
import Contact from "./pages/Contact";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import SolutionDetail from "./pages/SolutionDetail";
import ScrollToTop from "./utils/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <ScrollToTop />
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partners" element={<Partners />} /> {/* Added route */}
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/solutions/:id" element={<SolutionDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
