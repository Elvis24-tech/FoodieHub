function FoodCard({ item, addToCart }) {
    return (
      <div className="bg-linear-to-r from-orange-100 to-yellow-100 shadow-lg rounded-xl p-4 hover:scale-105 transition-transform duration-300">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-40 object-cover rounded-lg"
        />
        <h3 className="mt-3 text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-600 mt-1">{item.description}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="font-bold text-orange-600">${item.price}</span>
          <button
            onClick={() => addToCart(item)}
            className="px-3 py-1 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            Add
          </button>
        </div>
      </div>
    );
  }
  
  export default FoodCard;
  