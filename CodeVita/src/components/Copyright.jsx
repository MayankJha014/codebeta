// import React from 'react'
import FbIcon from "../assets/fb.png";
import InstaIcon from "../assets/insta.png";
import TwitterIcon from "../assets/twitter.png";
import TubeIcon from "../assets/tube.png";

const Copyright = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center">
      <div className="social-icons flex gap-4 self-center w-1/3">
        <img src={FbIcon} className="w-[40px]" />
        <img src={InstaIcon} className="w-[40px]" />
        <img src={TwitterIcon} className="w-[40px]" />
        <img src={TubeIcon} className="w-[40px]" />
      </div>
      <p className="text-base text-[#555555]">
        Copyright ©️ 2023 Dscode | All rights reserved
      </p>
    </div>
  );
};

export default Copyright;
