import React from "react";
import { Button } from "reactstrap";
import BrowseCard from "../../../components/browse-nft-card";

import "./style.scss";

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
        {[...Array(8)].map((i) => (
          <div className="cardWrap col-lg-3 col-md-4 col-sm-6">
            <BrowseCard />
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
