import React from "react";
import Carousel from "react-multi-carousel";
import ProductLayout from "../ProductLayout";
import ProductData from "../../Extra/ProductData";
import "react-multi-carousel/lib/styles.css";
function MenProduct(handleClick) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="w-full">
      <Carousel responsive={responsive} className="w-full">
        {ProductData.slice(21, 30).map((post) => (
          <ProductLayout key={post.id} post={post} handleClick={handleClick} />
        ))}
      </Carousel>
      <Carousel responsive={responsive} className="w-full">
        {ProductData.slice(30, 40).map((post) => (
          <ProductLayout key={post.id} post={post} handleClick={handleClick} />
        ))}
      </Carousel>
    </div>
  );
}

export default MenProduct;
