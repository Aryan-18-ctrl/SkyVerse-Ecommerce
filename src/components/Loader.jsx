import React from "react";

const Loader = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="relative flex flex-col items-center">


        <div
          className="
            h-20
            w-20
            animate-spin
            rounded-full
            border-[6px]
            border-primary/20
            border-t-primary
            shadow-[0_0_35px_rgba(57,230,212,0.35)]
          "
        />

      

        {/* Text */}
        <h3 className="mt-8 text-xl font-semibold text-heading">
          Loading Products...
        </h3>

        <p className="mt-2 text-sm text-text">
          Please wait while we prepare your shopping experience.
        </p>

      </div>
    </div>
  );
};

export default Loader;