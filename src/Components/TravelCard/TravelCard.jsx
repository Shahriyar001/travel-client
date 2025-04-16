import React from "react";

const TravelCard = ({ item }) => {
  const { img, fees, desTitle, description } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="h-[250px] overflow-hidden">
        <img src={img} alt="Shoes" className="h-full w-full object-cover" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 py-1 rounded-md bg-slate-900 text-white">
        {fees}
      </p>
      <div className="card-body">
        <h2 className="card-title">{desTitle}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{fees}</button>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
