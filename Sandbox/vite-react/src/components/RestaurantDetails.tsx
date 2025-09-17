import { restaurantData } from "../data";
import { useParams } from "react-router-dom";
import { useCart } from "./CartContext";
const RestaurantDetails = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurantData.find((res) => res.id === id);
  const { addToCart } = useCart();
  //console.log(restaurant);
  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }
  return (
    <>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{restaurant.name}</h1>

        <img
          src={restaurant.cloudinaryImageId}
          alt={restaurant.name}
          className="w-full h-64 object-cover rounded mb-6"
        />

        <p className="text-gray-700 mb-2">
          <strong>Rating:</strong> {restaurant.avgRating}
        </p>

        <p className="text-gray-700 mb-2">
          <strong>Cost for Two:</strong> {restaurant.costForTwoMessage}
        </p>

        <p className="text-gray-700 mb-4">
          <strong>Address:</strong> {restaurant.address}
        </p>

        <div className="mb-4">
          <strong className="block text-gray-800 mb-1">Cuisines:</strong>
          <ul className="list-disc list-inside text-gray-600">
            {restaurant.cuisines.map((cuisine, index) => (
              <li key={index}>{cuisine}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <strong className="block text-gray-800 mb-1">Menu:</strong>
          <ul className="list-disc list-inside text-gray-600">
            {restaurant.menu?.map((item, index) => {
              // since each object has only one key-value pair
              // const [id, name, price] = Object.entries(item);
              return (
                <li key={index} className="flex justify-between border-b pb-1">
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                  <button
                    className="bg-[blueviolet] text-white px-4 py-2 rounded hover:bg-violet-700 cursor-pointer"
                    onClick={() => addToCart(item, 1)}
                  >
                    Add
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaurantDetails;
