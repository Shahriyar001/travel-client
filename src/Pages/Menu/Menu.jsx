import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../assets/saint.png";
import seabeach from "../../assets/seabeach.jpg";
import PopularMenu from "../LandingPage/PopularMenu/PopularMenu";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const Seabeach = menu.filter((item) => item.category === "Seabeach");
  const Forest = menu.filter((item) => item.category === "Forest");
  const Island = menu.filter((item) => item.category === "Island");
  const HillTrack = menu.filter((item) => item.category === "Hill Track");
  const Historic = menu.filter((item) => item.category === "Historic");
  const Popular = menu.filter((item) => item.category === "Popular");
  return (
    <div>
      <Helmet>
        <title>Travel | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu" />
      {/* main cover  */}
      <SectionTitle subHeading={"Don't miss"} heading={"Our Popular Menu"} />
      {/* popular menu items  */}
      <MenuCategory items={Popular} />
      {/* seabeach  */}
      <MenuCategory items={Seabeach} title={"seabeach"} img={seabeach} />
      <MenuCategory
        items={Forest}
        title={"forest"}
        img={
          "https://plantlet.org/wp-content/uploads/2020/06/SAVE_20200617_160556.jpg"
        }
      />
      <MenuCategory
        items={Island}
        title={"island"}
        img={
          "https://e0.pxfuel.com/wallpapers/971/428/desktop-wallpaper-the-most-beautiful-tropical-island.jpg"
        }
      />
      <MenuCategory
        items={HillTrack}
        title={"hill Track"}
        img={
          "https://thumbs.dreamstime.com/b/murong-village-bangladesh-tribe-most-famous-th-largest-tribe-chittagong-hill-tracts-dwell-lama-ruma-alikadam-thanchi-67659273.jpg"
        }
      />
      <MenuCategory
        items={Historic}
        title={"historic"}
        img={
          "https://cms.booklogic.net/hotel-sliders/750/historical-places-of-beautiful-bangladesh-wallpaper.jpg"
        }
      />
    </div>
  );
};

export default Menu;
