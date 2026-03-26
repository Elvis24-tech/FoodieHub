import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, getTotalPrice, setCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [paidAmount, setPaidAmount] = useState(null); // store total after payment
  const navigate = useNavigate();

  const handlePayment = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();

    if (!name || !phone) {
      setMessage("⚠️ Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const total = getTotalPrice(); // store total before clearing cart
      const res = await fetch("http://127.0.0.1:8000/api/stkpush/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, amount: total }),
      });

      const data = await res.json();

      if (data.ResponseCode === "0") {
        setPaidAmount(total); // keep total visible
        setMessage("📲 STK Push sent! Check your phone to complete payment.");
      } else {
        setMessage("❌ Payment failed. Try again.");
      }
    } catch {
      setMessage("⚠️ Server error. Make sure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  // Redirect after 6 seconds if payment is successful
  useEffect(() => {
    let timer;
    if (message.startsWith("📲")) {
      timer = setTimeout(() => {
        setCart([]); // clear cart only after showing total
        navigate("/");
      }, 6000);
    }
    return () => clearTimeout(timer);
  }, [message, navigate, setCart]);

  return (
    <div className="p-4 sm:p-8 min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="bg-white w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100">
        <h1 className="text-3xl font-extrabold mb-6 text-gray-800 border-b pb-3">
          🧾 Checkout
        </h1>

        {/* Total */}
        <div className="mb-6 bg-orange-50 p-4 rounded-lg flex justify-between items-center">
          <span className="text-gray-700 font-medium">Total Amount:</span>
          <span className="text-2xl font-bold text-orange-600">
            Ksh {paidAmount ?? getTotalPrice()}
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handlePayment} className="space-y-5">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-orange-400 focus:border-orange-400 transition"
          />

          <input
            name="phone"
            type="text"
            placeholder="Phone (2547XXXXXXXX)"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-orange-400 focus:border-orange-400 transition"
          />

          <button
            type="submit"
            disabled={loading || cart.length === 0}
            className={`w-full py-3 rounded-lg font-semibold text-lg shadow-md transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600 text-white hover:scale-[1.02]"
            }`}
          >
            {loading ? "Processing..." : "Pay with M-Pesa"}
          </button>
        </form>

        {/* Message */}
        {message && (
          <p className="mt-5 text-center text-sm font-medium text-gray-700">
            {message}
          </p>
        )}

        <p className="text-center text-xs text-gray-500 pt-4">
          Secure payment powered by M-Pesa
        </p>
      </div>
    </div>
  );
}