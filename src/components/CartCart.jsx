import React from "react";
import { Trash2, Plus, Minus } from "lucide-react";

const CartCard = ({ item }) => {
  return (
    <div className="flex gap-4 p-4 border rounded-xl bg-card shadow-sm hover:shadow-md transition-all">
      {/* Product Image */}
      <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center p-2">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-heading line-clamp-2">
            {item.title}
          </h3>

          <p className="text-sm text-text mt-1 capitalize">
            {item.category}
          </p>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500">⭐</span>
            <span className="text-sm text-text">
              {item.rating.rate} ({item.rating.count})
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-3">
          <p className="text-xl font-bold text-primary">
            ${item.price}
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-2 border rounded-lg px-2 py-1">
            <button className="hover:text-primary">
              <Minus size={16} />
            </button>

            <span className="font-semibold">1</span>

            <button className="hover:text-primary">
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Delete */}
      <button className="text-red-500 hover:text-red-600 self-start">
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default CartCard;