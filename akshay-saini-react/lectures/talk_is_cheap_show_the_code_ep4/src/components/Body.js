// import resList from "../utils/constants"
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./Shimmer";

const Body = () => {
    const [listOfRes, setListOfRes] = useState([]);

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async () => {
        let apiListOfRes = [];

        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await response.json();

        console.log(json);
        json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.forEach((restaurant) => {
        apiListOfRes.push(restaurant.info)});
        setListOfRes(apiListOfRes);
    }

    if(listOfRes.length === 0){
        return <ShimmerUI></ShimmerUI>
    }
    else {

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
}

export default Body;