import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-3xl font-extrabold text-rose-600">
          Foodie<span className="text-orange-500">Hub</span>
        </Link>

        <div className="flex gap-6 items-center font-medium">
          <Link to="/" className="hover:text-rose-500 transition">Home</Link>
          <Link to="/menu" className="hover:text-rose-500 transition">Menu</Link>
          <Link to="/cart" className="relative hover:text-rose-500 transition">
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-rose-500 text-white text-xs rounded-full px-2 py-0.5">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
