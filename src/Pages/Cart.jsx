import React, { useContext } from "react";
import { X, ShoppingBag } from "lucide-react";
import { MyContext } from "../Context/EcomContext";
import CartCard from "../components/CartCart";
const Cart = () => {
  const {
    cartItems,
    setCartItems,
    isCartOpen,
    setIsCartOpen,
  } = useContext(MyContext);
console.log(cartItems)
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsCartOpen(false)}
        className={`fixed inset-0  overflow-hidden pointer-events-none bg-black/40 z-40 transition-opacity duration-300  ${
          isCartOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Cart Drawer */}
      <div
        className={`fixed bg-bg top-0 right-0 h-screen w-[400px] max-w-full bg-background shadow-lg z-80 flex flex-col transition-transform  shadow-primary/30 duration-300 ${
          isCartOpen ? "translate-x-0 shadow-primary/30" : "translate-x-full shadow-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-primary" />
            <h2 className="text-xl font-bold text-white">
              My Cart ({cartItems.length})
            </h2>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100/10 cursor-pointer transition text-white"
          >
            <X size={22} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map((elem) => (
              <CartCard key={elem.id} item={elem} />
            ))
          ) : (
            <div className="h-full flex flex-col justify-center items-center text-center">
              <ShoppingBag size={70} className="text-gray-300" />
              <h3 className="text-xl font-semibold mt-4">
                Your Cart is Empty
              </h3>
              <p className="text-gray-500 mt-2">
                Add some products to start shopping.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t p-5 space-y-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span className="text-primary">
                ${total.toFixed(2)}
              </span>
            </div>

            <button className="w-full bg-primary text-black font-semibold py-3 rounded-xl hover:opacity-90 transition">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;