import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiNotebook } from "react-icons/gi";

const Card = ({ dest }) => {
  const handleClcik = (e) => {
    console.log(e);
  };

  console.log(dest);
  const { id, img, desTitle, Location, grade, fees, description } = dest;
  return (
    <div className="card bg-base-100 lg:ml-6 w-96 shadow-xl">
      <figure>
        <img className="" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{desTitle}</h2>
        <p className="flex items-center">
          <FaLocationDot />
          {Location}
        </p>
        <div className="divider"></div>
        <div className="flex justify-between">
          <p className="text-xl">{grade}</p>
          <div>
            <p className="text-2xl">${fees}</p>
          </div>
        </div>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleClcik(dest)}
            className="btn btn-primary flex items-center"
          >
            <p className="text-xl flex items-center gap-1">
              <GiNotebook />
              Details
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
