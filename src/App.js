import React from "react";
import './index.css'
import './assets/scss/style.scss'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collabs from "./components/Collabs";
import Support from "./components/Support";
import Features from "./components/Features";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Collabs />
        <Support />
        <Features />
    </div>
  );
}

export default App;
