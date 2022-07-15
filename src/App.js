import React from "react";
import './index.css'
import './assets/scss/style.scss'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collabs from "./components/Collabs";
import Support from "./components/Support";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Collabs />
        <Support />
    </div>
  );
}

export default App;
