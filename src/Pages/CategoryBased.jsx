import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

import { useContext } from "react";
import CategoryCard from "../components/CategoryCard";
import Loader from "../components/Loader";
import { MyContext } from "../Context/EcomContext";
const CategoryBased = () => {
  const { categoryName } = useParams();
const [isLoading,setIsloading]=useState(false)
  const [categoryData, setCategoryData] = useState([]);
let  {cartItems}=useContext(MyContext)

 async function getCategoryData() {
  try {
    setIsloading(true);

    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${categoryName}`
    );


    setCategoryData(response.data);
  } catch (error) {
    console.log(error);
  } finally {
    setIsloading(false);
  }
}
  useEffect(() => {
    getCategoryData();
  }, [categoryName]);


  if(isLoading){
    return <Loader/>
  }

  return (
    <section className="px-6 py-8 xl:px-10 xl:py-10">

      {/* Header */}
      <div className="mb-10 flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 md:flex-row md:items-center md:justify-between">

        <div>
          <p className="text-sm text-text">
            Home /
            <span className="mx-1">Categories</span>/
            <span className="capitalize text-primary">
              {categoryName}
            </span>
          </p>

          <h1 className="mt-3 text-4xl font-bold capitalize text-heading">
            {categoryName}
          </h1>

          <p className="mt-2 max-w-xl text-text">
            Explore our premium collection of{" "}
            <span className="capitalize">{categoryName}</span>. Discover
            high-quality products at affordable prices.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-bg px-6 py-5 text-center">
          <p className="text-sm text-text">Products Available</p>

          <h2 className="mt-2 text-4xl font-bold text-primary">
            {categoryData.length}
          </h2>
        </div>
      </div>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center">


{
  categoryData.map((elem) => {

    const isInCart = cartItems.some(
      (item) => item.id === elem.id
    );

    return (
      <CategoryCard
        key={elem.id}
        elem={elem}
        isInCart={isInCart}
      />
    );
  })
}

      </div>
    </section>
  );
};

export default CategoryBased;