import React, { useState } from "react";
import "./style.scss";
import { Card, CardImg, CardBody } from "reactstrap";
import { useNavigate } from "react-router-dom";

const ProfileCard = ({ images }) => {
  const [isfill, setIsfill] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Card className="card-wrap">
        <div className="card-img-wrapp">
          <CardImg top className="card-img" src={images} alt="Card image cap" />
          <div className="card-play-button">
            <img src="/images/play-btn.svg" alt="img" />
          </div>
        </div>
        <CardBody className="card-body">
          <div className="browseCardBottom">
            <div className="carDetail">
              <div className="cardLeft">
                <p className="theWeeknd">theWeeknd x Ariana G.</p>
                <div className="walkerWraper">
                  <span className="bay">by</span>
                  <span className="walkeMusic">alanwalkermusic</span>
                  <img src="/images/tick.svg" />
                </div>
              </div>
              <div className="cardRight">
                <div className="etherumWrapper">
                  <img src="/images/ethereum.svg" />
                  <p className="cont">195.5</p>
                </div>
              </div>
            </div>
            <hr className="w-100" />
            <div className="buyNowC">
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

export default ProfileCard;
