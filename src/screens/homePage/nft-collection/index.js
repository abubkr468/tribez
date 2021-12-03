import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import NFTCollectionCard from "../../../components/nft-collection-card";
import "./style.scss";

const NFTCollection = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 139, min: 464 },
      items: 3,
    },
    largeMobile: {
      breakpoint: { max: 1000, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="nftCollectionWrapper">
      <h3 className="collectionNFT">Top Collection NFT’s</h3>
      <p className="discoverNFT">
        Discover, collect, and sell extraordinary NFTs
      </p>
      <div className="carouselWrapper mt-5">
        <Carousel
          responsive={responsive}
          draggable={true}
          swipeable={true}
          showDots={true}
          dotListClass="dotClass"
          slidesToSlide={1}
          autoPlay={true}
          renderButtonGroupOutside={true}
          ssr={true}
          infinite={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          transitionDuration={500}
          sliderClass="innerSlider"
          itemClass="itemClass"
        >
          <div className="carouselItem">
            <NFTCollectionCard image="/images/nft-card.svg" bg={"#090141"} />
          </div>
          <div className="carouselItem">
            <NFTCollectionCard image="/images/carousel-2.svg" bg={"#035F22"} />
          </div>
          <div className="carouselItem">
            <NFTCollectionCard image="/images/carousel-3.svg" bg={"#48017A"} />
          </div>
          <div className="carouselItem">
            <NFTCollectionCard image="/images/carousel-4.svg" bg={"#7C005F"} />
          </div>
          <div className="carouselItem">
            <NFTCollectionCard image="/images/nft-card.svg" bg={"#090141"} />
          </div>
          <div className="carouselItem">
            <NFTCollectionCard image="/images/carousel-2.svg" bg={"#035F22"} />
          </div>
          <div className="carouselItem">
            <NFTCollectionCard image="/images/carousel-3.svg" bg={"#7C005F"} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default NFTCollection;
