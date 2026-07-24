import React, { useContext , useEffect} from "react";
import { ShoppingCart } from "lucide-react";
import { MyContext } from "../Context/EcomContext";
import { useNavigate } from "react-router";
import { ShoppingBag, ShieldCheck, Truck, Package } from "lucide-react";

const TopRated = () => {
  const navigate = useNavigate();

  const { product, addToCart ,getProductData} = useContext(MyContext);

useEffect(() => {
  if (product.length === 0) {
    getProductData();
  }
}, []);
  const topRated = product.filter(
    (item) => item.rating.rate >= 4
  );

  // FakeStore API me New Arrivals nahi hote,
  // isliye last 4 products ko new arrivals maana hai.
  const newArrivals = [...product].slice(-4).reverse();

  const ProductItem = ({ item }) => (
    <div
      onClick={() => navigate(`/details/${item.id}`)}
      className="
        group
        flex
        cursor-pointer
        items-center
        justify-between
        rounded-2xl
        border
        border-border
        bg-card
        p-4
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary
        hover:shadow-[0_10px_30px_rgba(57,230,212,0.12)]
      "
    >
      {/* Left */}
      <div className="flex min-w-0 items-center gap-4">
        {/* Image */}
        <div
          className="
            flex
            h-20
            w-20
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-border
            bg-bg
            p-3
            transition
            group-hover:border-primary
          "
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-contain transition duration-300 group-hover:scale-110"
          />
        </div>

        {/* Details */}
        <div className="min-w-0">
          <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-heading transition group-hover:text-primary">
            {item.title}
          </h3>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-lg font-bold text-primary">
              ${item.price}
            </span>

            <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
              ⭐ {item.rating.rate}
            </span>
          </div>
        </div>
      </div>

      {/* Cart */}
      <button
        onClick={(e) => addToCart(e, item)}
        className="
          ml-4
          flex
          h-11
          w-11
          shrink-0
          cursor-pointer
          items-center
          justify-center
          rounded-xl
          border
          border-primary
          bg-primary
          text-bg
          transition-all
          duration-300
          hover:scale-110
          hover:rotate-6
        "
      >
        <ShoppingCart size={20} />
      </button>
    </div>
  );

  return (
    <section className="mt-20 grid gap-8">
    <div className="grid gap-8 lg:grid-cols-2 mb-10">
              {/* Top Rated */}


          <div className="h-[550px] overflow-y-auto rounded-3xl border border-border bg-card p-5 shadow-sm">
        <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
          <h2 className="text-2xl font-bold text-heading">
            ⭐ Top Rated
          </h2>

          <button
            onClick={() => navigate("/shop")}
            className="rounded-full cursor-pointer bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-bg"
          >
            View All
          </button>
        </div>

        <div className="space-y-4">
          {topRated.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* New Arrivals */}
      <div className="h-[550px] overflow-y-auto rounded-3xl border border-border bg-card p-5 shadow-sm">
        <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
          <h2 className="text-2xl font-bold text-heading">
            ✨ New Arrivals
          </h2>

          <button
            onClick={() => navigate("/shop")}
            className="rounded-full cursor-pointer bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-bg"
          >
            View All
          </button>
        </div>

        <div className="space-y-4">
          {newArrivals.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
          {/* Features */}
  
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
  {/* Card 1 */}
  <div className="group flex w-full items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_rgba(57,230,212,0.12)]">
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-bg">
      <Package size={24} />
    </div>

    <div>
      <h4 className="text-lg font-semibold text-heading">
        Wide Selection
      </h4>

      <p className="mt-1 text-sm text-text">
        Millions of products
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="group flex w-full items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_rgba(57,230,212,0.12)]">
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-bg">
      <ShieldCheck size={24} />
    </div>

    <div>
      <h4 className="text-lg font-semibold text-heading">
        Secure Payments
      </h4>

      <p className="mt-1 text-sm text-text">
        Safe & encrypted
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="group flex w-full items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_rgba(57,230,212,0.12)]">
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-bg">
      <Truck size={24} />
    </div>

    <div>
      <h4 className="text-lg font-semibold text-heading">
        Fast Delivery
      </h4>

      <p className="mt-1 text-sm text-text">
        Across the country
      </p>
    </div>
  </div>
</div>
    </section>
  );
};

export default TopRated;