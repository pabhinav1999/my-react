import { RES_CDN_URL } from "../utils/constants";

const imgStyle = {
    height: '100px',
    width: '180px',
    marginBottom:'20px'
}

const RestaurantCard = (props) =>{
    const { restaurant } = props;
    return (
        <div className="resCard">
            <img style={imgStyle} src={`${RES_CDN_URL}${restaurant.cloudinaryImageId}`} alt="restaurant.png"></img>
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

export default RestaurantCard;
