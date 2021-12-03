import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import BrowseCard from "../../components/browse-nft-card";
import Page from "../../components/page";

import "./style.scss";
import { useNavigate } from "react-router-dom";
import { Chart } from "./chart";

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
          <p className="nft-sub-heading">
            Discover, collect, and sell extraordinary NFTs
          </p>
          <div className="nft-all-market">
            <div className="market-wrapper">
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
                  <div className="detail-bottom-block">
                    <div className="offers-wrap">
                      <p>OFFERS</p>
                    </div>
                    <table width="100%" className="table-detail">
                      <tr className="table-heading">
                        <td className="price">Price</td>
                        <td className="usd">USD</td>
                        <td className="expir">Expiration</td>
                        <td className="from">From</td>
                      </tr>
                      {[...Array(7)].map((i) => (
                        <tr className="table-rows">
                          <td className="img-price">
                            <img src="/images/ethereum.svg" alt="img" />
                            <span className="eth-price">4,554</span>
                          </td>
                          <td className="price-usd">$ 2,456,120</td>
                          <td className="expiration">
                            <p>
                              2<span>d</span>14<span>h</span>5<span>m</span>11
                              <span>s</span>
                            </p>
                          </td>
                          <td className="from-name">zeeshui.ux</td>
                        </tr>
                      ))}
                    </table>
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
                    <Chart />{" "}
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
            {[...Array(4)].map((i, index) => (
              <div className="detail-card-prod col-lg-3 col-md-4 col-sm-6">
                <BrowseCard images={images[index]} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </Page>
  );
};

export default ProductDetail;
