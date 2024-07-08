import resList from "../utils/constants"
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
    const [listOfRes, setListOfRes] = useState(resList);

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async () => {
        console.log('ols res data');
        console.log(listOfRes);
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await response.json();

        setListOfRes( json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        console.log('hi new rest data');
        console.log(listOfRes);
        // console.log(json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    console.log( 'Body loaded');
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