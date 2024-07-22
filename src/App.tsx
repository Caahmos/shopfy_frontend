import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Hero from "./components/layouts/Hero";
import Products from "./components/layouts/Products";
import TopProducts from "./components/layouts/TopProducts";
import AOS from "aos";
import "aos/dist/aos.css";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
    </>
  );
};

export default App;
