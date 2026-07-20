import React from "react";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";

const ShopFilterSearch = ({ categories = [] }) => {
  return (
    <div
      className="
        flex flex-col gap-5
        rounded-2xl
        border border-border
        bg-card
        p-5
        md:flex-row
        md:items-center
        md:justify-between
      "
    >
      {/* Search */}
      <div
        className="
          flex w-full items-center gap-3
          rounded-xl
          border border-border
          bg-bg
          px-4 py-3
          transition
          focus-within:border-primary
          max-w-[550px]
        "
      >
        <Search size={20} className="text-text" />

        <input
          type="text"
          placeholder="Search products..."
          className="
            w-full
            bg-transparent
            text-heading
            outline-none
            placeholder:text-text
          "
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row">

        {/* Category */}
        <div className="relative">

          <SlidersHorizontal
            size={18}
            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-text
              pointer-events-none
            "
          />

          <select
            className="
              appearance-none
              cursor-pointer
              rounded-xl
              border border-border
              bg-bg
              py-3
              pl-10
              pr-10
              text-heading
              outline-none
              transition
              focus:border-primary
              sm:w-56
            "
          >
            <option value="">All Categories</option>

            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <ChevronDown
            size={18}
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              text-text
              pointer-events-none
            "
          />
        </div>

        {/* Sort */}
        <div className="relative ">

          <select
            className="
              appearance-none
              rounded-xl
              cursor-pointer
              border border-border
              bg-bg
              py-3
              pl-4
              pr-10
              text-heading
              outline-none
              transition
              focus:border-primary
              sm:w-52
            "
          >
            <option value="">Sort By</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>

          <ChevronDown
            size={18}
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              text-text
              pointer-events-none
            "
          />
        </div>

      </div>
    </div>
  );
};

export default ShopFilterSearch;