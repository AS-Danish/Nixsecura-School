import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Home";
import About from "./components/About";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Apply from "./components/Apply";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import LoginForm from "./components/LoginForm";
import AdmissionForm from "./components/AdmissionForm";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <div className="font-sans bg-gray-100 overflow-x-hidden scroll-smooth">
        <Header />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Features />
              <Gallery />
              <Apply />
              <Testimonials />
              <Contact />
              <Footer />
            </>
          } />

          {/* Login Route */}
          <Route path="/login" element={<LoginForm />} />

          {/* Admission Form Route */}
          <Route path="/admission" element={<AdmissionForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
