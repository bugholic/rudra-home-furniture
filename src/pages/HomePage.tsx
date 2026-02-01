import React from "react";
import Hero from "../Components/Hero";
import ProductCategories from "../Components/ProductCategories";
import FeaturedDeals from "../Components/FeaturedDeals";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProductCategories />
      <FeaturedDeals />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;
