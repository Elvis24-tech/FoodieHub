import { Link } from "react-router-dom";
import { Truck, ShieldCheck, Utensils } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-100 via-yellow-50 to-rose-100 flex flex-col justify-center items-center text-center px-6 py-12">
      <div className="max-w-3xl">
        <h1 className="text-6xl md:text-7xl font-extrabold text-orange-600 drop-shadow-xl animate-fade-in">
          Welcome to <span className="text-rose-500">FoodieHub</span> 🍔
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4 mb-8 leading-relaxed">
          Order your favorite meals from top-rated restaurants — 
          <span className="font-semibold text-orange-600"> fresh, fast</span> & 
          <span className="font-semibold text-rose-500"> full of flavor!</span>
        </p>

        <Link
          to="/menu"
          className="inline-block bg-linear-to-r from-orange-500 to-rose-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
        >
          🍽️ Browse Menu
        </Link>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-orange-500">
          <div className="flex justify-center mb-4">
            <Truck className="text-orange-500 w-12 h-12" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Fast Delivery</h3>
          <p className="text-gray-600">
            Get your meals delivered hot and fresh to your door in no time!
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-rose-500">
          <div className="flex justify-center mb-4">
            <Utensils className="text-rose-500 w-12 h-12" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Quality Meals</h3>
          <p className="text-gray-600">
            Only the best ingredients and top chefs for your satisfaction.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-yellow-500">
          <div className="flex justify-center mb-4">
            <ShieldCheck className="text-yellow-500 w-12 h-12" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Secure Payments</h3>
          <p className="text-gray-600">
            Enjoy a seamless and secure checkout experience every time.
          </p>
        </div>
      </div>
      <p className="mt-16 text-gray-700 font-medium text-lg">
        🚀 Eat smart. Live better. <span className="text-orange-600 font-semibold">#FoodieHubDelivers</span>
      </p>
    </div>
  );
}

export default Home;
