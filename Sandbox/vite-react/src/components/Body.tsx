import RestaurantList from "./RestaurantList";
import Filter from "./Filter";
import { restaurantData } from "../data";
import { useState } from "react";
import type { Restaurant } from "./Types";

const Body = () => {
  const [resList, setResList] = useState<Restaurant[]>(restaurantData);
  const [searchValue, setSearchValue] = useState<string>("");
  const handleSearch = () => {
    console.log("chalra?");
    const filtered = restaurantData.filter((res) =>
      res.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setResList(filtered);
    console.log("Filtered:", filtered);
  };
  return (
    <div className="body-container flex-1 bg-gray-100 p-6">
      <div className="search-container flex justify-center w-full mb-10">
        <input
          id="search-input"
          name="search"
          type="text"
          placeholder="Search restaurants here"
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => {
            handleSearch();
          }}
          onKeyUp={(e) => {
            handleSearch();
          }}
        />
      </div>

      <div className="flex gap-6">
        {/* Filter: 20% width */}
        <div className="w-1/5 p-4">
          <Filter setResList={setResList} originalList={restaurantData} />
        </div>

        {/* RestaurantList: 80% width */}
        <div className="w-4/5">
          <div className="restaurant-container p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <RestaurantList resList={resList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
