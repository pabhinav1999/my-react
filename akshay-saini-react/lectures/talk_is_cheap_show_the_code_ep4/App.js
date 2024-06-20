import React from "react";
import ReactDOM from "react-dom/client";
import { resList,res_img_base_url } from "./constants";

const App = () => {
    return (
        <div className="app-container">
            <Header></Header>
            <Content></Content>
            <h1>footer</h1>
        </div>
    )
}

const Header = () => {
   return (
    <div className="header">
         <div className="brand">
            <img src="https://www.netsolutions.com/insights/wp-content/uploads/2021/11/essential-feature-of-building-an-on-demand-food-ordering-app.jpg" alt="brand.png"></img>
            <span className="brand-text">Eat Good</span>
         </div>
       <div className="navItems">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
       </div>

    </div>
   )
}


const Content = () => {
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

const imgStyle = {
    height: '100px',
    width: '180px',
    marginBottom:'20px'
}


const RestaurantCard = (props) =>{
    const { restaurant } = props;
    return (
        <div className="resCard">
            <img style={imgStyle} src={`${res_img_base_url}${restaurant.cloudinaryImageId}`} alt="restaurant.png"></img>
            <span> { restaurant.name } </span>
            <span> { restaurant.cuisines.join(',') }</span>
            <span> { restaurant.costForTwo }</span>
            <span> { restaurant.avgRating }</span>
            <span> { restaurant.locality }</span>
            <span> { restaurant.areaName }</span>
            <span> { restaurant.sla.slaString }</span>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app-content'));
root.render(<App></App>)
