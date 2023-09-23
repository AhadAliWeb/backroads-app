import React from "react";
import Navbar from "./Components/navbar";
import Hero from "./Components/hero";
import About from "./Components/about";
import Services from "./Components/services";
import Tours from "./Components/tours";
import Footer from "./Components/footer";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </React.Fragment>
  );
}

export default App;
