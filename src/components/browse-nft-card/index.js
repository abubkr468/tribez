import React, { useState } from "react";
import "./style.scss";
import { Card, CardImg, CardBody } from "reactstrap";
import { useNavigate } from "react-router-dom";

const BrowseCard = ({ images }) => {
  const [isfill, setIsfill] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Card className="card-wrap">
        <div className="card-img-wrapp">
          <CardImg
            top
            className="card-imag"
            src={images}
            alt="Card image cap"
          />
          <div className="card-play-button">
            <img src="/images/play-btn.svg" alt="img" />
          </div>
        </div>
        <CardBody className="card-body-cont">
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
