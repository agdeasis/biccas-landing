import React from "react";
import './index.css'
import './assets/scss/style.scss'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collabs from "./components/Collabs";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Collabs />
    </div>
  );
}

export default App;
