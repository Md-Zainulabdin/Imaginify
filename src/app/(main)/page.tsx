import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
