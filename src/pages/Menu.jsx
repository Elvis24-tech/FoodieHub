import FoodCard from "../components/FoodCard";

const sampleFoods = [
  {
    id: 1,
    name: "Cheese Burger",
    description: "Juicy grilled burger with melted cheese.",
    price: 5.99,
    image: "https://source.unsplash.com/400x300/?burger",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    description: "Classic pizza topped with pepperoni and cheese.",
    price: 8.99,
    image: "https://source.unsplash.com/400x300/?pizza",
  },
  {
    id: 3,
    name: "Fresh Salad",
    description: "Healthy salad with organic vegetables.",
    price: 4.50,
    image: "https://source.unsplash.com/400x300/?salad",
  },
];

export default function Menu() {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {sampleFoods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
}
