import React from "react";
import { Button } from "reactstrap";
import BrowseCard from "../../../components/browse-nft-card";

import "./style.scss";
const images = [
  "/browse-nft/browse-nft-1.png",
  "/browse-nft/browse-nft-2.png",
  "/browse-nft/browse-nft-3.png",
  "/browse-nft/browse-nft-4.png",
  "/browse-nft/browse-nft-5.png",
  "/browse-nft/browse-nft-6.png",
  "/browse-nft/browse-nft-7.png",
  "/browse-nft/browse-nft-8.png",
];
const BrowseNFT = () => {
  return (
    <div className="topCollectionWrapper">
      <div className="sellersHeading">
        <span className="topSellers">Browse all </span>
        <span className="sellersYear">NFT's</span>
        <img src="/images/sellers-dropdown.svg" />
        <div className="browse-nft-content">
          <p className="sellersYears">2020</p>
          <p className="sellersYears">2019</p>
          <p className="sellersYears">2028</p>
        </div>
      </div>
      <p className="sellExtraordinary">
        Discover, collect, and sell extraordinary NFTs
      </p>
      <div className="BrowseCardWrapper col-12">
        {[...Array(8)].map((i, index) => (
          <div className="cardWrap col-lg-3 col-md-4 col-sm-6">
            <BrowseCard images={images[index]} />
          </div>
        ))}
      </div>
      <div className="browseButton">
        <Button className="nftButton">BROWSE ALL NFT’s</Button>
      </div>
    </div>
  );
};

export default BrowseNFT;
