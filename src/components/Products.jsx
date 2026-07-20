import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader'

const Products = () => {
const[product,setProduct]=useState([])

const[isLoading,setIsLoading]=useState(false)

 let getProductData= async ()=>{
    setIsLoading(true)

try{
 let response=await axios.get(
    "https://fakestoreapi.com/products")

setProduct(response.data)
}
catch(error){
    console.log("error in fetching",error)

}
finally{
        setIsLoading(false)

}

 }

useEffect(()=>{
    getProductData()

},[])

if(isLoading){
    return <Loader/>
}

return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-3 gap-6">


{
product?.map((elem)=>{
        return <div
        key={elem.id}
  className="
    group
    overflow-hidden
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
        Rs {elem.price}
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

      <button
        className="
          flex-1
         cursor-pointer

          rounded-xl
          bg-primary
          py-3
          font-semibold
          text-bg
          transition
          hover:bg-primary-hover
        "
      >
        Add to Cart
      </button>

    </div>

  </div>
</div>
    })
}

    </div>
  )
}

export default Products