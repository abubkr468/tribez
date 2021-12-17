import React, { useState, useEffect } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1000) {
      console.log("less");
    } else {
      console.log("greator");
    }
  }, []);

  return (
    <nav className="navbarWrapper">
      <div class="logo-wrapper">
        <img
          src="/images/nft-logo.svg"
          alt="img"
          onClick={() => navigate("/")}
        />
        <span className="tribez-line"></span>
      </div>
      <div className={isMobile ? "navWrapperMobile" : "navWrapper"}>
        <div className="leftNav navbar-nav me-auto mb-2 mb-lg-0">
          <div className="searchBar">
            <input
              className="searchInput"
              type="text"
              placeholder="Search any music artwork"
            />
            <img src="/images/search.svg" />
          </div>
        </div>
        <ul className="rightNav me-auto">
          <li className="navLinkBuy" onClick={() => navigate("/my-profile")}>
            Buy
          </li>
          <li className="navLinkBuy" onClick={() => navigate("/my-profile")}>
            Explore
          </li>
          <div className="wallet-wrapper">
            <div className="dropdown-wallet">
              <div className="wallet">
                <img src="/images/wallet.svg" />
                <span className="walletText">Wallet</span>
              </div>
              <div className="wallet-content">
                <div className="contents">
                  <img
                    className="dropdown-icon"
                    src="/images/wallet-icon.svg"
                  />
                  <span className="wallet-name">zeeshui.ux</span>
                  <span className="wallet-gained"> just gained</span>
                  <span className="wallet-value"> 167.2 ETH</span>
                </div>
                <div className="contents">
                  <img
                    className="dropdown-icon"
                    src="/images/wallet-icon.svg"
                  />
                  <span className="wallet-name">zeeshui.ux</span>
                  <span className="wallet-gained"> just gained</span>
                  <span className="wallet-value"> 167.2 ETH</span>
                </div>
                <div className="contents">
                  <img
                    className="dropdown-icon"
                    src="/images/wallet-icon.svg"
                  />
                  <span className="wallet-name">zeeshui.ux</span>
                  <span className="wallet-gained"> just gained</span>
                  <span className="wallet-value"> 167.2 ETH</span>
                </div>
                <div className="contents">
                  <img
                    className="dropdown-icon"
                    src="/images/wallet-icon.svg"
                  />
                  <span className="wallet-name">zeeshui.ux</span>
                  <span className="wallet-gained"> just gained</span>
                  <span className="wallet-value"> 167.2 ETH</span>
                </div>
                <div className="contents">
                  <img
                    className="dropdown-icon"
                    src="/images/wallet-icon.svg"
                  />
                  <span className="wallet-name">zeeshui.ux</span>
                  <span className="wallet-gained"> just gained</span>
                  <span className="wallet-value"> 167.2 ETH</span>
                </div>
                <div className="contents">
                  <img
                    className="dropdown-icon"
                    src="/images/wallet-icon.svg"
                  />
                  <span className="wallet-name">zeeshui.ux</span>
                  <span className="wallet-gained"> just gained</span>
                  <span className="wallet-value"> 167.2 ETH</span>
                </div>
              </div>
            </div>
          </div>
          <img className="bell" src="/images/bell.svg" />
          <div className="dropdown">
            <img className="profile" src="/images/profile.svg" />
            <div className="dropdown-content">
              <div className="content" onClick={() => navigate("/my-profile")}>
                <img className="dropdown-icon" src="/images/profile-icon.svg" />
                <span className="dropdown-name">My Profile</span>
              </div>
              <div className="content" onClick={() => navigate("/collections")}>
                <img
                  className="dropdown-icon"
                  src="/images/collection-icon.svg"
                />
                <span className="dropdown-name">Collections</span>
              </div>
              <div className="content" onClick={() => navigate("/favourites")}>
                <img
                  className="dropdown-icon"
                  src="/images/favourite-icon.svg"
                />
                <span className="dropdown-name">Favourites</span>
              </div>
              <div
                className="content"
                onClick={() => navigate("/user-settings")}
              >
                <img className="dropdown-icon" src="/images/setting-icon.svg" />
                <span className="dropdown-name">Settings</span>
              </div>
            </div>
          </div>
        </ul>
      </div>
      <button className="mobile-menu" onClick={() => setIsMobile(!isMobile)}>
        {!isMobile ? (
          <img src="/images/menu.svg" />
        ) : (
          <img src="/images/cross.svg" />
        )}
      </button>
    </nav>
  );
};
