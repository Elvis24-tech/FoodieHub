function Home() {
    return (
      <div className="min-h-screen bg-linear-to-r from-orange-50 to-yellow-100 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-extrabold text-orange-600 mb-4 drop-shadow-md">
          Welcome to FoodieHub 🍔
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mb-6">
          Order your favorite meals from the best restaurants in town — fast,
          fresh, and delicious!
        </p>
        <a
          href="/menu"
          className="bg-orange-500 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-orange-600 transition"
        >
          Browse Menu
        </a>
  
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-bold text-gray-800">Fast Delivery</h3>
            <p className="text-gray-600 mt-2">
              Get your meals delivered hot and fresh to your door in no time!
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-bold text-gray-800">Quality Meals</h3>
            <p className="text-gray-600 mt-2">
              Only the best ingredients and top chefs for your satisfaction.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
            <h3 className="text-xl font-bold text-gray-800">Secure Payments</h3>
            <p className="text-gray-600 mt-2">
              Enjoy a seamless and secure checkout experience every time.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  