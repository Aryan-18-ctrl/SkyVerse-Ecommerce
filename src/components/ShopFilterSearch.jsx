import React, { useContext, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  CircleGauge,
} from "lucide-react";
import { MyContext } from "../Context/EcomContext";



const ShopFilterSearch = () => {
let{product,setFilteredProducts}=useContext(MyContext)
const [searchProducts,setSearchProducts]=useState("");
const [selectedCategory, setSelectedCategory] = useState("");
const[sortBy,setSortBy]=useState("")


// filter functionality

function applyFilter(search , category , sort){
let data=[...product]


// search part---

if(search){
  data = data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase().trim()));
}

// category part


if(category){
  data=data.filter((elem)=> elem.category===category
  )
}

// sort part

if(sort==='high'){
  data.sort((a,b)=>b.price-a.price)
}
else if(sort==='low'){
data.sort((a,b)=>a.price-b.price)
}
else if(sort==="rating"){
  data.sort((a,b)=>b.rating.rate-a.rating.rate)

}


setFilteredProducts(data)


}


//  search ----
function handleChange(e) {
  let value=e.target.value
  setSearchProducts(value);
applyFilter(value,selectedCategory,sortBy)
 
}
const uniqueCategory = [...new Set(product.map((cat) => cat.category))];


// filter----

function filterCategories(e){
  if (e.target.value === "") {
  setFilteredProducts(product);
  return;

}
  const value = e.target.value;

  setSelectedCategory(value);
applyFilter(searchProducts,value,sortBy)


}

// ---sort---

function handleSort(e){

  let value=e.target.value
  setSortBy(value)

  applyFilter(searchProducts,selectedCategory,value)


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
          max-w-[550px]
        "
      >
        <Search size={20}
        
        
        className="text-text" />
        <input
        
value={searchProducts}
   onChange={handleChange}
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
          onChange={filterCategories}
value={selectedCategory}
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
            <option  value="">All Categories</option>
{
  uniqueCategory.map((elem,idx)=>{
    return <option key={idx} value={elem}>{elem}</option>
  })
}
            
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
          onChange={handleSort}
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
  <option value="" disabled> Sort By</option> 
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
            "
          />
        </div>

      </div>
    </div>
  );
};

export default ShopFilterSearch;