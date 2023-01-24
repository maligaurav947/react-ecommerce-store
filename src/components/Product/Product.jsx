import React from "react";
import Carousel from "react-multi-carousel";
import ProductData from "../Extra/ProductData";
import { ToastContainer } from "react-toastify";
import ProducitemsData from "./ProducitemsData";
import "react-toastify/dist/ReactToastify.css";
import "react-multi-carousel/lib/styles.css";

function Product({ handleClick }) {
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
      <ToastContainer />
      <h3 className="pl-5 pb-5 text-5xl">Kids Section</h3>
      <Carousel responsive={responsive} className="w-full">
        {ProductData.slice(0, 10).map((post) => (
          <ProducitemsData
            key={post.id}
            post={post}
            handleClick={handleClick}
          />
        ))}
      </Carousel>
      <h3 className="pl-5 pt-5 pb-5 text-5xl">Men Section</h3>
      <Carousel responsive={responsive} className="w-full">
        {ProductData.slice(10, 20).map((post) => (
          <ProducitemsData
            key={post.id}
            post={post}
            handleClick={handleClick}
          />
        ))}
      </Carousel>
      <h3 className="pl-5 pt-5 pb-5 text-5xl">Women Section</h3>
      <Carousel responsive={responsive} className="w-full">
        {ProductData.slice(20, 30).map((post) => (
          <>
            <ProducitemsData
              key={post.id}
              post={post}
              handleClick={handleClick}
            />
          </>
        ))}
      </Carousel>
    </div>
  );
}

export default Product;
