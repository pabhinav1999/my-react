import resList from "../utils/constants"
import RestaurantCard from "./RestaurantCard"

const Body = () => {
    return (
        <div className="appBody">
            <div className="search">
                <button>Search</button>
            </div>
            <div className="res-container">
                { resList.map((restaurant) => { return <RestaurantCard key={restaurant.id} restaurant={restaurant}></RestaurantCard> }) }
            </div>
        </div>
    )
}

export default Body;