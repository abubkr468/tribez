import React from "react";
import "./style.scss";

const SellersCard = ({ count }) => {
  return (
    <div className="sellersCardBox">
      <div className="count-no">{count}.</div>
      <img className="" src="/images/sellers-profile.svg" />
      <div className="sellerCardDetail">
        <div className="sellersLeft">
          <span className="sellersName">noamchowsky</span>
          <p className="sellersColections">49 Collections</p>
        </div>
        <div className="sellersRight">
          <div className="etheriumWrapper">
            <img src="/images/ethereum.svg" />
            <p className="count">465</p>
          </div>
          <p className="price">+12.562</p>
        </div>
      </div>
    </div>
  );
};

export default SellersCard;
