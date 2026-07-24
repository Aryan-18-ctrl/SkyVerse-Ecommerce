import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { MyContext } from '../Context/EcomContext'
const ProductCard = ({elem,isInCart}) => {
let{addToCart}=useContext(MyContext)

let navigate=useNavigate()

console.log(isInCart)



  return (
    <div
   
 onClick={()=>{
navigate(`/details/${elem.id}`)
    }}
  className="
    group
    overflow-hidden
    cursor-pointer
    rounded-2xl
    border
    border-border
    bg-card
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-primary
    hover:shadow-[0_18px_35px_rgba(57,230,212,0.15)]
  "
>
  {/* Product Image */}
  <div className="relative h-64 overflow-hidden bg-bg p-6">
    <img
      src={elem.image}
      alt="Product"
      className="
        h-full
        w-full
        object-contain
        transition
        duration-500
        group-hover:scale-110
        loading='lazy'
      "
    />

    {/* Category */}
    <span
      className="
        absolute
        left-4
        top-4
        rounded-full
        bg-primary/15
        px-3
        py-1
        text-xs
        font-semibold
        capitalize
        text-primary
      "
    >
{elem.category}    </span>
  </div>

  {/* Content */}
  <div className="space-y-4 p-5">

    {/* Title */}
    <h3
      className="
        line-clamp-2
        text-lg
        font-semibold
        text-heading
      "
    >
        {elem.title}
    </h3>

    {/* Rating */}
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-1">
        <span className="text-yellow-400">⭐</span>

        <span className="font-medium text-heading">
            {elem.rating.rate}
        </span>
          <span className="text-sm text-text">
            {elem.rating.count}
        </span>
      </div>

      <p className="text-sm capitalize text-text">
{elem.category}      </p>

    </div>

    {/* Price */}
    <div className="flex items-center justify-between">

      <h2 className="text-xl font-semibold text-primary">
        Rs {Math.floor(elem.price*85)}
      </h2>



    </div>

    {/* Buttons */}
    <div className="flex gap-3">

      <button
        className="
          flex-1
          rounded-xl
          border
          border-border
          py-3
          font-medium
          text-heading
          transition
          cursor-pointer
          hover:border-primary
          hover:text-primary
        "
      >
        View Details
      </button>

   <div className="flex-1">
  {isInCart ? (
    <div className="flex items-center justify-between border border-primary rounded-xl overflow-hidden">
      <button
        className="w-12 py-3 text-xl font-bold text-primary hover:bg-primary/10 transition cursor-pointer"
      >
        −
      </button>

      <span className="font-semibold text-lg text-primary">
        2
      </span>

      <button
        className="w-12 py-3 text-xl font-bold text-primary hover:bg-primary/10 transition cursor-pointer"
      >
        +
      </button>
    </div>
  ) : (
    <button
    onClick={(e)=>{
      addToCart(e,elem)
    }}
      className="
        w-full
        cursor-pointer
        rounded-xl
        border
        border-primary
        bg-primary/15
        text-primary
        py-3
        font-semibold
        transition
        hover:bg-primary
        hover:text-white
      "
    >
      Add to Cart
    </button>
  )}
</div>

    </div>

  </div>
</div>
  )
}

export default ProductCard