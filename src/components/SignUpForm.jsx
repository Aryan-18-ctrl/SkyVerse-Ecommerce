import React, { useState } from "react";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Eye } from 'lucide-react';
import toast from "react-hot-toast";
import { EyeClosed } from 'lucide-react';

const SignUpForm = () => {
    let navigate = useNavigate();

  const[seePass,setSeePass]=useState(false)
const[registered,setRegistered]=useState(()=>JSON.parse(localStorage.getItem("registerUser")) || [])
  let {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm(
      {
      mode:"onChange"
    }
  );

  const password = watch("password");

  let formdata = (data) => {

      let isExists=registered.find((elem)=>{
    return elem.email===data.email

  })
  if(isExists){
    toast.error("user already exists")
    return 
  }
 const {confirmPassword, ...userData} = data;

 let gotoRegister = [...registered, userData];
    setRegistered(gotoRegister)
localStorage.setItem("registerUser",JSON.stringify(gotoRegister))
toast.success("Account created successfully!");

  reset();

  navigate("/")


  };
  return (
    <div className="w-full max-w-110">
      
      <div className="mb-8 flex items-center justify-center gap-3">
        <div className="rounded-xl border border-border bg-card p-2.5 sm:p-3">
          <ShoppingBag className="text-primary" size={26} />
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-heading">
          Shop<span className="text-primary">Verse</span>
        </h2>
      </div>


      <div className="w-full rounded-3xl border border-border bg-card p-5 shadow-2xl sm:p-6">

        <div className="mb-5">
          <h2 className="sm:text-2xl text-xl font-bold text-heading">
            Create Account
          </h2>

          <p className="mt-1 text-sm text-text">
            Join ShopVerse and start shopping.
          </p>
        </div>


        <form onSubmit={handleSubmit(formdata)} className="flex flex-col gap-4">


          {/* Name */}
          <div className="flex items-center rounded-xl border border-input-border bg-bg px-3">

            <User size={17} className="text-text" />

            <input
              {...register("name", {
                required: "Name can't be empty",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters"
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Name should contain only letters"
                }
              })}
              type="text"
              placeholder="Full name"
              className="w-full bg-transparent px-3 py-3 text-sm text-heading outline-none placeholder:text-text"
            />

          </div>

          {errors.name && (
            <p className="text-danger text-xs -mt-2">
              {errors.name?.message} *
            </p>
          )}



          {/* Email */}
          <div className="flex items-center rounded-xl border border-input-border bg-bg px-3">

            <Mail size={17} className="text-text" />

            <input
              {...register("email", {
                required: "Email can't be empty",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                  message: "Enter a valid email address"
                }
              })}
              type="email"
              placeholder="Email address"
              className="w-full bg-transparent px-3 py-3 text-sm text-heading outline-none placeholder:text-text"
            />

          </div>

          {errors.email && (
            <p className="text-danger text-xs -mt-2">
              {errors.email?.message} *
            </p>
          )}




          {/* Password */}
          <div className="flex items-center rounded-xl border border-input-border bg-bg px-3">

            <Lock size={17} className="text-text" />

            <input
              {...register("password", {
                required: "Password can't be empty",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
                  message:
                    "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
                }
              })}
              type={seePass?"text":"password"}
              placeholder="Password"
              className="w-full bg-transparent px-3 py-3 text-sm text-heading outline-none placeholder:text-text"
              
            />
{seePass?(<Eye onClick={()=>{
                  setSeePass(prev=>!prev)
                }} className="text-text cursor-pointer" />):
                (<EyeClosed onClick={()=>{
                  setSeePass(prev=>!prev)
                }} className="text-text cursor-pointer" />)}

          </div>

          {errors.password && (
            <p className="text-danger text-xs -mt-2">
              {errors.password?.message} *
            </p>
          )}






          {/* Confirm Password */}
          <div className="flex items-center rounded-xl border border-input-border bg-bg px-3">

            <Lock size={17} className="text-text" />

            <input
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match"
              })}
              placeholder="Confirm password"
              className="w-full bg-transparent px-3 py-3 text-sm text-heading outline-none placeholder:text-text"
            />

          </div>

          {errors.confirmPassword && (
            <p className="text-danger text-xs -mt-2">
              {errors.confirmPassword?.message} *
            </p>
          )}




          <label className="flex items-center gap-2 text-xs text-text mt-2">
            <input
              type="checkbox"
              className="accent-primary"
            />
            I agree to Terms & Conditions
          </label>



          <button
            type="submit"
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary py-3 font-semibold text-bg transition hover:bg-primary-hover"
          >
            Create Account
            <ArrowRight size={18} />
          </button>


        </form>



        <div className="my-5 flex items-center gap-4">

          <div className="h-px flex-1 bg-border"></div>

          <span className="text-xs text-text">
            OR
          </span>

          <div className="h-px flex-1 bg-border"></div>

        </div>



        <p className="text-center text-sm text-text">

          Already have an account?{" "}

          <span
            onClick={() => navigate("/")}
            className="cursor-pointer font-semibold text-primary hover:underline"
          >
            Sign In
          </span>

        </p>


      </div>

    </div>
  );
};

export default SignUpForm;