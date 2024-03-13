import React from "react";
import Logo from "../assets/header.png";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center font-poppins w-4/5 mx-auto justify-evenly">
      <div className="py-5 ">
        <p className=" font-bold text-3xl tracking-wide py-5 max-w-[30rem]">
          Dive into Delights Of Delectable{" "}
          <span className="text-green-500">Food</span>
        </p>
        <p className=" font-normal py-3 max-w-[30rem]">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </p>
        <div className="flex mt-5 items-center">
          <button className="px-8 py-3 shadow-lg bg-green-500 hover:bg-green-700 duration-300 transition-colors rounded-full text-white font-semibold">
            Contact
          </button>
          <button className="px-6 py-2 font-semibold whitespace-nowrap  rounded-full text-black/70  cursor-pointer">
            Watch Video
          </button>
          <button className="shadow-lg px-4 py-4 rounded-full cursor-pointer">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5 11.4019C24.5 12.5566 24.5 15.4434 22.5 16.5981L4.49999 26.9904C2.49999 28.1451 -1.34201e-06 26.7017 -1.24107e-06 24.3923L-3.32543e-07 3.60769C-2.31596e-07 1.29829 2.5 -0.145083 4.5 1.00962L22.5 11.4019Z"
                fill="#1E1E1E"
              />
            </svg>
          </button>
        </div>
      </div>
      <img src={Logo} alt="" className="w-11/12 md:w-3/5 lg:w-2/5" />
    </section>
  );
};

export default Hero;
