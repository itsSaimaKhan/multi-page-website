"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      className="hero h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/back1.jpg')" }}
    >
      <div className="pl-4 sm:pl-8 md:pl-16 text-white text-center sm:text-left">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-md"
          data-aos="fade-up"
        >
          Welcome to Watch World
        </h1>
        <p className="text-xl sm:text-2xl mt-4">
          Your one-stop shop for the best watches
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-950 hover:bg-blue-700 rounded-md font-bold text-sm sm:text-base">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HomeContent;
