//import React, { useState } from "react";
//import { restaurantData } from "../data";
import type { Restaurant } from "./Types";
interface FilterProps {
  setResList: React.Dispatch<React.SetStateAction<Restaurant[]>>;
  originalList: Restaurant[];
}
const Filter: React.FC<FilterProps> = ({ setResList, originalList }) => {
  const showResult = (e: any, str: string, field: string) => {
    const checked = (e.target as HTMLInputElement).checked;
    console.log("field", field);
    if (checked) {
      const newList = originalList.filter(
        field == "locality"
          ? (res) => res.locality.toLowerCase() === str.toLocaleLowerCase()
          : (res) => res.cuisines.includes(str)
      );
      setResList(newList);
    } else {
      setResList(originalList);
    }
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-xl font-semibold mb-4">Filters</h1>

      {/* Rating Filter */}
      <div className="mb-6">
        <p className="font-medium mb-2">Rating</p>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="radio"
              id="rating-3"
              name="rating"
              className="mr-2"
              onClick={(e) => {
                const checked = (e.target as HTMLInputElement).checked;
                if (checked) {
                  const newList = originalList.filter(
                    (res) => res.avgRating < 4
                  );
                  setResList(newList);
                } else {
                  setResList(originalList);
                }
              }}
            />
            <label htmlFor="rating-3">4-</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="rating-4"
              name="rating"
              className="mr-2"
              onClick={(e) => {
                const checked = (e.target as HTMLInputElement).checked;
                if (checked) {
                  const newList = originalList.filter(
                    (res) => res.avgRating > 4
                  );
                  setResList(newList);
                } else {
                  setResList(originalList);
                }
                //showResult(e, "4", avgRating);
              }}
            />
            <label htmlFor="rating-4">4+</label>
          </div>
        </div>
      </div>

      {/* Cuisine Filter */}
      <div className="mb-6">
        <p className="font-medium mb-2">Cuisines</p>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="south-indian"
              className="mr-2"
              onClick={(e) => {
                showResult(e, "South-Indian", "cuisines");
              }}
            />
            <label htmlFor="south-indian">South Indian</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="north-indian"
              className="mr-2"
              onClick={(e) => {
                showResult(e, "North-Indian", "cuisines");
              }}
            />
            <label htmlFor="north-indian">North Indian</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="chinese"
              className="mr-2"
              onClick={(e) => {
                showResult(e, "Chinese", "cuisines");
              }}
            />
            <label htmlFor="chinese">Chinese</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="tandoor"
              className="mr-2"
              onClick={(e) => {
                showResult(e, "Tandoor", "cuisines");
              }}
            />
            <label htmlFor="tandoor">Tandoor</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="biryani"
              className="mr-2"
              onClick={(e) => {
                showResult(e, "Biryani", "cuisines");
              }}
            />
            <label htmlFor="biryani">Biryani</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="thalis"
              className="mr-2"
              onClick={(e) => {
                showResult(e, "Thalis", "cuisines");
              }}
            />
            <label htmlFor="thalis">Thalis</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="seafood"
              className="mr-2"
              onClick={(e) => {
                showResult(e, "Seafood", "cuisines");
              }}
            />
            <label htmlFor="seafood">Seafood</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="bengali"
              className="mr-2"
              onClick={(e) => {
                showResult(e, "Bengali", "cuisines");
              }}
            />
            <label htmlFor="bengali">Bengali</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="beverages"
              className="mr-2"
              onClick={(e) => {
                showResult(e, "Beverages", "cuisines");
              }}
            />
            <label htmlFor="beverages">Beverages</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="indonesian"
              className="mr-2"
              onClick={(e) => {
                showResult(e, "Indonesian", "cuisines");
              }}
            />
            <label htmlFor="indonesian">Indonesian</label>
          </div>
        </div>
      </div>

      {/* Locality Filter */}
      <div>
        <p className="font-medium mb-2">Locality</p>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="gautam-buddha-nagar"
              className="mr-2"
              onClick={(e) => {
                showResult(e, "Gautam Buddha Nagar", "locality");
              }}
            />
            <label htmlFor="gautam-buddha-nagar">Gautam Buddha Nagar</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="sector-72"
              className="mr-2"
              onClick={(e) => {
                showResult(e, "Sector 72", "locality");
              }}
            />
            <label htmlFor="sector-72">Sector 72</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="sector-62"
              className="mr-2"
              onClick={(e) => {
                showResult(e, "Sector 62", "locality");
              }}
            />
            <label htmlFor="sector-62">Sector 62</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="crossing-republic"
              className="mr-2"
              onClick={(e) => {
                showResult(e, "Crossing Republic", "locality");
              }}
            />
            <label htmlFor="crossing-republic">Crossing Republic</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="electronic-city-noida"
              className="mr-2"
              onClick={(e) => {
                showResult(e, "Electronic City Noida", "locality");
              }}
            />
            <label htmlFor="electronic-city-noida">Electronic City Noida</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
