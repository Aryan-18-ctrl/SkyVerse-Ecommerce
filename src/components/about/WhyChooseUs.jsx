import React from "react";
import {
  BadgeCheck,
  Wallet,
  Truck,
} from "lucide-react";

const WhyChooseUs = () => {

  const features = [
    {
      id: 1,
      icon: <BadgeCheck size={30} />,
      title: "Quality Products",
      description:
        "We bring trusted and premium quality products from different categories.",
    },
    {
      id: 2,
      icon: <Wallet size={30} />,
      title: "Affordable Prices",
      description:
        "Get the best products at competitive prices with great value.",
    },
    {
      id: 3,
      icon: <Truck size={30} />,
      title: "Fast Delivery",
      description:
        "Quick and reliable delivery experience right at your doorstep.",
    },
  ];


  return (
    <section className="  px-6
    py-16
    lg:px-24
    lg:py-20">

      <div className="mb-8">
        <h2 className="
          text-3xl
          font-bold
          text-heading
        ">
          Why Choose Us
        </h2>

        <p className="
          mt-2
          text-text
        ">
          We make online shopping easier, safer and better.
        </p>
      </div>


      <div className="
        grid
        gap-8
        md:grid-cols-3
      ">

        {
          features.map((item)=>(
            <div
              key={item.id}
              className="
                rounded-2xl
                border
                border-border
                bg-card
                p-6
              "
            >

              <div className="
                mb-5
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-xl
                bg-primary/10
                text-primary
              ">
                {item.icon}
              </div>


              <h3 className="
                text-xl
                font-semibold
                text-heading
              ">
                {item.title}
              </h3>


              <p className="
                mt-3
                leading-7
                text-text
              ">
                {item.description}
              </p>


            </div>
          ))
        }

      </div>

    </section>
  );
};

export default WhyChooseUs;