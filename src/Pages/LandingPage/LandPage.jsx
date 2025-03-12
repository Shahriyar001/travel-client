import React from "react";
import Home from "../../Components/Home/Home";
import Category from "../../Components/Category/Category";
import Ways from "../../Components/Ways/Ways";
import MainSection from "../../Components/Main/MainSection";
import PopularMenu from "./PopularMenu/PopularMenu";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";

const LandPage = () => {
  return (
    <div>
      <Home />
      <Category />
      <Ways />
      <PopularMenu />
      <MainSection />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default LandPage;
