import {CDN_URL} from "../utils/constants"

const StyleCard ={
    backgroundColor:"#f0f0f0"
  }
const RestaurantCard =(props) => {
  
    const { resData } = props
    const { name,cuisines, avgRating, deliveryTime} = resData?.info
    return(
      <div className="res-card" style={StyleCard}>
        <img
        className="res-logo"
         alt="res-logo"
        src={CDN_URL+resData.info.cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Rating</h4>
            <h4>{deliveryTime}</h4>
      </div>
    )
  }

export default RestaurantCard;  