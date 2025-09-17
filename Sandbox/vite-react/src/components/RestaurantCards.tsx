import { Link } from "react-router-dom";

const RestaurantCards = (props: any) => {
  return (
    <Link to={`/restaurant/${props.id}`} className="block">
      <div className="h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md flex flex-col items-center p-4 space-y-4">
        <div className="w-full">
          <img
            alt="restaurant-logo"
            className="w-full h-48 object-cover rounded cursor-pointer"
            src={props.cloudinaryImageId}
          />
        </div>

        <div className="text-center">
          <h1 className="text-lg font-semibold">{props.name}</h1>
        </div>

        <div>
          <p className="text-gray-600">{props.avgRating}</p>
        </div>

        <div className="w-full">
          <button className="w-full bg-[blueviolet] text-white px-4 py-2 rounded hover:bg-violet-700 cursor-pointer">
            View
          </button>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCards;
