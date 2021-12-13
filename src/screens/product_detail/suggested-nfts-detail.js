import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BrowseCard from "../../components/browse-nft-card";

const DetailPageCards = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    smallTablet: {
      breakpoint: { max: 768, min: 425 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 2,
    },
  };

  const images = [
    "/browse-nft/browse-nft-1.png",
    "/browse-nft/browse-nft-2.png",
    "/browse-nft/browse-nft-3.png",
    "/browse-nft/browse-nft-4.png",
  ];
  return (
    <div className="w-100">
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
        containerClass="containerClass"
      >
        {[...Array(4)].map((i, index) => (
          <div className="">
            <BrowseCard images={images[index]} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DetailPageCards;
