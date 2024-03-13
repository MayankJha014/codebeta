import React from "react";
import Logo from "../assets/ice.png";

const CategoryComp = ({ Logo, Name, Description }) => {
  return (
    <div className="px-14 py-8 my-4 shadow-xl w-fit rounded-2xl text-center border border-black/5 hover:scale-110 duration-300 transition-all">
      <img src={Logo} alt="" className="w-24" />
      <p className="pt-4 font-semibold">{Name}</p>
      <p className=" text-sm my-1">{Description}</p>
    </div>
  );
};

export default CategoryComp;
