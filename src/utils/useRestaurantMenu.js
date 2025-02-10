import {useEffect, useState} from "react";
import { MENU_API } from "../utils/constants";
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(MENU_API + resId);
            const json = await response.json();
            setResInfo(json.data);
          } catch (error) {
            console.error("Error fetching restaurant menu:", error);
          }
        };
    
        if (resId) {
          fetchData();
        }
      }, [resId]);
    
      return resInfo;
    };
    
    export default useRestaurantMenu;