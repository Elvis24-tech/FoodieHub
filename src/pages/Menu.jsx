import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const MENU_ITEMS = [
  { id: 1, name: "Nyama Choma", price: 850, category: "Main Dishes", desc: "Juicy roasted beef served with kachumbari and ugali.", image: "https://images.unsplash.com/photo-1599785209707-28e9aa3c8415" },
  { id: 2, name: "Pilau", price: 500, category: "Main Dishes", desc: "Swahili spiced rice cooked with tender beef.", image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f" },
  { id: 3, name: "Chapati & Beans", price: 350, category: "Vegetarian", desc: "Soft chapatis served with deliciously cooked beans.", image: "https://images.unsplash.com/photo-1617196036984-228628b1e688" },
  { id: 4, name: "Fried Fish", price: 900, category: "Seafood", desc: "Deep-fried tilapia served with ugali and greens.", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092" },
  { id: 5, name: "Chicken Stew", price: 750, category: "Main Dishes", desc: "Spicy chicken stew served with rice or ugali.", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0" },
  { id: 6, name: "Vegetable Salad", price: 300, category: "Vegetarian", desc: "Fresh salad with tomatoes, cucumber, and lettuce.", image: "https://images.unsplash.com/photo-1565958011705-44e211f6e7a7" },
  { id: 7, name: "Mandazi", price: 150, category: "Snacks", desc: "Soft, golden fried mandazis perfect for tea time.", image: "https://images.unsplash.com/photo-1604152135912-04a579b4c0c1" },
  { id: 8, name: "Fresh Juice", price: 200, category: "Drinks", desc: "Refreshing fruit juice made from fresh tropical fruits.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87" },
];

const CATEGORIES = ["All", "Main Dishes", "Vegetarian", "Seafood", "Snacks", "Drinks"];

export default function Menu() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-yellow-50 to-yellow-100 p-8">
      <h1 className="text-4xl font-extrabold text-center text-green-800 mb-8">
        🍴 Our Delicious Menu
      </h1>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full font-medium transition-all ${
              selectedCategory === category
                ? "bg-green-600 text-white shadow-md"
                : "bg-white text-green-700 border border-green-300 hover:bg-green-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredItems.map((food) => (
          <div
            key={food.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
          >
            <img
              src={food.image}
              alt={food.name}
              onError={handleImageError}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-bold text-gray-800">{food.name}</h2>
              <p className="text-gray-600 mt-1">{food.desc}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xl font-semibold text-green-700">
                  Ksh {food.price.toLocaleString()}
                </span>
                <button
                  onClick={() => addToCart(food)}
                  className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <p className="text-center text-gray-600 mt-10">
          No items available in this category right now.
        </p>
      )}
    </div>
  );
}
