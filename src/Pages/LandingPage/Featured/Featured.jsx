import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/open.png";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed  text-white py-10">
      <SectionTitle
        subHeading={"check it out"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-50 py-20 px-36">
        <div className="md:w-1/2">
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10 md:w-1/2">
          <p>may 20 2025</p>
          <p>What we gonna do</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            modi est reprehenderit totam inventore ipsum quos nostrum maxime ex
            officia excepturi quo corrupti, distinctio, aliquam perferendis
            accusamus, alias quis quibusdam deserunt sint a facere magnam porro!
            Corrupti, ipsa?
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
