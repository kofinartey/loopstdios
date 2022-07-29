import React from "react";
import Creations from "./components/creations/Creations";
import Description from "./components/description/Description";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Description />
      <Creations />
    </div>
  );
}

export default App;
