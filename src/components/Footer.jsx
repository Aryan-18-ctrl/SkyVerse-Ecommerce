import React from "react";
import { NavLink } from "react-router";
import { ShoppingBag } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Logo */}
        <div>
          <div className="flex items-center gap-3">
            <ShoppingBag size={28} className="text-primary" />

            <h2 className="text-2xl font-bold text-heading">
              Shop<span className="text-primary">Verse</span>
            </h2>
          </div>

          <p className="mt-4 leading-7 text-text">
            Discover premium products with a modern shopping experience.
            Fast delivery, secure payments, and trusted service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-heading">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-primary"
                  : "text-text transition hover:text-primary"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-primary"
                  : "text-text transition hover:text-primary"
              }
            >
              Shop
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-primary"
                  : "text-text transition hover:text-primary"
              }
            >
              About
            </NavLink>
          </div>
        </div>

        {/* Customer */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-heading">
            Customer Support
          </h3>

          <div className="flex flex-col gap-3 text-text">
            <p className="cursor-pointer transition hover:text-primary">
              Help Center
            </p>

            <p className="cursor-pointer transition hover:text-primary">
              Privacy Policy
            </p>

            <p className="cursor-pointer transition hover:text-primary">
              Terms & Conditions
            </p>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-heading">
            Follow Us
          </h3>

          <div className="flex gap-4">
            <a
              href="#"
              className="rounded-xl border border-border p-3 text-text transition hover:border-primary hover:text-primary"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              className="rounded-xl border border-border p-3 text-text transition hover:border-primary hover:text-primary"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="rounded-xl border border-border p-3 text-text transition hover:border-primary hover:text-primary"
            >
              <FaXTwitter size={18} />
            </a>

            <a
              href="#"
              className="rounded-xl border border-border p-3 text-text transition hover:border-primary hover:text-primary"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-5 text-center">
        <p className="text-sm text-text">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-primary">
            ShopVerse
          </span>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;