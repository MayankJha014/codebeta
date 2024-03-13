import React from "react";

const FoodComp = ({ Logo, Name, Price, Rating }) => {
  return (
    <div className="px-6  py-3 my-4 relative shadow-xl overflow-clip font-poppins w-fit rounded-2xl border border-black/5 hover:scale-110 duration-300 transition-all">
      <img src={Logo} alt="" className="w-56" />
      <p className="bg-green-500 absolute -top-2 -right-3 rounded-2xl px-4 py-4">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-1 hover:scale-110"
        >
          <g clip-path="url(#clip0_1_105)">
            <path
              d="M17.5 1.91653C16.3739 1.93405 15.2724 2.24839 14.3068 2.82781C13.3411 3.40722 12.5453 4.2312 12 5.21653C11.4546 4.2312 10.6589 3.40722 9.69323 2.82781C8.72753 2.24839 7.62604 1.93405 6.49999 1.91653C4.70493 1.99453 3.01369 2.77979 1.79577 4.10077C0.577848 5.42175 -0.0677617 7.17106 -1.11917e-05 8.96653C-1.11917e-05 13.5135 4.78599 18.4795 8.79999 21.8465C9.69621 22.5997 10.8293 23.0126 12 23.0126C13.1706 23.0126 14.3038 22.5997 15.2 21.8465C19.214 18.4795 24 13.5135 24 8.96653C24.0677 7.17106 23.4221 5.42175 22.2042 4.10077C20.9863 2.77979 19.295 1.99453 17.5 1.91653Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_105">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </p>
      <p className="pt-3 font-bold text-lg">{Name}</p>
      <p className=" text-sm my-1 font-medium py-1">Description of the item</p>
      <div className="flex justify-between my-1">
        <p>
          <span className="text-red-600 font-semibold">$ </span> {Price}
        </p>
        <p className="text-sm">⭐ {Rating}</p>
      </div>
    </div>
  );
};

export default FoodComp;
