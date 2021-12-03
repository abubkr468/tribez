import React from "react";
import "./style.scss";

const NFTCollectionCard = ({ image, bg }) => {
  return (
    <div className="revolutionCard" style={{ backgroundColor: bg }}>
      <div className="cardImage">
        <img src={image} />
        <div className="play-button">
          <img src="/images/play-btn.svg" alt="img" />
        </div>
      </div>
      <div className="cardBotom">
        <div className="cardDetail">
          <div className="cardLeft">
            <p className="theWeekend">theWeeknd x Ariana G.</p>
            <div className="walkerWrapper">
              <span className="by">by</span>
              <span className="walkerMusic">alanwalkermusic</span>
              <img src="/images/nft-tick.svg" />
            </div>
          </div>
          <div className="cardRight">
            <div className="etheriumWrapper">
              <img src="/images/nft_ethereum.svg" />
              <p className="count">195.5</p>
            </div>
            <p className="price">$ 700,265</p>
          </div>
        </div>
        <div className="buyNow">BUY NOW</div>
      </div>
    </div>
  );
};

export default NFTCollectionCard;
