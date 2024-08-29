import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="bg-custom-image bg-cover bg-center h-screen ">
      <Navbar />
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  );
};

export default App;
