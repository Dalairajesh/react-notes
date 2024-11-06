import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
  
  const Body = () => {

  // local State Variable - Super powerful variable
        const [listofRestaurants, setListofRestaurants] = useState([])
        const [filteredRestaurant, setFilteredRestaurant] = useState([])

        const[searchText, setSearchText] = useState("")
        

        //Whenever state variable update, react triggers a reconcilation cycle(re-renders the component)

        useEffect(() => {
          fetchData()
        },[])

        const fetchData = async () => {
          const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5800357&lng=77.32741709999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        
          const json = await data.json()
          console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
          // OPTIONAL CHAINING
          setListofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
          setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }

        // Conditional Rendering
        if(listofRestaurants.length === 0) {
          return( <Shimmer/>)
        }

    //Normal Variable
  //   let listofRestaurants = [{
     
  //      "info":{
  //     "id": "196341",
  //       "name": "Rangla Panjab",
  //       "cloudinaryImageId": "hxxasn2kf8g9eyi9eonq",
  //       "cuisines": [
  //         "North Indian",
  //         "South Indian",
  //         "Chinese",
  //         "Beverages",
  //         "Fast Food",
  //         "Desserts"
  //       ],
  //       "avgRating": 4.2,
  //   },

  //   "info":{
  //     "id": "196342",
  //       "name": "Dominos",
  //       "cloudinaryImageId": "hxxasn2kf8g9eyi9eonq",
  //       "cuisines": [
  //         "North Indian",
  //         "South Indian",
  //         "Chinese",
  //         "Beverages",
  //         "Fast Food",
  //         "Desserts"
  //       ],
  //       "avgRating": 3.6,
  //   },

  //   "info":{
  //     "id": "196343",
  //       "name": "Burger King",
  //       "cloudinaryImageId": "hxxasn2kf8g9eyi9eonq",
  //       "cuisines": [
  //         "North Indian",
  //         "South Indian",
  //         "Chinese",
  //         "Beverages",
  //         "Fast Food",
  //         "Desserts"
  //       ],
  //       "avgRating": 4.7,
  //   },
    
  
  // }]
    return (
      <div className="body">
        <div className="filter">
          <div className="search">
           <input type="text" className="search-box" value={searchText} onChange={(e) => {
              setSearchText(e.target.value)
             
           }}/>
           <button onClick={() => {
            // Filter the restaurant cards and update the UI
            // searchText
            console.log(searchText)
            const filteredRestaurant = listofRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()  ))
            
            setFilteredRestaurant(filteredRestaurant)
           }}> Search</button>
          </div>
          <button className="filter-btn" onClick={() => {
            // Filter logic
            const filteredList = listofRestaurants.filter((res) => res.info.avgRating > 4)
            console.log(filteredList)
            setListofRestaurants(filteredList)
          }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {
            filteredRestaurant.map((restaurant) => (<Link  key= {restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>)  
          )
          }
          
        </div>
      </div>
    )
  }

  export default Body;