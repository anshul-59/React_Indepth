import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>about us</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
    </div>
  );
};
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"
      ></img>
      <h3>{resObj.name}</h3>
      <h4>{resObj.cuisines}</h4>
    </div>
  );
};

const resObj = {
  id: "100139",
  name: "Sweet Bengal",
  cloudinaryImageId: "wjjghcbr95nkiirq2zg5",
  locality: "Kurla West",
  areaName: "Kurla",
  costForTwo: "₹150 for two",
  cuisines: ["Sweets", "Indian", "Snacks", "Desserts"],
  avgRating: 4.8,
  parentId: "1250",
  avgRatingString: "4.8",
  totalRatingsString: "1K+",
  sla: {
    deliveryTime: 34,
    lastMileTravel: 1.6,
    serviceability: "SERVICEABLE",
    slaString: "30-35 mins",
    lastMileTravelString: "1.6 km",
    iconType: "ICON_TYPE_EMPTY",
  },
  availability: {
    nextCloseTime: "2024-02-28 20:00:00",
    opened: true,
  },
  badges: {},
  isOpen: true,
  type: "F",
  badgesV2: {
    entityBadges: {
      imageBased: {},
      textBased: {},
      textExtendedBadges: {},
    },
  },
  aggregatedDiscountInfoV3: {
    header: "20% OFF",
    subHeader: "UPTO ₹50",
  },
  differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
      mediaType: "ADS_MEDIA_ENUM_IMAGE",
      lottie: {},
      video: {},
    },
  },
  reviewsSummary: {},
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: {},
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resObj} />
      </div>
    </div>
  );
};

const AppLayout = (children) => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
// ReactDOM.render(parent, document.getElementById("root"));
