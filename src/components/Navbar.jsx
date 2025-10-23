import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { cart } = useCart();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Cart", path: "/cart" },
  ];

  return (
    <nav className="bg-linear-to-r from-orange-50/80 to-rose-50/80 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-orange-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link
          to="/"
          className="text-3xl font-extrabold text-rose-600 tracking-tight hover:scale-105 transition-transform duration-300"
        >
          Foodie<span className="text-orange-500">Hub</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center font-semibold text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-rose-600 after:w-full"
                  : "hover:text-rose-500"
              } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-rose-500 after:transition-all after:duration-300 hover:after:w-full`}
            >
              {link.name}
              {link.path === "/cart" && cart.length > 0 && (
                <span className="absolute -top-2 -right-4 bg-rose-500 text-white text-xs font-bold rounded-full px-2 py-0.5 shadow-md">
                  {cart.length}
                </span>
              )}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden text-gray-700 hover:text-rose-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 bg-orange-50/90 backdrop-blur-sm border-t border-orange-100">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`py-2 px-3 rounded-lg transition-colors duration-300 ${
                location.pathname === link.path
                  ? "bg-rose-100 text-rose-600 font-bold"
                  : "hover:bg-rose-100 hover:text-rose-500"
              }`}
            >
              {link.name}
              {link.path === "/cart" && cart.length > 0 && (
                <span className="ml-2 bg-rose-500 text-white text-xs font-bold rounded-full px-2 py-0.5 shadow-md">
                  {cart.length}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
