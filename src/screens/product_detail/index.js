import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import BrowseCard from "../../components/browse-nft-card";
import Page from "../../components/page";

import "./style.scss";
import { useNavigate } from "react-router-dom";
import { Chart } from "./chart";
import Offers from "../../components/offers";
import Auctions from "../../components/auctions";
import DetailPageCards from "./suggested-nfts-detail";
import Footer from "../../components/footer";

const data = ["All", "Music", "Sound", "Elect.", "Jazz", "Rock"];
const detail = [
  {
    img: "/images/ethereum.svg",
    price: "4,554",
    usd: "$ 2,456,120",
    expiration: ["2", "d", "14", "h", "5", "m", "11", "s"],
    from: "zeeshui.ux",
  },
];

const images = [
  "/browse-nft/browse-nft-1.png",
  "/browse-nft/browse-nft-2.png",
  "/browse-nft/browse-nft-3.png",
  "/browse-nft/browse-nft-4.png",
];

const ProductDetail = () => {
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [newestIsOpen, setNewestIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };
  const newestToggler = () => {
    setNewestIsOpen(!newestIsOpen);
  };
  return (
    <Page>
      <div className="nft-market-wrapper">
        <Container>
          <div className="nft-heading-top">
            <p className="nft-heading">NFT Marketplace</p>
            <img src="/images/right-arrow-nft.svg" alt="img" />
            <p className="listings">Listings</p>
          </div>
          <p className="nft-sub-heading-detail">
            Discover, collect, and sell extraordinary NFTs
          </p>
          <div className="nft-detail-all-market">
            <div className="detail-market-wrapper">
              {data.map((d, index) => (
                <div
                  className={
                    isSelected === index
                      ? "market-list"
                      : "market-list-unSelected"
                  }
                  onClick={() => setIsSelected(index)}
                >
                  {d}
                </div>
              ))}
            </div>
            <div className="nft-filter"></div>
          </div>
          <div className="product-detail-wrapper">
            <Row>
              <Col lg="6">
                <div className="video">
                  <div className="detail-play-button">
                    <img src="/images/play-btn.svg" alt="img" />
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <div className="detail-wrapper">
                  <div className="detail-top">
                    <div className="detail-top-heading">
                      <p>theWeeknd x Ariana G.</p>
                      <img src="/images/save.svg" />
                    </div>
                    <div className="detail-second-heading">
                      <span className="detail-heading-by">by</span>
                      <span className="detail-heading-alanwalk">
                        alanwalkermusic
                      </span>
                      <img src="/images/tick.svg" />
                    </div>
                  </div>
                  <div className="detail-mid-block">
                    <div className="detail-third-heading">
                      <p>Current Bid</p>
                      <p>Auction Ends in</p>
                    </div>
                    <div className="detail-mid-top">
                      <div className="detail-mid-left">
                        <img src="/images/ethereum.svg" />
                        <span className="detail-eth-price">1,545,123</span>
                      </div>
                      <div className="detail-mid-right">
                        <p>
                          2<span>d</span>14<span>h</span>5<span>m</span>11
                          <span>s</span>
                        </p>
                      </div>
                    </div>
                    <div className="placebid-button-wrap">
                      <button className="placebid-button">PLACE BID</button>
                    </div>
                  </div>
                  <div className="offers">
                    <Offers />
                  </div>
                </div>
                <div className="detail-wrapper-mobile">
                  <div className="detail-top">
                    <div className="detail-top-heading">
                      <p>theWeeknd x Ariana G.</p>
                      <img src="/images/save.svg" />
                    </div>
                    <div className="detail-second-heading">
                      <span className="detail-heading-by">by</span>
                      <span className="detail-heading-alanwalk">
                        alanwalkermusic
                      </span>
                      <img src="/images/tick.svg" />
                    </div>
                  </div>
                  <Auctions
                    heading={"Current Bid"}
                    img={"/images/ethereum.svg"}
                    price={"1,545,123"}
                  />
                  <Auctions
                    heading={"Auction Ends in"}
                    img={"/images/ethereum.svg"}
                    D={"2"}
                    d={"d"}
                    H={"14"}
                    h={"h"}
                    M={"5"}
                    m={"m"}
                    S={"11"}
                    s={"s"}
                  />
                  <div className="placebid-button-wrap">
                    <button className="placebid-button">PLACE BID</button>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <div className="description">
                  <div className="description-heading">
                    <img src="/images/desc-img.svg" />
                    <p>DESCRIPTION</p>
                  </div>
                  <p>
                    On a dark and stormy night, a spirit stalks the forecourts
                    of the Oval Stadium. An age-old legend whispers “the Bopara
                    will haunt you for the rest of time.” Keeping you awake at
                    night, the Bopara feasts on your embarrassment. You will
                    never leave your home with your pants safely fastened again!
                    This centuries-old tale was thought to be a myth, until one
                    day everything changed! The spirit returned, overpowering
                    its host and once again revealing itself to the world.
                  </p>
                </div>
              </Col>

              <Col lg="6">
                <div className="description">
                  <div className="description-heading">
                    <img src="/images/history.svg" />
                    <p>HISTORY</p>
                  </div>
                  <div className="history-graph">
                    <div className="graph-content">
                      <Chart />
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <div className="offers-parnt">
                  <div className="offers-parent">
                    <Offers />
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div className="sugested-nfts">
            <p className="sugested-nfts-first">
              Suggested<span className="sugested-nfts-second">NFT'S</span>
            </p>
            <p className="extraordinary-nfts">
              Discover, collect, and sell extraordinary NFTs
            </p>
          </div>
          <div className="nft-market-cards">
            {/* {[...Array(4)].map((i, index) => (
              <div className="detail-card-prod col-lg-3 col-md-4 col-sm-12">
                <BrowseCard images={images[index]} />
              </div>
            ))} */}
            <DetailPageCards />
          </div>
        </Container>
        <div>
          <Footer />
        </div>
      </div>
    </Page>
  );
};

export default ProductDetail;
