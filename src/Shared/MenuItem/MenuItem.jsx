import React from "react";

const MenuItem = ({ item }) => {
  const { img, fees, desTitle, description } = item;
  return (
    <div className="flex space-x-2">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px]"
        src={img}
        alt="img"
      />
      <div>
        <h3 className="uppercase">{desTitle}---------</h3>
        <p>{description}</p>
      </div>
      <div>
        <p className="text-yellow-500">{fees}</p>
      </div>
    </div>
  );
};

export default MenuItem;
