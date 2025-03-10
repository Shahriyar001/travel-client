import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/open.png";

const Featured = () => {
  return (
    <div className="featured-item">
      <SectionTitle
        subHeading={"check it out"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center py-8 px-16">
        <div className="w-1/2">
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10 w-1/2">
          <p>may 20 2025</p>
          <p>What we gonna do</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            modi est reprehenderit totam inventore ipsum quos nostrum maxime ex
            officia excepturi quo corrupti, distinctio, aliquam perferendis
            accusamus, alias quis quibusdam deserunt sint a facere magnam porro!
            Corrupti, ipsa?
          </p>
          <button className="btn btn-outline">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
