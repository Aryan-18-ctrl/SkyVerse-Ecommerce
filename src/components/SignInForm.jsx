import React, { useState } from "react";
import { Mail, Lock, ArrowRight, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const SignInForm = () => {


  const[signedIn,setSignedIn]=useState(()=>JSON.parse(localStorage.getItem("registerUser")) || [])
      let navigate=useNavigate()
  let {
     register,
     handleSubmit,
     reset,
     formState: { errors }
   } = useForm(
    {
      mode:"onChange"
    }
   );

   function formData(data){
let isSignedIn=signedIn.find((user)=> user.email===data.email && user.password===data.password
)

if(!isSignedIn){

toast.error("Invalid email or password");
    reset()

  return ;

}

  toast.success("Login successful!");
    localStorage.setItem("isLoggedIn", "true");
localStorage.setItem("currentUser",JSON.stringify(isSignedIn))
    reset()

  navigate("/home")


   }


  return (
    <div className="flex min-h-screen w-full lg:w-[50%] flex-col items-center justify-center px-4 py-6 sm:px-6 sm:py-10 lg:px-10">

      {/* Logo only when left section hidden */}
      <div className="mb-6 flex items-center gap-3 lg:hidden">
        <div className="rounded-xl border border-border bg-card p-2.5 sm:p-3">
          <ShoppingBag className="text-primary" size={26} />
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-heading">
          Shop<span className="text-primary">Verse</span>
        </h2>
      </div>


      {/* Form Card */}
      <div className="w-full max-w-110 rounded-3xl border border-border bg-card p-5 shadow-2xl sm:p-6 md:p-8">

        {/* Heading */}
        <div className="mb-5 sm:mb-8">
          <h2 className="text-xl sm:text-2xl   font-bold text-heading">
            Welcome Back 👋
          </h2>

          <p className="mt-1 sm:mt-2 text-sm sm:text-base text-text">
            Sign in to continue your shopping journey.
          </p>
        </div>


        <form onSubmit={handleSubmit(formData)} className="space-y-4 sm:space-y-5">


          {/* Email */}
          <div className="flex items-center rounded-xl border border-input-border bg-bg px-3 sm:px-4 transition focus-within:border-primary">

            <Mail 
              size={17} 
              className="text-text sm:w-[18px]"
            />

            <input
            {...register("email", {
                required: "Email can't be empty",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                  message: "Enter a valid email address"
                }
              })}
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent px-2 sm:px-3 py-2.5 sm:py-3 text-sm sm:text-base text-heading outline-none placeholder:text-text"
            />

          </div>

            {errors.email && (
            <p className="text-danger text-xs -mt-2">
              {errors.email?.message} *
            </p>
          )}


          {/* Password */}
          <div className="flex items-center rounded-xl border border-input-border bg-bg px-3 sm:px-4 transition focus-within:border-primary">

            <Lock 
              size={17}
              className="text-text sm:w-[18px]"
            />

            <input
                   {...register("password", {
                required: "Password can't be empty",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
                  message:
                    "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
                }
              })}
              type="password"
              placeholder="Enter your password"
              className="w-full bg-transparent px-2 sm:px-3 py-2.5 sm:py-3 text-sm sm:text-base text-heading outline-none placeholder:text-text"
            />

          </div>

            {errors.password && (
            <p className="text-danger text-xs -mt-2">
              {errors.password?.message} *
            </p>
          )}

          <div className="flex items-center justify-between text-xs sm:text-sm">

            <label className="flex cursor-pointer items-center gap-2 text-text">

              <input 
                type="checkbox" 
                className="accent-primary cursor-pointer"
              />

              Remember me

            </label>


            <button
              type="button"
              className="cursor-pointer text-primary hover:underline"
            >
              Forgot Password?
            </button>

          </div>


          {/* Button */}
          <button 
            type="submit"
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-bg transition hover:bg-primary-hover"
          >
            Sign In
            <ArrowRight size={18} />
          </button>


        </form>


        {/* Divider */}
        <div className="my-5 flex items-center gap-4 sm:my-8">

          <div className="h-px flex-1 bg-border"></div>

          <span className="text-xs sm:text-sm text-text">
            OR
          </span>

          <div className="h-px flex-1 bg-border"></div>

        </div>


        {/* Signup */}
        <p className="text-center text-sm sm:text-base text-text">

          Don't have an account?{" "}

          <span   onClick={()=>{
            navigate("/register")
          }} className="cursor-pointer font-semibold text-primary hover:underline">
            Sign Up
          </span>

        </p>


      </div>

    </div>
  );
};

export default SignInForm;