import React from "react";
import { Button } from "react-bootstrap";
import { Row, Col } from "reactstrap";
import "./style.scss";
import { useNavigate } from "react-router-dom";

export const NewRevolution = () => {
  const navigate = useNavigate();

  return (
    <div className="revolutionWrapper">
      <Row>
        <Col lg="6">
          <div className="leftback"></div>
          <div className="revolutionLeft">
            <h3 className="newRevolution">
              A new revolution in music & world <br /> of NFTS...
            </h3>
            <p className="nftDetail">
              Music NFTs are changing the way fans connect with their favorite
              artists. All kinds of creators are innovating on the blockchain,
              and the appetite for change in an industry that so often
              underserves independent makers is clear.
            </p>
            <Button className="revolutionButton shadow-none">
              WANT TO BECOME A CREATOR ?
            </Button>
          </div>
        </Col>
        <Col lg="6">
          <div className="revolutionRight">
            <div className="right-back"></div>
            <div className="revolutionCard">
              <div className="cardImage">
                <div className="play-button">
                  <img src="/images/play-btn.svg" alt="img" />
                </div>
              </div>
              <div className="cardBottom">
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
                      <p className="count">19.5</p>
                    </div>
                    <p className="price">$ 700,265</p>
                  </div>
                </div>
                <div className="buyNow">BUY NOW</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
