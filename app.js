import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return(
        <div className="header">
            <div className="logo-contaainer">
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
};

const RestaurantCard = (props) => {
    const {resData} = props;
    if (!resData?.info) {
        return <div>Data not available</div>;
    }
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo}= resData?.info;
    return(
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId }/> 
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
};

const resList = [
    {
        "info": {
          "id": "10575",
          "name": "Pizza Hut",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/5b9c53df-e0cb-48fc-ac31-f02735592edc_10575.jpg",
          "locality": "Richmond Town",
          "areaName": "Shanti Nagar",
          "costForTwo": "₹600 for two",
          "cuisines": [
            "Pizzas"
          ],
          "avgRating": 4.3,
          "parentId": "721",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 2.5,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "2.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-12-14 01:00:00",
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
            "header": "ITEMS",
            "subHeader": "AT ₹99"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
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
              "rating": "4.1",
              "ratingCount": "1.8K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-c26aa57e-e77a-4237-89e5-3b699214881e"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/bangalore/pizza-hut-richmond-town-shanti-nagar-rest10575",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "5938",
          "name": "Burger King",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5938.JPG",
          "locality": "Tasker Town",
          "areaName": "Shivaji Nagar",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "avgRating": 4.4,
          "parentId": "166",
          "avgRatingString": "4.4",
          "totalRatingsString": "37K+",
          "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 2.8,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "2.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-12-14 03:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Burger.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Burger.png"
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
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
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
          "context": "seo-data-c26aa57e-e77a-4237-89e5-3b699214881e"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/bangalore/burger-king-tasker-town-shivaji-nagar-rest5938",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "69876",
          "name": "Subway",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/0f27fbff-1e49-4161-a0a5-848062423b76_69876.JPG",
          "locality": "UB City",
          "areaName": "Central Bangalore",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "sandwich",
            "Salads",
            "wrap",
            "Healthy Food"
          ],
          "avgRating": 4.3,
          "parentId": "2",
          "avgRatingString": "4.3",
          "totalRatingsString": "3.7K+",
          "sla": {
            "deliveryTime": 39,
            "lastMileTravel": 0.5,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "0.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-12-13 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
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
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹299",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
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
              "rating": "3.8",
              "ratingCount": "282"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-c26aa57e-e77a-4237-89e5-3b699214881e"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/bangalore/subway-ub-city-central-bangalore-rest69876",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "588619",
          "name": "KFC",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4398bfb2-6948-484a-9613-2d7628a2457a_588619.JPG",
          "locality": "Brigade Road",
          "areaName": "Central Bangalore",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Fast Food",
            "Rolls & Wraps"
          ],
          "avgRating": 4.4,
          "parentId": "547",
          "avgRatingString": "4.4",
          "totalRatingsString": "2.1K+",
          "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 2.4,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "2.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-12-13 23:00:00",
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
            "header": "20% OFF",
            "subHeader": "ABOVE ₹2999",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
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
              "rating": "4.0",
              "ratingCount": "344"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-c26aa57e-e77a-4237-89e5-3b699214881e"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/bangalore/kfc-brigade-road-central-bangalore-rest588619",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "23847",
          "name": "Domino's Pizza",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/a6dfc662-f040-4e87-b5e4-daef000ddedf_23847.jpg",
          "locality": "MG Road",
          "areaName": "Brigade Road",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
          ],
          "avgRating": 4.4,
          "parentId": "2456",
          "avgRatingString": "4.4",
          "totalRatingsString": "5.9K+",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 2.4,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "2.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-12-13 22:59:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Pizza.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Pizza.png"
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
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹1199",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
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
              "rating": "4.0",
              "ratingCount": "4.8K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-c26aa57e-e77a-4237-89e5-3b699214881e"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/bangalore/dominos-pizza-mg-road-brigade-road-rest23847",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "810943",
          "name": "Baskin Robbins - Ice Cream Desserts",
          "cloudinaryImageId": "6d82853686a08a41393caa841f2015ec",
          "locality": "CENTRE POINT",
          "areaName": "RESIDENCY ROAD",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Desserts",
            "Ice Cream"
          ],
          "avgRating": 4.7,
          "veg": true,
          "parentId": "5588",
          "avgRatingString": "4.7",
          "totalRatingsString": "109",
          "sla": {
            "deliveryTime": 38,
            "lastMileTravel": 2.4,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "2.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-12-14 01:00:00",
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
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
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
          "context": "seo-data-c26aa57e-e77a-4237-89e5-3b699214881e"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/bangalore/baskin-robbins-ice-cream-desserts-centre-point-residency-road-rest810943",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "440151",
          "name": "Home Plate by EatFit",
          "cloudinaryImageId": "1d578bb732e03c6f591790eb7d2d88e2",
          "locality": "VASANTHA NAGAR",
          "areaName": "Cunningham Road",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "North Indian",
            "Home Food",
            "Healthy Food",
            "Indian",
            "Punjabi",
            "South Indian",
            "Rajasthani",
            "Maharashtrian",
            "Snacks",
            "Desserts"
          ],
          "avgRating": 4.3,
          "parentId": "301197",
          "avgRatingString": "4.3",
          "totalRatingsString": "629",
          "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-12-14 01:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
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
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹99"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
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
          "context": "seo-data-c26aa57e-e77a-4237-89e5-3b699214881e"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/bangalore/home-plate-by-eatfit-vasantha-nagar-cunningham-road-rest440151",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "643832",
          "name": "WeFit - Protein Bowls, Salads & Sandwiches",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/30/59e251dc-b6d9-4566-97c3-931b83ef7061_643832.JPG",
          "locality": "Langford Road",
          "areaName": "Santhinagar",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Healthy Food",
            "Salads",
            "Keto",
            "Snacks"
          ],
          "avgRating": 4.7,
          "parentId": "355285",
          "avgRatingString": "4.7",
          "totalRatingsString": "567",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 2.6,
            "serviceability": "SERVICEABLE",
            "slaString": "20-30 mins",
            "lastMileTravelString": "2.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-12-14 02:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "brand",
                "fontColor": "#7E808C"
              }
            ]
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
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "brand"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹299",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
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
          "context": "seo-data-c26aa57e-e77a-4237-89e5-3b699214881e"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/bangalore/wefit-protein-bowls-salads-and-sandwiches-langford-road-santhinagar-rest643832",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "750396",
          "name": "Daily Kitchen - Homely Meals",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750396.JPG",
          "locality": "Lakshmi Road",
          "areaName": "Langford Road",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Home Food",
            "Indian",
            "North Indian",
            "Thalis"
          ],
          "avgRating": 4.5,
          "parentId": "444382",
          "avgRatingString": "4.5",
          "totalRatingsString": "490",
          "sla": {
            "deliveryTime": 15,
            "lastMileTravel": 2.6,
            "serviceability": "SERVICEABLE",
            "slaString": "10-20 mins",
            "lastMileTravelString": "2.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-12-14 02:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
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
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹299",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
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
          "context": "seo-data-c26aa57e-e77a-4237-89e5-3b699214881e"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/bangalore/daily-kitchen-homely-meals-lakshmi-road-langford-road-rest750396",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "503002",
          "name": "NH1 Bowls - Highway To North",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/aea607a6-5ce6-4fe6-b7d1-7ba2bacdc647_503002.jpg",
          "locality": "Lakshmi Road",
          "areaName": "Shanti Nagar",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "North Indian",
            "Punjabi",
            "Home Food"
          ],
          "avgRating": 4.7,
          "parentId": "22452",
          "avgRatingString": "4.7",
          "totalRatingsString": "666",
          "sla": {
            "deliveryTime": 20,
            "lastMileTravel": 2.6,
            "serviceability": "SERVICEABLE",
            "slaString": "15-25 mins",
            "lastMileTravelString": "2.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-12-14 02:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
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
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹299",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
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
          "context": "seo-data-c26aa57e-e77a-4237-89e5-3b699214881e"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/bangalore/nh1-bowls-highway-to-north-lakshmi-road-shanti-nagar-rest503002",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "43836",
          "name": "McDonald's",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg",
          "locality": "MG Road",
          "areaName": "Ashok Nagar",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
          ],
          "avgRating": 4.4,
          "parentId": "630",
          "avgRatingString": "4.4",
          "totalRatingsString": "25K+",
          "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 1.3,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "1.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-12-14 02:45:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Burger.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Burger.png"
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
            "subHeader": "AT ₹179"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
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
          "context": "seo-data-c26aa57e-e77a-4237-89e5-3b699214881e"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/bangalore/mcdonalds-mg-road-ashok-nagar-rest43836",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "503003",
          "name": "ZAZA Mughal Biryani",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/d26bdfca-3b50-41ea-87e1-e7f9a6b0581d_503003.jpg",
          "locality": "Lakshmi Nagar Road",
          "areaName": "Shanti Nagar",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Awadhi"
          ],
          "avgRating": 4.5,
          "parentId": "22473",
          "avgRatingString": "4.5",
          "totalRatingsString": "481",
          "sla": {
            "deliveryTime": 20,
            "lastMileTravel": 2.6,
            "serviceability": "SERVICEABLE",
            "slaString": "15-25 mins",
            "lastMileTravelString": "2.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-12-14 02:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
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
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹299",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
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
          "context": "seo-data-c26aa57e-e77a-4237-89e5-3b699214881e"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/bangalore/zaza-mughal-biryani-lakshmi-nagar-road-shanti-nagar-rest503003",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "17376",
          "name": "Glen's Bakehouse",
          "cloudinaryImageId": "m6jahioyu7zrodei5pcq",
          "locality": "Lavelle Road",
          "areaName": "Ashok Nagar",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Desserts",
            "Bakery",
            "Beverages",
            "Continental",
            "Italian"
          ],
          "avgRating": 4.7,
          "parentId": "3220",
          "avgRatingString": "4.7",
          "totalRatingsString": "25K+",
          "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 0.5,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "0.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-12-13 23:59:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {

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
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
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
              "rating": "4.4",
              "ratingCount": "10K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          "context": "seo-data-c26aa57e-e77a-4237-89e5-3b699214881e"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/bangalore/glens-bakehouse-lavelle-road-ashok-nagar-rest17376",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "502999",
          "name": "BOX8 - Desi Meals",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/261b5751-d567-4d3b-9045-c8e8947bbdb3_502999.jpg",
          "locality": "Lakshmi Road",
          "areaName": "Shanti Nagar",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "North Indian",
            "Biryani",
            "Thalis",
            "Home Food"
          ],
          "avgRating": 4.6,
          "parentId": "10655",
          "avgRatingString": "4.6",
          "totalRatingsString": "1.9K+",
          "sla": {
            "deliveryTime": 20,
            "lastMileTravel": 2.6,
            "serviceability": "SERVICEABLE",
            "slaString": "15-25 mins",
            "lastMileTravelString": "2.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-12-14 02:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Green%20Dot%20Awards/Best%20In%20Paneer.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Paneer.png"
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
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹299",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
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
          "context": "seo-data-c26aa57e-e77a-4237-89e5-3b699214881e"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/bangalore/box8-desi-meals-lakshmi-road-shanti-nagar-rest502999",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "622202",
          "name": "MOJO Pizza - 2X Toppings",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/12/e7ccd786-be92-4743-8e0c-f3d3a577d48f_622202.jpg",
          "locality": "Langford Road",
          "areaName": "Shantinagar",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Pizzas",
            "Italian",
            "Fast Food",
            "Desserts"
          ],
          "avgRating": 4.6,
          "parentId": "11329",
          "avgRatingString": "4.6",
          "totalRatingsString": "559",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 2.6,
            "serviceability": "SERVICEABLE",
            "slaString": "20-30 mins",
            "lastMileTravelString": "2.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-12-14 02:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
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
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹299",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
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
          "context": "seo-data-c26aa57e-e77a-4237-89e5-3b699214881e"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/bangalore/mojo-pizza-2x-toppings-langford-road-shantinagar-rest622202",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "440123",
          "name": "Great Indian Khichdi by EatFit",
          "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
          "locality": "VASANTHA NAGAR",
          "areaName": "Cunningham Road",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Home Food",
            "Indian",
            "North Indian",
            "Healthy Food",
            "Snacks",
            "Desserts",
            "Rajasthani",
            "South Indian",
            "Maharashtrian",
            "Sweets"
          ],
          "avgRating": 4.6,
          "veg": true,
          "parentId": "319582",
          "avgRatingString": "4.6",
          "totalRatingsString": "1.8K+",
          "sla": {
            "deliveryTime": 31,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-12-14 01:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Green%20Dot%20Awards/Best%20In%20Vegan.png",
                "description": "Delivery!"
              },
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Vegan.png"
                    }
                  },
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
            "subHeader": "AT ₹99"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
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
          "context": "seo-data-c26aa57e-e77a-4237-89e5-3b699214881e"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/bangalore/great-indian-khichdi-by-eatfit-vasantha-nagar-cunningham-road-rest440123",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "681612",
          "name": "LeanCrust Pizza- ThinCrust Experts",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/14414940-565f-4b31-8880-eb44478a5ec0_681612.jpg",
          "locality": "Lakshmi Road",
          "areaName": "Shanti Nagar",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Pizzas",
            "Italian",
            "Desserts"
          ],
          "avgRating": 4.7,
          "parentId": "11216",
          "avgRatingString": "4.7",
          "totalRatingsString": "326",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 2.6,
            "serviceability": "SERVICEABLE",
            "slaString": "20-30 mins",
            "lastMileTravelString": "2.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-12-14 02:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
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
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹299",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
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
          "context": "seo-data-c26aa57e-e77a-4237-89e5-3b699214881e"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/bangalore/leancrust-pizza-thincrust-experts-lakshmi-road-shanti-nagar-rest681612",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "558773",
          "name": "HRX by EatFit",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/4/6bfbe272-162b-4082-a6a3-9bce1454ba7a_558773.JPG",
          "locality": "VASANTHA NAGAR",
          "areaName": "Cunningham Road",
          "costForTwo": "₹450 for two",
          "cuisines": [
            "Healthy Food",
            "Salads",
            "Burgers"
          ],
          "avgRating": 4.6,
          "parentId": "335529",
          "avgRatingString": "4.6",
          "totalRatingsString": "642",
          "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-12-14 01:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "brand",
                "fontColor": "#7E808C"
              }
            ]
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
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "brand"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹139"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
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
          "context": "seo-data-c26aa57e-e77a-4237-89e5-3b699214881e"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/bangalore/hrx-by-eatfit-vasantha-nagar-cunningham-road-rest558773",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "146304",
          "name": "Hyderabad Biryaani House",
          "cloudinaryImageId": "taavokxehqfaugbzzhzk",
          "locality": "Victoria Road",
          "areaName": "Ashok Nagar",
          "costForTwo": "₹499 for two",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Chinese",
            "Tandoor"
          ],
          "avgRating": 4.4,
          "parentId": "2403",
          "avgRatingString": "4.4",
          "totalRatingsString": "8.6K+",
          "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 2.7,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "2.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-12-13 16:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {

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
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
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
          "context": "seo-data-c26aa57e-e77a-4237-89e5-3b699214881e"
        },
        "cta": {
          "link": "https://www.swiggy.com/city/bangalore/hyderabad-biryaani-house-victoria-road-ashok-nagar-rest146304",
          "type": "WEBLINK"
        }
      }
];
const Body = () => {
    return(
        <><div className="search">
            Search
        </div>
        <div className="res-container">
            {
              resList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)  
            }                   
            </div></>
    )
};


const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
   
