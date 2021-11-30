import React from "react";
import "./style.scss";

import { useNavigate } from "react-router-dom";

const BrowseCard = () => {
  const navigate = useNavigate();
  return (
    <div className="browseCard">
      <div className="cardImage">
        <div className="play-button">
          <img src="/images/play-btn.svg" alt="img" />
        </div>
      </div>
      <div className="browseCardBottom">
        <div className="cardDetail">
          <div className="cardLeft">
            <p className="theWeekend">theWeeknd x Ariana G.</p>
            <div className="walkerWrapper">
              <span className="by">by</span>
              <span className="walkerMusic">alanwalkermusic</span>
              <img src="/images/tick.svg" />
            </div>
          </div>
          <div className="cardRight">
            <div className="etheriumWrapper">
              <img src="/images/ethereum.svg" />
              <p className="count">195.5</p>
            </div>
            <p className="price">$ 700,265</p>
          </div>
        </div>
        <div className="buyNow">
          <span onClick={() => navigate("/product-detail")}>BUY NOW</span>
          <img src="/images/heart.svg" />
        </div>
      </div>
    </div>
  );
};

export default BrowseCard;
