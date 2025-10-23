import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-red-500">FoodExpress</Link>
      <div className="flex gap-4 items-center">
        <Link to="/menu" className="hover:text-red-500">Menu</Link>
        <Link to="/cart" className="hover:text-red-500">
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
}
