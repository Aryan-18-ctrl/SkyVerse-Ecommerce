import React from "react";
import { MoveRight, ShoppingBag } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="
      relative
      overflow-hidden
      border
      border-border
      bg-card
      px-6
      py-16
      lg:px-24
      lg:py-20
    ">

      <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />


      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          text-center
          gap-12
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:text-left
        "
      >

        {/* Content */}
        <div className="w-full lg:w-[55%]">

          <span className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-primary/30
            bg-primary/10
            px-5
            py-2
            text-sm
            font-medium
            text-primary
          ">
            <ShoppingBag size={16} />
            About ShopVerse
          </span>


          <h1 className="
            mt-8
            text-5xl
            font-extrabold
            leading-tight
            text-heading
            lg:text-7xl
          ">
            Shop Smarter.
            <br />

            <span className="text-primary">
              Live Better.
            </span>
          </h1>


          <p className="
            mx-auto
            mt-8
            max-w-xl
            text-lg
            leading-8
            text-text
            lg:mx-0
          ">
            At ShopVerse, shopping isn't just about buying products —
            it's about discovering quality, style, and technology that
            improve everyday life. From premium fashion to cutting-edge
            electronics, we deliver trusted products with unbeatable value.
          </p>


          <div className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-4
            lg:justify-start
          ">

            <button
              className="
                cursor-pointer
                rounded-full
                bg-primary
                px-8
                py-3
                font-semibold
                text-bg
                transition
                hover:bg-primary-hover
              "
            >
              Shop Now
            </button>


            <button
              className="
                flex
                cursor-pointer
                items-center
                gap-3
                rounded-full
                border
                border-border
                px-8
                py-3
                font-semibold
                text-heading
                transition
                hover:border-primary
                hover:text-primary
              "
            >
              Explore Products
              <MoveRight size={20}/>
            </button>

          </div>

        </div>


        <div className="
          hidden
          w-[40%]
          lg:block
        ">

          <div className="
            overflow-hidden
            rounded-3xl
            border
            border-border
            bg-bg
          ">

            <img
              src="/src/assets/elec.jpg"
              alt="People shopping online"
              className="
                h-[500px]
                w-full
                object-cover
              "
            />

          </div>

        </div>


      </div>

    </section>
  );
};

export default AboutHero;