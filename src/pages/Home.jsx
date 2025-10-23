import { Link } from "react-router-dom";
import { Truck, ShieldCheck, Utensils } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-100 via-yellow-50 to-rose-100 flex flex-col justify-center items-center text-center px-4 sm:px-6 py-12">
      <div className="max-w-3xl animate-fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-orange-600 drop-shadow-xl">
          Welcome to <span className="text-rose-500">FoodieHub</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-4 mb-8 leading-relaxed">
          Order your favorite meals from top-rated restaurants —
          <span className="font-semibold text-orange-600"> fresh, fast</span> &
          <span className="font-semibold text-rose-500"> full of flavor!</span>
        </p>

        <Link
          to="/menu"
          className="inline-block bg-linear-to-r from-orange-500 to-rose-500 text-white px-6 py-3 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
        >
          Browse Menu
        </Link>
      </div>
      <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 w-full max-w-6xl">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-4 sm:p-8 border border-orange-200 hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 hover:bg-linear-to-br hover:from-orange-50 hover:to-yellow-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          <div className="flex justify-center mb-4 sm:mb-5">
            <div className="p-4 bg-orange-100 rounded-full shadow-inner">
              <Truck className="text-orange-500 w-10 h-10 sm:w-12 sm:h-12" />
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Fast Delivery</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Get your meals delivered hot and fresh to your door in record time!
          </p>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-4 sm:p-8 border border-rose-200 hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 hover:bg-linear-to-br hover:from-rose-50 hover:to-pink-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-100/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          <div className="flex justify-center mb-4 sm:mb-5">
            <div className="p-4 bg-rose-100 rounded-full shadow-inner">
              <Utensils className="text-rose-500 w-10 h-10 sm:w-12 sm:h-12" />
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Quality Meals</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Only the finest ingredients and top chefs for your perfect meal.
          </p>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-4 sm:p-8 border border-yellow-200 hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 hover:bg-linear-to-br hover:from-yellow-50 hover:to-orange-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          <div className="flex justify-center mb-4 sm:mb-5">
            <div className="p-4 bg-yellow-100 rounded-full shadow-inner">
              <ShieldCheck className="text-yellow-500 w-10 h-10 sm:w-12 sm:h-12" />
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Secure Payments</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Enjoy seamless, encrypted, and secure checkout every single time.
          </p>
        </div>
      </div>
      <p className="mt-12 sm:mt-20 text-gray-700 font-medium text-base sm:text-lg">
        🚀 Eat smart. Live better.{" "}
        <span className="text-orange-600 font-semibold">
          #FoodieHubDelivers
        </span>
      </p>
    </div>
  );
}

export default Home;
