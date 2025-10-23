import { useState } from "react";
import FoodCard from "../components/FoodCard";
import { useCart } from "../context/CartContext";

const MENU_ITEMS = [
  {
    id: 1,
    name: "Cheese Burger",
    description: "Juicy beef patty with melted cheddar and veggies.",
    price: 8.99,
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Crispy Fries",
    description: "Golden fries seasoned with sea salt and chili flakes.",
    price: 3.49,
    category: "Sides",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Classic Pizza",
    description: "Mozzarella, basil & tomato sauce baked to perfection.",
    price: 10.99,
    category: "Pizza",
    image:
      "https://images.unsplash.com/photo-1601924582971-c9d01aa1a174?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Chocolate Shake",
    description: "Rich chocolate milkshake topped with whipped cream.",
    price: 4.99,
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1578302758063-0ef3d1d1e9de?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Grilled Chicken",
    description: "Marinated grilled chicken with lemon and herbs.",
    price: 9.49,
    category: "Main Dishes",
    image:
      "https://images.unsplash.com/photo-1606755962773-0c74b7b40b1e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Fruit Salad",
    description: "Fresh tropical fruits with honey and mint.",
    price: 5.49,
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1572448862528-9d7c40c71d1b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Pasta Alfredo",
    description: "Creamy Alfredo pasta with parmesan and grilled chicken.",
    price: 11.49,
    category: "Main Dishes",
    image:
      "https://images.unsplash.com/photo-1612874742237-6526221588e8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Strawberry Sundae",
    description: "Vanilla ice cream topped with fresh strawberries.",
    price: 4.49,
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1600891963933-c9e7ffb363c7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Mango Smoothie",
    description: "Sweet mango blended with yogurt and ice.",
    price: 4.29,
    category: "Drinks",
    image:
      "https://images.unsplash.com/photo-1576402187878-974f70c890a5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "BBQ Ribs",
    description: "Tender ribs coated in smoky BBQ glaze.",
    price: 12.99,
    category: "Main Dishes",
    image:
      "https://images.unsplash.com/photo-1553163147-622ab57e9c15?auto=format&fit=crop&w=800&q=80",
  },
];

const CATEGORIES = [
  "All",
  "Burgers",
  "Pizza",
  "Main Dishes",
  "Sides",
  "Desserts",
  "Drinks",
];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useCart();

  const filteredItems =
    selectedCategory === "All"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-yellow-50 to-orange-100">
      {/* Hero Section */}
      <div className="text-center py-14 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 text-white rounded-b-[3rem] shadow-lg">
        <h1 className="text-5xl font-extrabold mb-3 drop-shadow-lg">
          Explore Our Menu 🍴
        </h1>
        <p className="text-lg font-medium opacity-90">
          Taste the best meals made with love and fresh ingredients
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mt-10 mb-8 px-4">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-sm ${
              selectedCategory === category
                ? "bg-orange-500 text-white shadow-md scale-105"
                : "bg-white text-orange-600 hover:bg-orange-100 border border-orange-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto px-6 pb-16">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white/80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={item.image || "https://placehold.co/300x200?text=No+Image"}
              alt={item.name}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.src = "https://placehold.co/300x200?text=No+Image";
              }}
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {item.name}
              </h3>
              <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                {item.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-orange-600 font-bold text-lg">
                  ${item.price.toFixed(2)}
                </span>
                <button
                  onClick={() => addToCart(item)}
                  className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300"
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
          No items found in this category.
        </p>
      )}
    </div>
  );
}

export default Menu;
