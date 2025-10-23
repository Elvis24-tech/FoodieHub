import { useState } from "react";
import FoodCard from "../components/FoodCard";
import { useCart } from "../context/CartContext";

const MENU_ITEMS = [
  {
    id: 1,
    name: "Cheese Burger",
    description: "Juicy beef patty with melted cheese and fresh veggies.",
    price: 8.99,
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Crispy Fries",
    description: "Golden, crispy potato fries served with spicy ketchup.",
    price: 3.49,
    category: "Sides",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Classic Pizza",
    description: "Stone-baked pizza with mozzarella, basil, and tomato sauce.",
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
      "https://images.unsplash.com/photo-1565958011705-44e211f6e7a7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Grilled Chicken",
    description: "Tender grilled chicken served with garlic sauce and salad.",
    price: 9.49,
    category: "Main Dishes",
    image:
      "https://images.unsplash.com/photo-1606755962773-0c74b7b40b1e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Fruit Salad",
    description: "A refreshing mix of seasonal fruits and honey drizzle.",
    price: 5.49,
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1565958011705-44e211f6e7a7?auto=format&fit=crop&w=800&q=80",
  },
];

const CATEGORIES = ["All", "Burgers", "Pizza", "Main Dishes", "Sides", "Desserts", "Drinks"];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useCart();

  const filteredItems =
    selectedCategory === "All"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-linear-to-r from-orange-50 to-yellow-100 min-h-screen py-10 px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 text-center mb-10">
        Our Delicious Menu 🍽️
      </h1>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full font-medium transition-all ${
              selectedCategory === category
                ? "bg-orange-500 text-white shadow-md"
                : "bg-white text-orange-600 hover:bg-orange-100 border border-orange-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {filteredItems.map((item) => (
          <FoodCard key={item.id} item={item} addToCart={addToCart} />
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

export default Menu;
