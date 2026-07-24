import React, { useContext, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";
import { MyContext } from "../Context/EcomContext";

const ShopFilterSearch = () => {
  const { product, setFilteredProducts } = useContext(MyContext);

  const [searchProducts, setSearchProducts] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("");

  // Filter Function
  function applyFilter(search, category, sort) {
    let data = [...product];

    // Search
    if (search) {
      data = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase().trim())
      );
    }

    // Category
    if (category) {
      data = data.filter((item) => item.category === category);
    }

    // Sort
    if (sort === "high") {
      data.sort((a, b) => b.price - a.price);
    } else if (sort === "low") {
      data.sort((a, b) => a.price - b.price);
    } else if (sort === "rating") {
      data.sort((a, b) => b.rating.rate - a.rating.rate);
    }

    setFilteredProducts(data);
  }

  // Search
  function handleChange(e) {
    const value = e.target.value;
    setSearchProducts(value);
    applyFilter(value, selectedCategory, sortBy);
  }

  // Categories
  const uniqueCategory = [...new Set(product.map((item) => item.category))];

  function filterCategories(e) {
    const value = e.target.value;

    setSelectedCategory(value);

    if (value === "") {
      applyFilter(searchProducts, "", sortBy);
      return;
    }

    applyFilter(searchProducts, value, sortBy);
  }

  // Sort
  function handleSort(e) {
    const value = e.target.value;
    setSortBy(value);

    applyFilter(searchProducts, selectedCategory, value);
  }

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
          md:max-w-[550px]
        "
      >
        <Search size={20} className="text-text shrink-0" />

        <input
          type="text"
          value={searchProducts}
          onChange={handleChange}
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
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:w-auto">
        {/* Category */}
        <div className="relative w-full sm:w-auto">
          <SlidersHorizontal
            size={18}
            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-text
              pointer-events-none
              shrink-0
            "
          />

          <select
            value={selectedCategory}
            onChange={filterCategories}
            className="
              w-full
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

            {uniqueCategory.map((category, index) => (
              <option key={index} value={category}>
                {category}
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
              shrink-0
            "
          />
        </div>

        {/* Sort */}
        <div className="relative w-full sm:w-auto">
          <select
            value={sortBy}
            onChange={handleSort}
            className="
              w-full
              appearance-none
              cursor-pointer
              rounded-xl
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
            <option value="">Recommended</option>
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
              shrink-0
            "
          />
        </div>
      </div>
    </div>
  );
};

export default ShopFilterSearch;