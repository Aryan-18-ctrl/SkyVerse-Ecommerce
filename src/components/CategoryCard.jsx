import React, { useContext } from "react";
import { Star, ShoppingCart, Eye } from "lucide-react";
import { useNavigate } from "react-router";
import { MyContext } from "../Context/EcomContext";

const CategoryCard = ({ elem, isInCart }) => {

  let { addToCart, cartItems,itemDeccre,itemIncre } = useContext(MyContext);

  let navigate = useNavigate();


  let currentQty = cartItems.find(
    (item) => item.id === elem.id
  )?.quantity;


  return (
    <div
      onClick={() => navigate(`/details/${elem.id}`)}
      className="
        group
        flex
        cursor-pointer
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-card
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-primary
        hover:shadow-[0_15px_35px_rgba(57,230,212,0.12)]
      "
    >

      {/* Image */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-bg p-6">

        <img
          src={elem.image}
          alt={elem.title}
          className="
            h-full
            w-full
            object-contain
            transition
            duration-500
            group-hover:scale-110
          "
        />

        <span
          className="
            absolute
            left-4
            top-4
            rounded-full
            bg-primary/10
            px-3
            py-1
            text-xs
            font-semibold
            capitalize
            text-primary
          "
        >
          {elem.category}
        </span>

      </div>


      {/* Content */}
      <div className="flex flex-1 flex-col p-5">

        <h3 className="min-h-[56px] line-clamp-2 text-lg font-semibold text-heading">
          {elem.title}
        </h3>


        <div className="mt-4 flex items-center gap-2">

          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="font-semibold text-heading">
            {elem.rating.rate}
          </span>

          <span className="text-sm text-text">
            ({elem.rating.count})
          </span>

        </div>


        <div className="mt-5">
          <h2 className="text-xl font-semibold text-primary">
            ₹ {Math.round(elem.price * 85)}
          </h2>
        </div>


        <div className="mt-auto pt-6 flex gap-3">

          <button
            className="
              flex flex-1 items-center justify-center gap-2
              rounded-xl border border-border py-3
              font-medium cursor-pointer
              text-heading transition
              hover:border-primary hover:text-primary
            "
          >
            <Eye size={18}/>
            View
          </button>


          {
            isInCart ?

            <div
              onClick={(e)=>e.stopPropagation()}
              className="
                flex flex-1 items-center justify-between
                rounded-xl border border-primary
                overflow-hidden
              "
            >

              <button
                onClick={(e)=>itemDeccre(e,elem)}
                className="
                  w-10 py-3 text-xl font-bold
                  text-primary hover:bg-primary/10
                  cursor-pointer
                "
              >
                -
              </button>


              <span className="font-semibold text-primary">
                {currentQty}
              </span>


              <button
                onClick={(e)=>itemIncre(e,elem)}
                className="
                  w-10 py-3 text-xl font-bold
                  text-primary hover:bg-primary/10
                  cursor-pointer
                "
              >
                +
              </button>


            </div>

            :

            <button
              onClick={(e)=>{
                addToCart(e,elem)
              }}
              className="
                flex flex-1 items-center justify-center gap-2
                rounded-xl bg-primary py-3
                font-semibold text-bg
                cursor-pointer transition
                hover:bg-primary-hover
              "
            >
              <ShoppingCart size={18}/>
              Cart
            </button>

          }


        </div>

      </div>

    </div>
  );
};

export default CategoryCard;