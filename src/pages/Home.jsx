import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 bg-red-50">
      <h1 className="text-4xl sm:text-5xl font-bold text-red-600">
        Delicious Food, Delivered Fast 🍕
      </h1>
      <p className="mt-4 text-gray-600 max-w-lg">
        Browse our menu and order your favorite dishes. We deliver fresh meals right to your door!
      </p>
      <Link
        to="/menu"
        className="bg-red-500 text-white px-6 py-3 rounded-lg mt-6 hover:bg-red-600"
      >
        Explore Menu
      </Link>
    </div>
  );
}
