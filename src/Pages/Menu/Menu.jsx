import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../assets/saint.png";
import PopularMenu from "../LandingPage/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Travel | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu" />
      <PopularMenu />
      <Cover img={menuImg} title="our menu" />
      <PopularMenu />
      <Cover img={menuImg} title="our menu" />
      <PopularMenu />
      <Cover img={menuImg} title="our menu" />
      <PopularMenu />
    </div>
  );
};

export default Menu;
