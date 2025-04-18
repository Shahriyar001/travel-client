import React from "react";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import Cover from "../../../Shared/Cover/Cover";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="py-10">
      {title && <Cover img={img} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        {items?.map((item) => (
          <MenuItem key={item.id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
