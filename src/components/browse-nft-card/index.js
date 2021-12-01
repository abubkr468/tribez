import React, { useState } from "react";
import "./style.scss";
import { Card, CardImg, CardBody } from "reactstrap";
import { useNavigate } from "react-router-dom";

const BrowseCard = () => {
  const [isfill, setIsfill] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Card className="card-wrap">
        <div className="card-img-wrapp">
          <CardImg
            top
            className="card-img"
            src="/images/browse-card.svg"
            alt="Card image cap"
          />
          <div className="card-play-button">
            <img src="/images/play-btn.svg" alt="img" />
          </div>
        </div>
        <CardBody>
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
            <hr className="w-100" />
            <div className="buyNow">
              <span onClick={() => navigate("/product-detail")}>BUY NOW</span>
              <img
                src={!isfill ? "/images/heart.svg" : "/images/heart-filled.png"}
                width="15px"
                height="13px"
                alt="img"
                onClick={() => setIsfill(!isfill)}
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default BrowseCard;
