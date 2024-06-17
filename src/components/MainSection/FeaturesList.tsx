import React from "react";
import shop from "../../assets/shop.png";
import zero from "../../assets/zero.png";

import FeaturesItem from "./FeaturesItem";

const FeaturesList: React.FC = () => {
  const optionsList = [
    {
      photo: shop,
      text: "Shop anywhere ",
      secondaryText: "The easiest way to use your cryptocurrencies for everyday purchases.  ",
    },
    {
      photo: zero,
      text: "Zero fees",
      secondaryText: "The easiest way to use your cryptocurrencies for everyday purchases.  ",
    },
  ];

  return (
    <div className="features"
    >
      {optionsList.map((feature, index) => (
        <FeaturesItem
          key={index}
          photo={feature.photo}
          text={feature.text}
          secondaryText={feature.secondaryText}
          reverse={index % 2 !== 0} // Alternate layout for odd/even indices
        />
      ))}
    </div>
  );
};

export default FeaturesList;
