import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    if (!resData?.info) {
        return <div>Data not available</div>;
    }
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla}= resData?.info;
    return(
        <div className="m-4 p-4 w-[220px] bg-gray-200 rounded-lg hover:bg-gray-300">
            <img className=" rounded-lg" alt="res-logo" src= {CDN_URL + cloudinaryImageId }/> 
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla?.slaString}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
};

export default RestaurantCard;