import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, getTotalPrice } = useCart();

  if (!cart || cart.length === 0) {
    return (
      <div className="min-h-screen bg-linear-to-br from-emerald-50 to-emerald-100 flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Your cart is empty 🛒
        </h2>
        <p className="text-gray-600 mb-6">
          Looks like you haven’t added anything yet.
        </p>
        <Link
          to="/menu"
          className="px-6 py-3 bg-emerald-600 text-white rounded-full shadow-md hover:bg-emerald-700 hover:scale-105 transition-transform duration-200"
        >
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-emerald-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Your Cart 
      </h1>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10">
        <div className="space-y-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 pb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover shadow-md"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-500">Ksh{item.price}</p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item)}
                className="mt-4 sm:mt-0 px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 hover:scale-105 transition-transform duration-200"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-10 pt-6 border-t">
          <h2 className="text-2xl font-semibold text-gray-800">
            Total:{" "}
            <span className="text-emerald-600">Ksh{getTotalPrice()}</span>
          </h2>
          <Link
            to="/checkout"
            className="mt-6 sm:mt-0 px-8 py-3 bg-emerald-600 text-white text-lg rounded-full shadow-md hover:bg-emerald-700 hover:scale-105 transition-transform duration-200"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
