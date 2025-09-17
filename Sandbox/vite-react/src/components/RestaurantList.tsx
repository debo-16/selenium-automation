import RestaurantCards from "./RestaurantCards";
import type { Restaurant } from "./Types";
interface RestaurantListProps {
  resList: Restaurant[];
}
const RestaurantList: React.FC<RestaurantListProps> = ({ resList }) => {
  return (
    <>
      {resList.map((item) => (
        <RestaurantCards {...item} key={item.name} />
      ))}
    </>
  );
};

export default RestaurantList;
