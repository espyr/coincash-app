import React from "react";
import Cart from "../../assets/Cart.svg";
import Page from "../../assets/Page.svg";
import airplane from "../../assets/airplane.svg";
import OptionsItem from "./OptionsItem";

const Options: React.FC = () => {
  const optionsList = [
    {
      icon: airplane,
      text: "You can book tickets",
      highlight: "book",
    },
    {
      icon: Cart,
      text: "You can buy groceries",
      highlight: "buy",
    },
    {
      icon: Page,
      text: "You can pay your bills",
      highlight: "pay",
    },
  ];

  return (
    <div className="options" >

      {optionsList.map((option, index) => (
        <OptionsItem
        key={index}
        icon={option.icon}
        text={option.text}
        highlight={option.highlight}
        />
      ))}
    </div>
  );
};

export default Options;
