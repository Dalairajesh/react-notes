import React from "react"
import ReactDOM from "react-dom/client"
/**
 * 
 * <div id="parent">
 * <div id="child">
 * <h1></h1>
 * <h2></h2>
 * 
 * </div>
 * <div id="child2">
 * <h1></h1>
 * <h2></h2>
 * 
 * </div>
 * </div>
 * 
 * ReactElement(Object) =>HTML(Browser undertsand)
 * 
 * CONFIG DRIVEN UI(IMPORTANT)
 */

/**
 * 
 * Header
 * -logo
 * -Nav Items
 * Body
 * -Search
 * -Restaurant Container
 *  -Restaurant Card
 *   -Img
 *   -Name of Res, Star Rating, cuisine, delivery tie
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 */

// const parent = React.createElement("div", { id: "parnet" }, [
//     React.createElement("h1", { id: "child" }, 
//         [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]),
//         React.createElement("h1", { id: "child2" }, 
//             [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")])
// ])
// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React")

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(parent)

//const heading = React.createElement("h1",{id:"heading"},"Namaste React")
//JSX(transpiled before it reaches the JS Engine)
// const heading =<h1  className="head" tabIndex="5">Namaste React using jsx</h1>

// const Title =() => {
//   return  <h1 className="head" tabIndex="5">Namaste React using JSX</h1>
// }


// React Component
 //class Based Component -> OLD WAY
 // function Based Component -> NEW WAY

//  const number = 100000
  //React Functional Component
  //  const HeadingComponent = () => {
  //   {number}
  //    return <h1 className="heading">Namaste React Functional Component</h1>
  //  }

   // Component Composition
//    const HeadingComponent2 = () => {
//    return <div id="container">
//     <Title/>
   
//      <h1 className="heading">Namaste React Functional Component</h1>
//      </div>
//   }



// const root = ReactDOM.createRoot(document.getElementById("root"))

// render component
// root.render(<HeadingComponent2/>)

//root.render(heading)

// Props are just normal argument of a function

const Header = () => {
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"/>
      </div>
      <div className="nav-items">
         <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
         </ul>
      </div>
    </div>
  )
}

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
      src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660,e_grayscale/"+resData.info.cloudinaryImageId}/>
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating} Rating</h4>
          <h4>{deliveryTime}</h4>
    </div>
  )
}

const resObj = [
  {
    "info": {
      "id": "196341",
      "name": "Rangla Panjab",
      "cloudinaryImageId": "hxxasn2kf8g9eyi9eonq",
      "locality": "Shankaracharya Nagar",
      "areaName": "Prasia Road",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "North Indian",
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts"
      ],
      "avgRating": 4.2,
      "parentId": "166894",
      "avgRatingString": "4.2",
      "totalRatingsString": "393",
      "sla": {
        "deliveryTime": 72,
        "lastMileTravel": 13.6,
        "serviceability": "SERVICEABLE",
        "slaString": "70-75 mins",
        "lastMileTravelString": "13.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-10-13 23:40:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹50 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-dd73f78e-5cbf-4d9e-b5ff-ca548e3e831c"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/rangla-panjab-shankaracharya-nagar-prasia-road-rest196341",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "870899",
      "name": "Paras Mishthan",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/15/9de3a721-5e96-41d2-bb3e-3cbeff47fbd3_870899.jpg",
      "locality": "Nagarpalika Complex",
      "areaName": "Chhindwara City",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Beverages",
        "Sweets",
        "Snacks"
      ],
      "avgRating": 3.8,
      "veg": true,
      "parentId": "510613",
      "avgRatingString": "3.8",
      "totalRatingsString": "22",
      "sla": {
        "deliveryTime": 54,
        "lastMileTravel": 11.2,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "11.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextOpenTimeMessage": "Opens next at 8 am, tomorrow"
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹59"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-dd73f78e-5cbf-4d9e-b5ff-ca548e3e831c"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/paras-mishthan-nagarpalika-complex-chhindwara-city-rest870899",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "672945",
      "name": "Annu's Kitchen's Queen Of Paratha",
      "cloudinaryImageId": "dd519572ed1bed19de47e94186e743ea",
      "locality": "Teacher's Colony",
      "areaName": "Chhindwara City",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "North Indian",
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts"
      ],
      "avgRating": 4.6,
      "parentId": "402960",
      "avgRatingString": "4.6",
      "totalRatingsString": "82",
      "sla": {
        "deliveryTime": 67,
        "lastMileTravel": 13.7,
        "serviceability": "SERVICEABLE",
        "slaString": "65-70 mins",
        "lastMileTravelString": "13.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextOpenTimeMessage": "Opens next at 8:30 am, tomorrow"
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-dd73f78e-5cbf-4d9e-b5ff-ca548e3e831c"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/annus-kitchens-queen-of-paratha-teachers-colony-chhindwara-city-rest672945",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "549580",
      "name": "Fresh Meal's",
      "cloudinaryImageId": "v5e3atn9tmtgcca1onnr",
      "locality": "Teacher's Colony",
      "areaName": "Chhindwara City",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "South Indian"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "15219",
      "avgRatingString": "4.3",
      "totalRatingsString": "81",
      "sla": {
        "deliveryTime": 73,
        "lastMileTravel": 13.6,
        "serviceability": "SERVICEABLE",
        "slaString": "70-75 mins",
        "lastMileTravelString": "13.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextOpenTimeMessage": "Opens next at 9 am, tomorrow"
      },
      "badges": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-dd73f78e-5cbf-4d9e-b5ff-ca548e3e831c"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/fresh-meals-teachers-colony-chhindwara-city-rest549580",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "830418",
      "name": "Indian Coffee House",
      "cloudinaryImageId": "2469fa88ee9b0b5d1366ba88f2a7fa7f",
      "locality": "Chhindwara City",
      "areaName": "Khajri Chowk",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Chinese",
        "Fast Food",
        "Beverages"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "106448",
      "avgRatingString": "4.4",
      "totalRatingsString": "79",
      "sla": {
        "deliveryTime": 50,
        "lastMileTravel": 11.2,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "11.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextOpenTimeMessage": "Opens next at 9 am, tomorrow"
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-dd73f78e-5cbf-4d9e-b5ff-ca548e3e831c"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/indian-coffee-house-city-khajri-chowk-rest830418",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "429061",
      "name": "Deccan Dosa",
      "cloudinaryImageId": "mtr8w6msayubnigqmbkn",
      "locality": "Parasia Road",
      "areaName": "Chhindwara Locality",
      "costForTwo": "₹280 for two",
      "cuisines": [
        "South Indian"
      ],
      "avgRating": 2.5,
      "veg": true,
      "parentId": "239338",
      "avgRatingString": "2.5",
      "totalRatingsString": "3",
      "sla": {
        "deliveryTime": 59,
        "lastMileTravel": 11.1,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "11.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextOpenTimeMessage": "Opens next at 9 am, tomorrow"
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-dd73f78e-5cbf-4d9e-b5ff-ca548e3e831c"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/deccan-dosa-parasia-road-chhindwara-locality-rest429061",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "795047",
      "name": "New Radhey Shyam Choule Bhature Delhi Wala",
      "cloudinaryImageId": "0adf25c57357161b20c11281d8a443e6",
      "locality": "VIP Road",
      "areaName": "Mohan Nagar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Snacks",
        "Chinese"
      ],
      "avgRating": 2.9,
      "veg": true,
      "parentId": "475337",
      "avgRatingString": "2.9",
      "totalRatingsString": "3",
      "sla": {
        "deliveryTime": 65,
        "lastMileTravel": 11.3,
        "serviceability": "SERVICEABLE",
        "slaString": "65-70 mins",
        "lastMileTravelString": "11.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextOpenTimeMessage": "Opens next at 9 am, tomorrow"
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-dd73f78e-5cbf-4d9e-b5ff-ca548e3e831c"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/new-radhey-shyam-choule-bhature-delhi-wala-vip-road-mohan-nagar-rest795047",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "344937",
      "name": "Myfit Meals - Meal Prep Co.",
      "cloudinaryImageId": "smo2yv6budwe0ciye1ry",
      "locality": "Teacher's Colony",
      "areaName": "Chhindwara Locality",
      "costForTwo": "₹220 for two",
      "cuisines": [
        "Continental",
        "Salads"
      ],
      "avgRating": 4.7,
      "parentId": "142688",
      "avgRatingString": "4.7",
      "totalRatingsString": "14",
      "sla": {
        "deliveryTime": 69,
        "lastMileTravel": 13.3,
        "serviceability": "SERVICEABLE",
        "slaString": "65-70 mins",
        "lastMileTravelString": "13.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextOpenTimeMessage": "Opens next at 9 am, tomorrow"
      },
      "badges": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹50 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-dd73f78e-5cbf-4d9e-b5ff-ca548e3e831c"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/chhindwara/myfit-meals-meal-prep-co-teachers-colony-chhindwara-locality-rest344937",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
]

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          resObj.map((restaurant) => <RestaurantCard key= {restaurant.info.id} resData={restaurant}/>)
        }
        
      </div>
    </div>
  )
}

const AppLayout = () => {
   return(
    <div className="app">
     <Header/>
     <Body/>
    </div>
   )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)