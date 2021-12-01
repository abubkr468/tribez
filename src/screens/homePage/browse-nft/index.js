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
      </div>
      <p className="sellExtraordinary">
        Discover, collect, and sell extraordinary NFTs
      </p>
      <div className="BrowseCardWrapper">
        {[...Array(8)].map((i) => (
          <div className="cardWrap col-lg-3">
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
