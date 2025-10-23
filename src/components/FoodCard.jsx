import { useCart } from "../context/CartContext";

export default function FoodCard({ food }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
      <img
        src={food.image}
        alt={food.name}
        className="h-40 w-full object-cover rounded-xl"
      />
      <h3 className="text-lg font-semibold mt-2">{food.name}</h3>
      <p className="text-gray-500 text-sm">{food.description}</p>
      <p className="text-red-500 font-bold mt-2">${food.price}</p>
      <button
        onClick={() => addToCart(food)}
        className="bg-red-500 text-white px-4 py-2 mt-3 rounded hover:bg-red-600 w-full"
      >
        Add to Cart
      </button>
    </div>
  );
}
