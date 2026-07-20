import React from "react";
import { ShoppingBag, ShieldCheck, Truck, Package } from "lucide-react";

const SigInpintro = () => {
  return (
    <div className="hidden lg:flex w-1/2 min-h-full flex-col justify-between border-r border-border/40 bg-gradient-to-br from-primary/10 from-5% via-bg via-30% to-bg px-6 py-8 xl:px-10 xl:py-10 text-heading">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="rounded-xl border border-border bg-card p-3">
          <ShoppingBag className="text-primary" size={28} />
        </div>

        <h2 className="text-2xl xl:text-3xl font-bold">
          Shop<span className="text-primary">Verse</span>
        </h2>
      </div>

      {/* Content */}
      <div className="max-w-xl">

        <h1 className="text-4xl xl:text-6xl font-bold leading-tight">
          Everything
        </h1>

        <h1 className="text-4xl xl:text-6xl font-bold leading-tight">
          You Need,
        </h1>

        <h2 className="mt-2 text-4xl xl:text-6xl font-semibold text-primary leading-tight">
          All in One Place
        </h2>

        <p className="mt-6 xl:mt-8 max-w-lg text-base xl:text-lg leading-7 xl:leading-8 text-text">
          Shop smarter with millions of products across electronics,
          fashion, home, beauty, groceries and much more.
        </p>

      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-4 xl:gap-6">

        <div className="flex flex-1 min-w-[220px] items-center gap-3 rounded-xl border border-primary/40 p-3">
          <div className="rounded-xl border border-border bg-card p-3">
            <Package className="text-primary" size={22} />
          </div>

          <div>
            <h4 className="font-semibold text-heading">
              Wide Selection
            </h4>

            <p className="text-sm text-text">
              Millions of products
            </p>
          </div>
        </div>

        <div className="flex flex-1 min-w-[220px] items-center gap-3 rounded-xl border border-primary/40 p-3">
          <div className="rounded-xl border border-border bg-card p-3">
            <ShieldCheck className="text-primary" size={22} />
          </div>

          <div>
            <h4 className="font-semibold text-heading">
              Secure Payments
            </h4>

            <p className="text-sm text-text">
              Safe & encrypted
            </p>
          </div>
        </div>

        <div className="flex flex-1 min-w-[220px] items-center gap-3 rounded-xl border border-primary/40 p-3">
          <div className="rounded-xl border border-border bg-card p-3">
            <Truck className="text-primary" size={22} />
          </div>

          <div>
            <h4 className="font-semibold text-heading">
              Fast Delivery
            </h4>

            <p className="text-sm text-text">
              Across the country
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default SigInpintro;