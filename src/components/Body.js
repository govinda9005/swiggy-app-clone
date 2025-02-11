import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING", { mode: 'cors' });


        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        if (listOfRestaurants.length === 0) {
            return <Shimmer/>
        }
    };

    const onlineStatus = useOnlineStatus();

        if(onlineStatus === false) 
            return(
        <h1>
            Looks like you're offline!! please check your internet connection;
        </h1>
        );
   

    return(
        <><div className="filte flex">
            <div className="m-4 p-4">
                <input type="text" className=" border border-solid border-black rounded-md" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value)
                }}/>
                <button className=" px-4 py-1 bg-green-100 m-4 rounded-lg" onClick={() => {
                    const filteredRestaurant = listOfRestaurants.filter((res) =>
                        res.info.name.includes(searchText)
                    );
                    setListOfRestaurants(filteredRestaurant);
                }}>Search</button>
            </div>
            <div className="m-4 p-4 flex items-center"> 
            <button className="px-4 py-1 bg-gray-100 rounded-lg" onClick={() => { 
                const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
                setListOfRestaurants(filteredList);
            }}>
                Top Rated Restaurant</button>
            </div>
        </div>
        <div className="flex flex-wrap">
            {
              listOfRestaurants.map((restaurant) =>( <Link key={restaurant.info.id} to = {"/restaurants/"+ restaurant.info.id}><RestaurantCard  resData={restaurant}/></Link>))  
            }                   
            </div></>
    )
};

export default Body;