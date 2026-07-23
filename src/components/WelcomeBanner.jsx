import React, { useEffect, useState } from "react";
import { MoveRight } from 'lucide-react';
import { useNavigate } from "react-router";
const WelcomeBanner = () => {
const [greet,setGreet]=useState("")
    let navigate=useNavigate();
let currUser=JSON.parse(localStorage.getItem("currentUser"))

function getGreet(){
let hours = new Date().getHours();

if (hours >= 5 && hours < 12) {
  setGreet("Good Morning");
} 
else if (hours >= 12 && hours < 17) {
  setGreet("Good Afternoon");
} 
else if (hours >= 17 && hours < 21) {
  setGreet("Good Evening");
} 
else {
  setGreet("Good Night");
}
}
useEffect(()=>{
  getGreet()

},[])


  return (
    <div className="mb-10  flex flex-col justify-between gap-8 rounded-3xl border border-border  p-6 shadow-lg lg:flex-row lg:items-center lg:p-10 bg-[linear-gradient(to_right,rgba(57,230,212,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(57,230,212,0.06)_1px,transparent_1px)] bg-[size:40px_40px]">

      {/* Left */}
      <div className="flex flex-col gap-4 sm:text-start text-center">

        <span className="w-fit tracking-wide rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          👋 {greet}
        </span>

        <div>
          <h2 className="text-3xl font-bold text-heading sm:text-4xl">
            Welcome back,
          </h2>

          <h2 className="mt-1 text-2xl font-extrabold text-primary sm:text-4xl">
{currUser.name}! </h2>
        </div>

        <p className="max-w-2xl text-base leading-7 text-text">
          Discover today's hand-picked collections across electronics,
          fashion, home essentials, and more. Find your next favorite
          product at unbeatable prices.
        </p>
          {/* Buttons */}
      <div className="flex items-center justify-center sm:justify-start gap-4 pt-2 ">
        <button onClick={()=>{
            navigate("/shop")
        }} className="rounded-full sm:text-[16px] text-[14px] cursor-pointer bg-primary px-6  py-3 font-semibold text-white transition hover:bg-primary-hover">
          Shop Now
        </button>

        <button onClick={()=>{
            navigate("/shop")
        }} className="flex cursor-pointer sm:text-[16px] text-[14px] items-center  gap-3 rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:border-primary hover:text-primary">
          View All Products
          <MoveRight size={20} />
        </button>
      </div>
      </div>

      {/* Right */}
      <div className=" flex flex-col  gap-4 lg:min-w-[240px]">

        <div className="rounded-2xl border border-border bg-bg p-5 text-center transition hover:border-primary">
          <h3 className="text-3xl font-bold text-primary">20K+</h3>
          <p className="mt-2 text-sm text-text">
            Products Available
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-bg p-5 text-center transition hover:border-primary">
          <h3 className="text-3xl font-bold text-primary">Free</h3>
          <p className="mt-2 text-sm text-text">
            Delivery Above ₹499
          </p>
        </div>

      </div>

      
    </div>
  );
};

export default WelcomeBanner;