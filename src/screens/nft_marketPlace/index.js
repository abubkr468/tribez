import React, { useState } from "react";
import { Container } from "reactstrap";
import BrowseCard from "../../components/browse-nft-card";
import Footer from "../../components/footer";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
} from "reactstrap";
import "./style.scss";
import Page from "../../components/page";

const data = ["All", "Music", "Sound", "Elect.", "Jazz", "Rock"];

const NFTMarketPlace = () => {
  const [isSelected, setIsSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [newestIsOpen, setNewestIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };
  const newestToggler = () => {
    setNewestIsOpen(!newestIsOpen);
  };

  const images = [
    "/browse-nft/browse-nft-1.png",
    "/browse-nft/browse-nft-2.png",
    "/browse-nft/browse-nft-3.png",
    "/browse-nft/browse-nft-4.png",
    "/browse-nft/browse-nft-5.png",
    "/browse-nft/browse-nft-6.png",
    "/browse-nft/browse-nft-7.png",
    "/browse-nft/browse-nft-8.png",
    "/browse-nft/browse-nft-1.png",
    "/browse-nft/browse-nft-2.png",
    "/browse-nft/browse-nft-3.png",
    "/browse-nft/browse-nft-4.png",
    "/browse-nft/browse-nft-5.png",
    "/browse-nft/browse-nft-6.png",
    "/browse-nft/browse-nft-7.png",
    "/browse-nft/browse-nft-8.png",
  ];

  return (
    <Page>
      <div className="nft-market-wrapper">
        <Container>
          <p className="nft-heading">NFT Marketplace</p>
          <p className="nft-sub-heading">
            Discover, collect, and sell extraordinary NFTs
          </p>
          <Row className="nft-all-market">
            <Col className="market-wrapper" lg="6" md="12">
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
            </Col>
            <Col lg="6" md="12">
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
            </Col>
          </Row>

          <div className="nft-market-cards">
            {[...Array(16)].splice(0, 16).map((i, index) => (
              <div className="card-nft col-lg-3 col-md-4 col-sm-12">
                <BrowseCard images={images[index]} />
              </div>
            ))}
          </div>
          <div className="nft-market-button-wrapper">
            <button className="nft-market-button">Show More</button>
          </div>
        </Container>
        <div className="mobile-menu-footer">
          <Footer />
        </div>
      </div>
    </Page>
  );
};

export default NFTMarketPlace;
