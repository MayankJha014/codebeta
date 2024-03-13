// import React from "react";
const Service = ({ serviceImg, serviceName, description }) => {
  return (
    <div className="rounded-xl flex flex-col items-center w-[200px] h-[220px] shadow-xl px-6 py-8 bg-white gap-4">
      <img src={serviceImg} alt={serviceName} className="w-11" />
      <h3 className=" text-[#5FE26C] font-semibold ">{serviceName}</h3>
      <p
        className="text-sm leading-1 text-[#90BD95] text-center"
        style={{ lineHeight: "19px" }}
      >
        {description}
      </p>
    </div>
  );
};

export default Service;
