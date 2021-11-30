import React from "react";
import SellersCard from "../../../components/selers_card";
import "./style.scss";

const TopArtists = () => {
  return (
    <div className="topCollectionWrapper">
      <div className="sellersHeading">
        <span className="topSellers">Top Sellers of </span>
        <div className="sellersDropdown">
          <span className="sellersYear">2021</span>
          <img src="/images/sellers-dropdown.svg" />
          <div className="sellers-content">
            <p className="sellersYears">2020</p>
            <p className="sellersYears">2019</p>
            <p className="sellersYears">2028</p>
          </div>
        </div>
      </div>
      <p className="sellExtraordinary">
        Discover, collect, and sell extraordinary NFTs
      </p>
      <div className="sellersCardWrapper">
        {[...Array(12)].map((i, index) => (
          <div className="cardWrapper">
            <SellersCard count={index + 1} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
