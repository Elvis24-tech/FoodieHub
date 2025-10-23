import { Link } from "react-router-dom";
import { Truck, ShieldCheck, Utensils } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-100 via-yellow-50 to-rose-100 flex flex-col justify-center items-center text-center px-6 py-12">
      <div className="max-w-3xl animate-fade-in">
        <h1 className="text-6xl md:text-7xl font-extrabold text-orange-600 drop-shadow-xl">
          Welcome to <span className="text-rose-500">FoodieHub</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4 mb-8 leading-relaxed">
          Order your favorite meals from top-rated restaurants —
          <span className="font-semibold text-orange-600"> fresh, fast</span> &
          <span className="font-semibold text-rose-500"> full of flavor!</span>
        </p>

        <Link
          to="/menu"
          className="inline-block bg-linear-to-r from-orange-500 to-rose-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
        >
          Browse Menu
        </Link>
      </div>

      {/* Feature Cards */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
        {/* Fast Delivery */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-orange-200 hover:shadow-3xl hover:-translate-y-3 transition-all duration-500 hover:bg-linear-to-br hover:from-orange-50 hover:to-yellow-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-orange-100/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          <div className="flex justify-center mb-5">
            <div className="p-4 bg-orange-100 rounded-full shadow-inner">
              <Truck className="text-orange-500 w-12 h-12" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Fast Delivery</h3>
          <p className="text-gray-600">
            Get your meals delivered hot and fresh to your door in record time!
          </p>
        </div>

        {/* Quality Meals */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-rose-200 hover:shadow-3xl hover:-translate-y-3 transition-all duration-500 hover:bg-linear-to-br hover:from-rose-50 hover:to-pink-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-rose-100/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          <div className="flex justify-center mb-5">
            <div className="p-4 bg-rose-100 rounded-full shadow-inner">
              <Utensils className="text-rose-500 w-12 h-12" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Quality Meals</h3>
          <p className="text-gray-600">
            Only the finest ingredients and top chefs for your perfect meal.
          </p>
        </div>

        {/* Secure Payments */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-yellow-200 hover:shadow-3xl hover:-translate-y-3 transition-all duration-500 hover:bg-linear-to-br hover:from-yellow-50 hover:to-orange-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-yellow-100/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          <div className="flex justify-center mb-5">
            <div className="p-4 bg-yellow-100 rounded-full shadow-inner">
              <ShieldCheck className="text-yellow-500 w-12 h-12" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Secure Payments</h3>
          <p className="text-gray-600">
            Enjoy seamless, encrypted, and secure checkout every single time.
          </p>
        </div>
      </div>

      <p className="mt-20 text-gray-700 font-medium text-lg">
        🚀 Eat smart. Live better.{" "}
        <span className="text-orange-600 font-semibold">
          #FoodieHubDelivers
        </span>
      </p>
    </div>
  );
}

export default Home;
