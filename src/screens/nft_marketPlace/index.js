import React, { useState } from "react";
import { Container } from "reactstrap";
import BrowseCard from "../../components/browse-nft-card";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./style.scss";
import Page from "../../components/page";

const data = ["All", "Music", "Sound", "Elect.", "Jazz", "Rock"];

const NFTMarketPlace = () => {
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
          <p className="nft-heading">NFT Marketplace</p>
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
            <div className="nft-filter">
              <Dropdown isOpen={isOpen} toggle={toggleHandler}>
                <DropdownToggle caret className="filter-button shadow-none">
                  <img src="/images/filter.svg" />
                  Filter
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Dropdown isOpen={newestIsOpen} toggle={newestToggler}>
                <DropdownToggle
                  className=""
                  caret
                  className="newest-button shadow-none"
                >
                  <img src="/images/newest.svg" />
                  Newest
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <div className="nft-market-cards">
            {[...Array(16)].map((i) => (
              <div>
                <BrowseCard />
              </div>
            ))}
          </div>
          <div className="nft-market-button-wrapper">
            <button className="nft-market-button">Show More</button>
          </div>
        </Container>
      </div>
    </Page>
  );
};

export default NFTMarketPlace;
