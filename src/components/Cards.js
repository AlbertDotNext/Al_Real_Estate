import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Homes!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/01.jpg"
              text="Explore the Modern Home"
              label="$1,200,000"
              path="/services"
            />
            <CardItem
              src="images/03.jpg"
              text="Explore the Modern Home"
              label="$1,500,000"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/04.jpg"
              text="Explore the Modern Home"
              label="$1,680,000"
              path="/services"
            />
            <CardItem
              src="images/05.jpg"
              text="Explore the Modern Home"
              label="$1,800,000"
              path="/service"
            />
            <CardItem
              src="images/06.jpg"
              text="Explore the Modern Home"
              label="$1,200,000"
              path="/service"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
