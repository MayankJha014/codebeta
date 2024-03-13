import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PopularCategory from "../components/PopularCategory";
import SpecialDishes from "../components/SpecialDishes";
import FoodComp from "../components/FoodComp";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Story from "../components/Story";
import Copyright from "../components/Copyright";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PopularCategory />
      <SpecialDishes />

      <Testimonials />
      <Story />
      <Footer />
    </div>
  );
};

export default Home;
