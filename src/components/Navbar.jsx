import React from "react";
import { ShoppingCart, LogOut, ShoppingBag } from "lucide-react";
import { NavLink } from "react-router";

const Navbar = () => {
  let currUser=JSON.parse(localStorage.getItem("currentUser"))

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-bg/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <div className="flex items-center gap-3">

          <div className="rounded-xl border border-border bg-card p-3 shadow-md">
            <ShoppingBag className="text-primary" size={24} />
          </div>

          <h2 className="text-xl font-bold text-heading">
            Shop<span className="text-primary">Verse</span>
          </h2>

        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-text">

       <li>
           <NavLink to="/home" className="cursor-pointer transition hover:text-primary">
            Home
          </NavLink>

       </li>

        <li>
              <NavLink to="/shop" className="cursor-pointer transition hover:text-primary">
            Shop
          </NavLink>
        </li>

       <li>
           <NavLink to="/about" className="cursor-pointer transition hover:text-primary">
            About
          </NavLink>

       </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* User */}
          <div className=" flex items-center gap-3 rounded-2xl border border-border bg-card px-3 py-2">

            <div className=" h-8 w-8 items-center justify-center flex rounded-full bg-primary font-semibold text-bg">
            {currUser.name.charAt(0).toUpperCase()}
            </div>

            <div className="hidden sm:flex">
              <p className="text-sm font-semibold text-heading">
                {currUser.name}
              </p>
            </div>

          </div>

          {/* Cart */}
          <button className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-border bg-card transition hover:border-primary hover:text-primary">
            <ShoppingCart size={20} />
          </button>

          {/* Logout */}
          <button className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-border bg-card transition hover:border-red-500 hover:text-red-500">
            <LogOut size={20} />
          </button>

        </div>

      </nav>
    </header>
  );
};

export default Navbar;