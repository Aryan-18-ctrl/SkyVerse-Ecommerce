import React, { useContext, useState } from "react";
import {
  ShoppingCart,
  LogOut,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { MyContext } from "../Context/EcomContext";

const Navbar = () => {
  const { setIsCartOpen, cartItems } = useContext(MyContext);

  const navigate = useNavigate();
  const currUser = JSON.parse(localStorage.getItem("currentUser"));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");

    toast.success("Logged out successfully!", {
      icon: "👋",
    });

    navigate("/");
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-bg/70 backdrop-blur-xl">
      {/* Navbar */}
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-border bg-card p-2.5 sm:p-3 shadow-md">
            <ShoppingBag className="text-primary" size={24} />
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-heading">
            Shop<span className="text-primary">Verse</span>
          </h2>
        </div>

        {/* Desktop Nav */}
<ul className="hidden md:flex items-center gap-10 text-md font-medium">          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `transition hover:text-primary ${
                  isActive ? "text-primary font-semibold" : "text-heading"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `transition hover:text-primary ${
                  isActive ? "text-primary font-semibold" : "text-heading"
                }`
              }
            >
              Shop
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition hover:text-primary ${
                  isActive ? "text-primary font-semibold" : "text-heading"
                }`
              }
            >
              About
            </NavLink>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* User */}
<div className="hidden md:flex items-center gap-3 rounded-2xl border border-border bg-card px-3 py-2">            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-semibold text-bg">
              {currUser?.name?.charAt(0).toUpperCase()}
            </div>

            <p className="text-sm font-semibold text-heading">
              {currUser?.name}
            </p>
          </div>

          {/* Cart */}
          <div className="relative">
            <button
              onClick={() => setIsCartOpen(true)
                
              }
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-white bg-card text-primary transition hover:border-primary"
            >
              <ShoppingCart size={20} />
            </button>

            <span className="absolute -top-2 -right-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-red-700 text-[11px] text-white">
              {cartItems.length}
            </span>
          </div>

          {/* Desktop Logout */}
 <button
 onClick={handleLogout}
 className="
 hidden
 lg:flex
 h-11
 w-11
 cursor-pointer
 items-center
 justify-center
 rounded-xl
 border
 border-white
 bg-card
 text-white
 transition
 hover:border-red-500
 hover:text-red-500
 "
>
            <LogOut size={20} />
          </button>

          {/* Mobile Hamburger */}
        <button
 onClick={() => setIsMenuOpen(true)}
 className="
 flex
 md:hidden
 h-11
 w-11
 cursor-pointer
 items-center
 justify-center
 rounded-xl
 border
 border-border
 bg-card
 text-white
 "
>
<Menu size={24}/>
</button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden h-screen ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Drawer */}
     <aside
className={`
fixed 
top-0 
right-0 
z-[999]
h-screen 
w-[280px]
max-w-[85vw]
border-l
border-border
bg-card
shadow-2xl
transition-transform
duration-300
md:hidden
${isMenuOpen ? "translate-x-0 ":"translate-x-full hidden"}
`}
>
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-border p-5">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-primary" size={22} />
            <h3 className="text-lg font-bold text-heading">
              Shop<span className="text-primary">Verse</span>
            </h3>
          </div>

          <button
            onClick={closeMenu}
            className="rounded-lg p-2 text-white transition hover:bg-primary/10"
          >
            <X size={22} />
          </button>
        </div>

        {/* User */}
        <div className="flex items-center gap-3 border-b border-border p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-bg">
            {currUser?.name?.charAt(0).toUpperCase()}
          </div>

          <div>
            <p className="font-semibold text-heading">
              {currUser?.name}
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 p-5">
          <NavLink
            to="/home"
            onClick={closeMenu}
            className={({ isActive }) =>
              `rounded-xl px-4 py-3 transition ${
                isActive
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-white hover:bg-primary/10"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            onClick={closeMenu}
            className={({ isActive }) =>
              `rounded-xl px-4 py-3 transition ${
                isActive
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-white hover:bg-primary/10"
              }`
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              `rounded-xl px-4 py-3 transition ${
                isActive
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-white hover:bg-primary/10"
              }`
            }
          >
            About
          </NavLink>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="mt-5 flex w-full cursor-pointer items-center gap-3 rounded-xl border border-red-500/40 px-4 py-3 text-red-500 transition hover:bg-red-500/10"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;