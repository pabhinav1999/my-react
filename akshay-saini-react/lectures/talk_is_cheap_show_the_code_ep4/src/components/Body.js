import resList from "../utils/constants"
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
    const [listOfRes, setListOfRes] = useState(resList);
    return (
        <div className="appBody">
            <div className="search">
                <button className="filter-btn" onClick={() => {
                    let topRatedRestaurants = resList.filter((restaurant) => restaurant.avgRating >  4.4);
                    setListOfRes(topRatedRestaurants);
                }}> Top rated restaurants</button>
            </div>
            <div className="res-container">
                { listOfRes. map((restaurant) => { return <RestaurantCard key={restaurant.id} restaurant={restaurant}></RestaurantCard> }) }
            </div>
        </div>
    )
}

export default Body;