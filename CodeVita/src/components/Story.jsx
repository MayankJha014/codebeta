import Service from "./Service";
import CateringImg from "../assets/catering.png";
import DeliveryImg from "../assets/delivery.png";
import OrderingImg from "../assets/ordering.png";
import CardsImg from "../assets/cards.png";

const services = [
  {
    serviceName: "Catering",
    serviceImg: CateringImg,
    description: "Delight your guests with our flavors and  presentation",
  },
  {
    serviceName: "Fast Delivery",
    serviceImg: DeliveryImg,
    description: "We deliver your order promptly to your door",
  },
  {
    serviceName: "Catering",
    serviceImg: OrderingImg,
    description: "Explore menu & order with ease using our Online Ordering ",
  },
  {
    serviceName: "Gift Cards",
    serviceImg: CardsImg,
    description: "Give the gift of exceptional dining with Foodi Gift Cards",
  },
];

const Story = () => {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto gap-14 flex font-poppins flex-col lg:flex-row justify-center items-center mt-32">
      <div className="testimonial-info flex flex-col gap-8 w-full  lg:w-1/3 justify-center">
        <h4 className="text-red-400 tracking-widest text-sm font-bold text-center lg:text-left">
          OUR STORY AND SERVICES
        </h4>
        <h2 className="font-bold text-3xl lg:text-4xl text-center lg:text-left">
          Our Culinary Journey And Services
        </h2>
        <p className="text text-gray-600 text-center lg:text-left">
          Rooted in passion, we curate unforgettable dining experiences and
          offer exceptional services, blending culinary artistry with warm
          hospitality.
        </p>

        <button className="bg-[#39DB4A] hover:bg-green-700 text-white px-6 py-4 font-semibold rounded-full w-36 text-lg self-center lg:self-start">
          Explore
        </button>
      </div>
      <div className="catering-products flex flex-col gap-8">
        <div className="flex gap-8 flex-col items-center md:flex-row">
          <Service
            serviceName={services[0].serviceName}
            serviceImg={services[0].serviceImg}
            description={services[0].description}
          />
          <Service
            serviceName={services[1].serviceName}
            serviceImg={services[1].serviceImg}
            description={services[1].description}
          />
        </div>
        <div className="flex gap-8 flex-col items-center md:flex-row">
          <Service
            serviceName={services[2].serviceName}
            serviceImg={services[2].serviceImg}
            description={services[2].description}
          />
          <Service
            serviceName={services[3].serviceName}
            serviceImg={services[3].serviceImg}
            description={services[3].description}
          />
        </div>
      </div>
    </div>
  );
};

export default Story;
