import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const MENU_ITEMS = [
  { id: 1, name: "Nyama Choma", price: 850, category: "Main Dishes", desc: "Juicy roasted beef served with kachumbari and ugali.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Nyama_Choma_%28BBQ_the_Kenyan_way%29.jpg/1200px-Nyama_Choma_%28BBQ_the_Kenyan_way%29.jpg" },
  { id: 2, name: "Pilau", price: 500, category: "Main Dishes", desc: "Swahili spiced rice cooked with tender beef.", image: "https://art.whisk.com/image/upload/fl_progressive,h_630,w_1200,c_fill/v1730768678/recipe/07a2d1c92541184ac16bf4b5eae8d0a0.jpgf" },
  { id: 5, name: "Chicken Stew", price: 750, category: "Main Dishes", desc: "Spicy chicken stew served with rice or ugali.", image: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/smoked_paprika_chicken_42159_16x9.jpg" },
  { id: 9, name: "Beef Curry", price: 780, category: "Main Dishes", desc: "Rich, slow-cooked beef curry served with steamed rice.", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-RY0T6PY0ssgbi4VWDGb-P7vP6yrNFn3fYf3Ws-CTX2BJKalTt8__DxJV9mzL2uuECEYNE3cPMvEXUeTeeKhkAhzIQArap2NX2QJjZZJUtco96szbl5nwjx8tqLnv8-KVJB17_2NDvpo/s2048/nadan+beef+curry+17.JPG" },
  { id: 3, name: "Chapati & Beans", price: 350, category: "Vegetarian", desc: "Soft chapatis served with deliciously cooked beans.", image: "https://i.ytimg.com/vi/vIb2CpaW-D8/hq720.jpg" },
  { id: 6, name: "Vegetable Salad", price: 300, category: "Vegetarian", desc: "Fresh salad with tomatoes, cucumber, and lettuce.", image: "https://cdn.jwplayer.com/v2/media/wGEqBtuf/thumbnails/qSXwlEH3.jpg?width=1280" },
  { id: 10, name: "Githeri", price: 400, category: "Vegetarian", desc: "Classic Kenyan mix of maize and beans, perfectly seasoned.", image: "https://www.kenyageographic.com/wp-content/uploads/2022/12/spiced-githeri-2.jpg" },
  { id: 4, name: "Fried Fish", price: 900, category: "Seafood", desc: "Deep-fried tilapia served with ugali and greens.", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092" },
  { id: 11, name: "Grilled Prawns", price: 1200, category: "Seafood", desc: "Succulent prawns grilled with garlic butter.", image: "https://lh4.googleusercontent.com/proxy/TPnpyraCPOZ5_QANDKJtrYWVJnL1T1Qp2cUYRIUXub4n8l109qv_WjX1naPeCOs584ZcxHWiNAw2CylyVrMZD8LnjuN6ynaEfW500sL4PP76iupatBnDgmZTP_PzPOuzrEOiZQHylg" },
  { id: 7, name: "Mandazi", price: 150, category: "Snacks", desc: "Soft, golden fried mandazis perfect for tea time.", image: "https://i.ytimg.com/vi/DGjk_1pfigM/maxresdefault.jpg" },
  { id: 12, name: "Samosa", price: 100, category: "Snacks", desc: "Crispy samosas filled with spiced beef or vegetables.", image: "https://thecookingfoodie.com/wp-content/uploads/2020/04/IMG_4128-2.jpg" },
  { id: 13, name: "Chips Masala", price: 250, category: "Snacks", desc: "Fries tossed in spicy masala sauce, Kenyan style.", image: "https://i.ytimg.com/vi/p6lwfQD6IdQ/maxresdefault.jpg" },
  { id: 14, name: "Tea & Mandazi Combo", price: 250, category: "Breakfast", desc: "Perfect morning combo of hot tea and fresh mandazis.", image: "https://formationsofanoblewoman.com/wp-content/uploads/2025/04/20250411_144410_00001.png" },
  { id: 15, name: "Pancakes & Honey", price: 400, category: "Breakfast", desc: "Soft pancakes drizzled with natural honey.", image: "https://www.manusmenu.com/wp-content/uploads/2016/04/1-Ricotta-Pancakes-8-1-of-1.jpg" },
  { id: 16, name: "Omelette & Toast", price: 350, category: "Breakfast", desc: "Fluffy omelette with golden-brown toast.", image: "https://www.superhealthykids.com/wp-content/uploads/2013/02/IMG_4314.jpg" },
  { id: 17, name: "Chocolate Cake", price: 450, category: "Desserts", desc: "Moist chocolate cake topped with creamy frosting.", image: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/easy_chocolate_cake_31070_16x9.jpg" },
  { id: 18, name: "Fruit Salad", price: 300, category: "Desserts", desc: "A mix of tropical fruits for a sweet, healthy treat.", image: "https://www.hipmamasplace.com/wp-content/uploads/2021/06/199259152_166663622165057_6223652316946896551_n.jpg" },
  { id: 8, name: "Fresh Juice", price: 200, category: "Drinks", desc: "Refreshing fruit juice made from fresh tropical fruits.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87" },
  { id: 19, name: "Dawa", price: 180, category: "Drinks", desc: "Hot honey, lemon, and ginger drink for refreshment.", image: "https://opendrinks.io/img/kenyan-dawa.3a107df1.jpg" },
  { id: 20, name: "Iced Coffee", price: 300, category: "Drinks", desc: "Smooth, chilled coffee with milk and ice cubes.", image: "https://www.bhg.com/thmb/UcTbMWKkDYip1DojqgSbfufQRpU=/4000x0/filters:no_upscale():strip_icc()/bhg-Affogatto-Style-Caramel-Iced-Coffee-0s0juRT-4PG97XVeJSnJ9_-3004cfb890654e3e8914a44b70fb35d4.jpg" },
  { id: 21, name: "Pumpkin Soup", price: 350, category: "Soups", desc: "Creamy pumpkin soup served with toast.", image: "https://www.healthyfood.com/wp-content/uploads/2019/07/Creamy-pumpkin-soup-1024x638.jpg" },
  { id: 22, name: "Beef Soup", price: 450, category: "Soups", desc: "Warm beef broth packed with veggies and flavor.", image: "https://www.allrecipes.com/thmb/iDlx9eEJoU1tf1ocSS6PaiSz7jM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229071-ground-beef-vegetable-soup-DDMFS-4x3-4b8eb325a60c4d5288ae5112ce92dc8e.jpg" },
];

const CATEGORIES = ["All", "Main Dishes", "Vegetarian", "Seafood", "Snacks", "Breakfast", "Soups", "Desserts", "Drinks"];

export default function Menu() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [addedItems, setAddedItems] = useState({});

  const filteredItems =
    selectedCategory === "All"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  const handleAddToCart = (food) => {
    addToCart(food);
    setAddedItems((prev) => ({ ...prev, [food.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [food.id]: false }));
    }, 2000); // back to "Add to Cart" after 2 seconds
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-yellow-50 to-yellow-100 p-8">
      <h1 className="text-4xl font-extrabold text-center text-green-800 mb-8">
        🍴 Our Delicious Menu
      </h1>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full font-medium transition-all ${
              selectedCategory === category
                ? "bg-green-600 text-white shadow-md"
                : "bg-white text-green-700 border border-green-300 hover:bg-green-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Food Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredItems.map((food) => (
          <div
            key={food.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-bold text-gray-800">{food.name}</h2>
              <p className="text-gray-600 mt-1">{food.desc}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xl font-semibold text-green-700">
                  Ksh {food.price.toLocaleString()}
                </span>
                <button
                  onClick={() => handleAddToCart(food)}
                  className={`px-4 py-2 rounded-full font-medium transition ${
                    addedItems[food.id]
                      ? "bg-green-500 text-white cursor-default"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  {addedItems[food.id] ? "Added" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
