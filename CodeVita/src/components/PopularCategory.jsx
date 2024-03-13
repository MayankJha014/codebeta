import React from "react";
import Ice from "../assets/ice.png";
import Sand from "../assets/sand.png";
import Juice from "../assets/juice.png";
import Burger from "../assets/burger.png";
import CategoryComp from "./CategoryComp";

const PopularCategory = () => {
  const category = [
    {
      Logo: Burger,
      Name: "Main Dish",
      Description: "(86 dishes)",
    },
    {
      Logo: Sand,
      Name: "Break Fast",
      Description: "(12 break fast)",
    },
    {
      Logo: Ice,
      Name: "Dessert",
      Description: "(48 dessert)",
    },
    {
      Logo: Juice,
      Name: "Browse All",
      Description: "(255 Items)",
    },
  ];
  return (
    <section className="font-poppins w-full my-10 md:w-4/5 mx-auto">
      <h2 className="font-bold text-2xl text-center">Popular Category</h2>
      <div className="flex justify-center  gap-6 md:gap-12 mb-24 mt-10 flex-wrap">
        {category.map((item, index) => {
          return (
            <CategoryComp
              key={index}
              Logo={item.Logo}
              Name={item.Name}
              Description={item.Description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PopularCategory;
