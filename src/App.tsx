import React from "react";
import Creations from "./components/creations/Creations";
import Description from "./components/description/Description";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Description />
      <Creations />
      <Footer />
    </div>
  );
}

export default App;
