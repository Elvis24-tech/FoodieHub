export default function Checkout() {
    return (
      <div className="p-8 max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <form className="bg-white p-6 shadow rounded-lg space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded p-2"
          />
          <input
            type="text"
            placeholder="Delivery Address"
            className="w-full border rounded p-2"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border rounded p-2"
          />
          <button
            type="submit"
            className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600"
          >
            Place Order
          </button>
        </form>
      </div>
    );
  }
  