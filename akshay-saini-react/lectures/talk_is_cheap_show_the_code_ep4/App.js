import React from "react";
import ReactDOM from "react-dom/client";

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
               <RestaurantCard resName="Raghavendra" cuisine="Tiffins,veg"></RestaurantCard>
               <RestaurantCard resName="Spicy Leaf" cuisine="Biryani,n-veg"></RestaurantCard>
               {/* <RestaurantCard></RestaurantCard>
               <RestaurantCard></RestaurantCard>
               <RestaurantCard></RestaurantCard>
               <RestaurantCard></RestaurantCard>
               <RestaurantCard></RestaurantCard>
               <RestaurantCard></RestaurantCard>
               <RestaurantCard></RestaurantCard>
               <RestaurantCard></RestaurantCard> */}
            </div>
        </div>
    )
}

const imgStyle = {
    height: '100px',
    width: '180px',
    'margin-bottom':'20px'
}


const RestaurantCard = (props) =>{
    console.log(props);
    const { resName , cuisine } = props; //destructuring
    return (
        <div className="resCard">
            <img style={imgStyle} src="https://i.ytimg.com/vi/B06WkYGHJp8/hqdefault.jpg" alt="restaurant.png"></img>
            <span> { resName} </span>
            <span> { cuisine }</span>
            <span> $6 for two</span>
            <span> Rating : ⭐⭐⭐⭐</span>
            <span> Hyderabad</span>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app-content'));
root.render(<App></App>)
