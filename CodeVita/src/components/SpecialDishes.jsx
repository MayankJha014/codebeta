import React from "react";
import Egg from "../assets/egg.png";
import Pasta from "../assets/pasta.png";
import Veg from "../assets/veg.png";
import FoodComp from "./FoodComp";

const SpecialDishes = () => {
  const category = [
    {
      Logo: Pasta,
      Name: "Fattoush salad",
      Price: "24.00",
      Rating: "4.9",
    },
    {
      Logo: Veg,
      Name: "Vegetable salad",
      Price: "26.00",
      Rating: "4.6",
    },
    {
      Logo: Egg,
      Name: "Egg vegi salad",
      Price: "23.00",
      Rating: "4.5",
    },
    {
      Logo: Pasta,
      Name: "Fattoush salad",
      Price: "24.00",
      Rating: "4.9",
    },
    {
      Logo: Veg,
      Name: "Vegetable salad",
      Price: "26.00",
      Rating: "4.6",
    },
    {
      Logo: Egg,
      Name: "Egg vegi salad",
      Price: "23.00",
      Rating: "4.5",
    },
  ];
  return (
    <section className="font-poppins w-11/12 md:w-4/5 mx-auto">
      <p className="text-red-500 font-semibold text-sm  ">Special Dishes</p>
      <div className=" flex my-2 justify-between">
        <p className="text-3xl font-bold w-80">
          {" "}
          Standout Dishes From Our Menu
        </p>
        <div className="flex gap-4">
          <button className="shadow-lg px-6 hover:bg-green-500 font-medium h-fit text-xl py-2 duration-300 transition-colors border rounded-full cursor-pointer">
            {"<"}
          </button>
          <button className="shadow-lg hover:bg-green-500 px-6 h-fit font-medium duration-300 text-xl py-2 transition-colors border rounded-full cursor-pointer">
            {">"}
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-6 md:gap-12  my-10 flex-wrap">
        {category.map((item, index) => {
          return (
            <FoodComp
              key={index}
              Name={item.Name}
              Logo={item.Logo}
              Price={item.Price}
              Rating={item.Rating}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SpecialDishes;
