import React from "react";
import {
  Users,
  ShoppingBag,
  Truck,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    id: 1,
    icon: <Users size={28} />,
    value: "10K+",
    label: "Happy Customers",
  },
  {
    id: 2,
    icon: <ShoppingBag size={28} />,
    value: "500+",
    label: "Premium Products",
  },
  {
    id: 3,
    icon: <Truck size={28} />,
    value: "Free",
    label: "Delivery on ₹499+",
  },
  {
    id: 4,
    icon: <ShieldCheck size={28} />,
    value: "100%",
    label: "Secure Payments",
  },
];

const AboutStats = () => {
  return (
    <section className="px-6
    py-16
    lg:px-24
    lg:py-20">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => (
          <div
            key={item.id}
            className="
              flex
              items-center
              gap-5
              rounded-2xl
              border
              border-border
              bg-card
              p-6
              transition-all
              duration-300
              hover:border-primary
            "
          >
            {/* Icon */}
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-xl
                bg-primary/10
                text-primary
                shrink-0
              "
            >
              {item.icon}
            </div>

            {/* Content */}
            <div>
              <h3 className="text-3xl font-bold text-heading">
                {item.value}
              </h3>

              <p className="mt-1 text-sm text-text">
                {item.label}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default AboutStats;