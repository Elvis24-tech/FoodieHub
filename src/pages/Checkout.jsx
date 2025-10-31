export default function Checkout() {
  return (
    <div className="p-4 sm:p-8 max-w-xl mx-auto bg-gray-50 min-h-screen">
      <div className="bg-white p-6 sm:p-8 shadow-xl rounded-xl border border-gray-100">
        <h1 className="text-3xl font-extrabold mb-8 text-gray-800 border-b pb-3">
          Finalize Order
        </h1>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
          />
          <input
            type="text"
            placeholder="Delivery Address"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
          />

          <button
            type="submit"
            className="mt-6 bg-green-600 text-white w-full py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition duration-200 shadow-md transform hover:scale-[1.01]"
          >
            Place Order
          </button>

           <p className="text-center text-sm text-gray-500 pt-2">
              By placing an order, you agree to our terms and conditions.
          </p>
        </form>
      </div>
    </div>
  );
}