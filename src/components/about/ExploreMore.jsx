import React from "react";
import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router";
const ExploreMore = () => {
    let nvigate=useNavigate()
  return (
<section className="  px-6
    py-16
    lg:px-24
    lg:py-20">
        <div className="
      
      rounded-2xl
      border
  
       px-6
    py-16
    lg:px-24
    lg:py-20
    border
    border-border
    
      text-center
      
  
    ">

      <h2 className="
        text-3xl
        font-bold
        text-heading
      ">
        Explore More Products
      </h2>


      <p className="
        mx-auto
        mt-3
        max-w-xl
        text-text
      ">
        Discover the latest fashion, electronics, and lifestyle
        products curated just for you.
      </p>


      <button
        className="
          mt-6
          inline-flex
          cursor-pointer
          items-center
          gap-3
          rounded-full
          bg-primary
          px-8
          py-3
          font-semibold
          text-bg
          transition
          hover:bg-primary-hover
        "
        onClick={()=>{
            nvigate("/home")
        }}
      >
        Start Shopping
        <MoveRight size={20}/>
      </button>


    </div>
</section>
  );
};

export default ExploreMore;