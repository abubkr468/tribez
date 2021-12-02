import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import BrowseCard from "../../components/browse-nft-card";
import Page from "../../components/page";
import "./style.scss";

const CoverPage = () => {
  const list = ["Listings", "Collections", "Favourites", "Liked"];

  const [isOpen, setIsOpen] = useState(false);
  const [newestIsOpen, setNewestIsOpen] = useState(false);
  const [isSelect, setIsSelect] = useState(0);
  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };
  const newestToggler = () => {
    setNewestIsOpen(!newestIsOpen);
  };

  return (
    <Page>
      <div className="cover-page-wrapper">
        <div className="cover-page-bg-image"></div>

        <Row className="cover-page-bottom">
          <Col lg="3">
            <div className="cover-page-left">
              <div className="cover-profile-wrap">
                <img
                  className="cover-profile"
                  src="/images/cover-page-profile.svg"
                />
                <div className="cover-alanwalk-wrap">
                  <p>alanwalkermusic</p>
                  <img src="/images/tick.svg" />
                </div>
                <div className="cover-left-text">
                  <p>Welcome to the home of</p>
                  <p>alanwalkerm Collection on Tribez.</p>
                  <p> Discover the best items in this collection.</p>
                </div>
              </div>
              <div className="left-block-wrap">
                <div className="block-inner-wrap">
                  <p className="block-upper-text">106</p>
                  <p className="block-bottom-text">Items</p>{" "}
                </div>
                <div className="block-inner-mid-wrap">
                  {" "}
                  <p className="block-upper-text">125 ETH</p>
                  <p className="block-bottom-text">Price</p>
                </div>
                <div className="block-inner-wrap">
                  <p className="block-upper-text">$300</p>
                  <p className="block-bottom-text">Volume </p>{" "}
                </div>
              </div>
              <p className="left-description">DESCRIPTION</p>
              <div className="left-description-block">
                <p className="left-description-text">
                  On a dark and stormy night, a spirit stalks the forecourts of
                  the Oval Stadium. An age-old legend whispers “the Bopara will
                  haunt you for the rest time.” Keeping you awake at night, the
                  Bopara feasts on your embarrassment. You will never leave your
                  home with your pants safely fastened again!{" "}
                </p>
              </div>
              <div className="left-social-icons-wrapper">
                <img src="/images/facebook.svg" alt="img" />
                <img src="/images/instagram.svg" alt="img" />
                <img src="/images/twitter.svg" alt="img" />
                <img src="/images/youtube.svg" alt="img" />
                <img src="/images/wechat.svg" alt="img" />
              </div>
            </div>
          </Col>
          <Col lg="9">
            <div className="cover-page-right">
              <div className="right-heading">
                {list.map((i, index) => (
                  <div>
                    <p onClick={() => setIsSelect(index)}>{i}</p>
                    <div
                      className={isSelect === index ? "selected-line" : null}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="right-search-wrap">
                <div className="searchBar">
                  <img src="/images/search.svg" />
                  <input className="searchInput" type="text" />
                </div>
                <div className="right-filter">
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
                    <DropdownToggle caret className="newest-button shadow-none">
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
              <div className="cover-card-parent">
                {[...Array(8)].map((i) => (
                  <div className="cover-page-card mb-2 col-lg-3 col-md-4 col-sm-6">
                    <BrowseCard />
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Page>
  );
};

export default CoverPage;
