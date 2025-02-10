import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  // Check if the base data is available
  if (!resInfo || !resInfo.cards) {
    return <div>Loading...</div>;
  }

  // Extract restaurant info safely
  const restaurantInfo = resInfo.cards[2]?.card?.card?.info;
  if (!restaurantInfo) {
    return <div>Restaurant information not available</div>;
  }
  const { name, cuisines, costForTwoMessage } = restaurantInfo;

  // Extract menu info safely
  const menuCards = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  if (!menuCards || !menuCards[1]?.card?.card?.itemCards) {
    return <div>Menu not available</div>;
  }
  const { itemCards } = menuCards[1].card.card;
  // Fallback to an empty array if itemCards is undefined
  const items = itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      {cuisines && <p>{cuisines.join(", ")}</p>}
      <p>{costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {items.map(item => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
