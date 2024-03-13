import ChefImg from "../assets/chef2.png";
import AvatarImg from "../assets/avatars.png";

const Testimonials = () => {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto mt-20 mb-10 gap-12 flex flex-col lg:flex-row justify-center items-center bg-[#FCFCFC] font-poppins">
      <img src={ChefImg} className="w-[60%] lg:w-[30%]" />
      <div className="testimonial-info flex flex-col gap-8 w-full  lg:w-1/3 justify-center">
        <h4 className="text-red-400 tracking-widest text-sm font-bold text-center lg:text-left">
          TESTIMONIALS
        </h4>
        <h2 className="font-bold text-3xl lg:text-4xl text-center lg:text-left">
          What Our Customers Say About Us
        </h2>
        <p className="text text-gray-600 text-center md:text-start">
          “I had the pleasure of dining at Foodi last night, and I'm still
          raving about the experience! The attention to detail in presentation
          and service was impeccable”
        </p>
        <div className="info-bottom flex gap-2 justify-center lg:justify-start">
          <img src={AvatarImg} className="w-36" />
          <div className="flex flex-col gap-1 mt-1">
            <h4 className="text-lg font-semibold justify-between text-center lg:text-left">
              Customer Feedback
            </h4>
            <p className="text-lg ">
              <span className="font-semibold">⭐ 4.9</span>{" "}
              <span className="text-[1.1rem] text-gray-600">
                (18.6k Reviews)
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
