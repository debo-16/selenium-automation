export interface Restaurant {
  id: string;
  name: string;
  city: string;
  slugs: {
    restaurant: string;
    city: string;
  };
  cloudinaryImageId: string;
  address: string;
  locality: string;
  areaName: string;
  costForTwo: string;
  costForTwoMessage: string;
  cuisines: string[];
  avgRating: number;
  menu: {
    [x: string]: number;
  };
}
