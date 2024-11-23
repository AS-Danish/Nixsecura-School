import React from "react";
import Header from "./components/Header";
import Hero from "./components/Home";
import About from "./components/About";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="font-sans bg-gray-100 overflow-x-hidden">
      <Header/>
      <Hero/>
      <About/>
      <Features/>
      <Gallery/>
      <Login/>
    </div>
  );
};

export default App;
