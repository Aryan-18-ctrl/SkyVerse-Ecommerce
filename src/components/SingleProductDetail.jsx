import React, { useState }  from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router";
import { useContext } from "react";
import { MyContext } from "../Context/EcomContext";
import {
  Star,
  Minus,
  Plus,
  ShoppingCart,
  ChevronRight ,
  Heart,
  Truck,
  ChevronLeft ,
  
  ShieldCheck,
} from "lucide-react";

const SingleProductDetail = ({id}) => {
let {
  singleProdData,
  addToCart,
  itemIncre,
  itemDeccre,
  cartItems
}=useContext(MyContext)    



  let navigate=useNavigate()

const[heart,setHeart]=useState(false)

//   prev   next  
let isInCart = cartItems.some(
  (item)=>item.id === singleProdData.id
);

let currentQty = cartItems.find(
  (item)=>item.id === singleProdData.id
)?.quantity || 0;

function handleNext(){
  if (Number(id) < 20) {
    navigate(`/details/${Number(id) + 1}`);
  }}
  

  function handlePrev(){
    if(Number(id)>0){
        navigate(`/details/${Number(id)-1}`)
    }
  }



  return (
    <section className=" px-4 py-6 sm:px-6 sm:py-10 lg:px-10">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-text">
        <NavLink to="/home" className="transition hover:text-primary">
          Home
        </NavLink>

        <span className="mx-2">/</span>

        <NavLink to="/shop" className="transition hover:text-primary">
          Shop
        </NavLink>

        <span className="mx-2">/</span>
        <span className="capitalize text-primary">
          {singleProdData.title?.substring(0, 30)}...
        </span>
      </div>

      {/* Product */}
      <div className="grid gap-8 rounded-3xl border border-border bg-card p-5 lg:grid-cols-2 lg:p-7">
        {/* Left */}
        <div className="flex items-center justify-center rounded-2xl border border-border bg-bg p-6">
          <img
            src={singleProdData.image}
            alt={singleProdData.title}
            loading="lazy"
            className="h-[300px] w-full object-contain"
          />
        </div>

        {/* Right */}
        <div className="flex flex-col">
          {/* Category */}
          <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium capitalize text-primary">
            {singleProdData.category}
          </span>

          {/* Title */}
          <h1 className="mt-4 text-3xl font-bold leading-snug text-heading">
            {singleProdData.title}
          </h1>

          {/* Rating */}
          <div className="mt-3 flex items-center gap-2">
            <Star
              size={17}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="font-semibold text-heading">
              {singleProdData?.rating?.rate}
            </span>

            <span className="text-sm text-text">
              ({singleProdData?.rating?.count} Reviews)
            </span>
          </div>

          {/* Price */}
          <h2 className="mt-4 text-3xl font-bold text-primary">
            ₹ {Math.floor((singleProdData.price || 0) * 85)}
          </h2>

          <p className="mt-4 leading-7 text-text">
            {singleProdData.description}
          </p>
{/* Quantity */}
<div className="mt-6 flex items-center gap-5">
  <p className="font-semibold text-heading">
    Quantity
  </p>

  <div className="flex items-center overflow-hidden rounded-xl border border-border">

    <button
      onClick={(e)=>{
        itemDeccre(e,singleProdData)
      }}
      disabled={!isInCart}
      className="
        cursor-pointer
        px-4
        py-3
        transition
        hover:bg-primary
        hover:text-bg
        disabled:opacity-40
      "
    >
      <Minus size={16}/>
    </button>


    <span className="px-5 font-semibold text-heading">
      {currentQty || 0}
    </span>


    <button
      onClick={(e)=>{
        itemIncre(e,singleProdData)
      }}
      disabled={!isInCart}
      className="
        cursor-pointer
        px-4
        py-3
        transition
        hover:bg-primary
        hover:text-bg
        disabled:opacity-40
      "
    >
      <Plus size={16}/>
    </button>

  </div>
</div>
{/* Buttons */}
<div className="mt-6 flex flex-wrap gap-3">

{
!isInCart && (
<button
onClick={(e)=>{
  addToCart(e,singleProdData)
}}
className="
flex
items-center
gap-2
rounded-xl
bg-primary
px-7
py-3
font-semibold
text-bg
transition
cursor-pointer
hover:bg-primary-hover
"
>
<ShoppingCart size={18}/>
Add to Cart
</button>
)
}


<button
onClick={()=>{
setHeart(prev=>!prev)
}}
className="
rounded-xl
border
border-border
p-3
cursor-pointer
transition
hover:border-primary
hover:text-primary
"
>
<Heart 
style={{color:heart?"red":"white"}} 
size={20}
/>
</button>

</div>
<div className="mt-8 flex gap-4">
  <button
  onClick={handlePrev}
    disabled={Number(id) === 1}
    className="rounded-xl border border-[#98EECC] flex items-center gap-3 text-primary px-6 py-3  cursor-pointer disabled:opacity-50"
  >
   <ChevronLeft /> Previous
  </button>

  <button
  onClick={handleNext}
    disabled={Number(id) === 20}
    className="rounded-xl bg-primary/15 px-6 py-3 flex items-center gap-4 border border-[#98EECC] cursor-pointer text-primary disabled:opacity-50"
  >
    Next <ChevronRight />
  </button>
</div>

          {/* Features */}
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-xl border border-border p-4">
              <Truck
                size={20}
                className="text-primary"
              />

              <div>
                <h4 className="text-sm font-semibold text-heading">
                  Fast Delivery
                </h4>

                <p className="text-xs text-text">
                  Delivery available nationwide.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-border p-4">
              <ShieldCheck
                size={20}
                className="text-primary"
              />

              <div>
                <h4 className="text-sm font-semibold text-heading">
                  Secure Payment
                </h4>

                <p className="text-xs text-text">
                  100% safe & secure checkout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductDetail;