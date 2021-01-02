import React from "react";
import "./style.css";

function StoryCard({ title, subtitle, imgName }) {
  let images = {
    Card1: require(`../../assets/images/card-1.png`).default,
    Card2: require(`../../assets/images/card-2.png`).default,
    Card3: require(`../../assets/images/card-3.png`).default,
  };
  return (
    <div className="story__card__container">
      <div className="story__card">
        <div className="story__card__content">
          <h1 className="story__card__title">{title}</h1>
          <h4 className="story__card__subtitle">{subtitle}</h4>
        </div>
        <div className="story__card__img">
          <img src={images[imgName]} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default StoryCard;
