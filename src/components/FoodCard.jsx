import React, { useState, useEffect, useRef } from "react";

export default function FoodCard({ item, addToCart }) {
  const [isAdded, setIsAdded] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Clear timer when component unmounts
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart(item);
    setIsAdded(true);

    // Revert text after 2 seconds
    timeoutRef.current = setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="bg-linear-to-r from-orange-100 to-yellow-100 shadow-lg rounded-xl p-4 hover:scale-105 transition-transform duration-300">
      <img
        src={item.image || "https://placehold.co/300x200?text=No+Image"}
        alt={item.name}
        className="w-full h-40 object-cover rounded-lg"
        onError={(e) => (e.target.src = "https://placehold.co/300x200?text=No+Image")}
      />

      <h3 className="mt-3 text-lg font-semibold text-gray-800">{item.name}</h3>
      <p className="text-gray-600 mt-1">{item.desc || item.description}</p>

      <div className="flex justify-between items-center mt-3">
        <span className="font-bold text-orange-600">
          Ksh {Number(item.price).toLocaleString()}
        </span>

        <button
          type="button"
          onClick={handleAdd}
          disabled={isAdded}
          className={`px-4 py-2 rounded-lg font-semibold transition duration-300 ${
            isAdded
              ? "bg-green-500 text-white cursor-default"
              : "bg-orange-500 text-white hover:bg-orange-600"
          }`}
        >
          {isAdded ? "✅ Added" : "Add"}
        </button>
      </div>
    </div>
  );
}
