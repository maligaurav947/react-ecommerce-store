import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import ProductData from "../Home/Product/ProductData";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Productsitems() {
  const [card, setCard] = useState([]);
  const handlerclick = (post) => {
    card.push(post);
    console.log(card);
  };
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
    <>
      <ToastContainer />

      <h3 className="pl-5 pb-5 text-5xl">Kids Section</h3>
      <Carousel responsive={responsive} className="w-full">
        {ProductData.slice(0, 10).map((post, id) => (
          <>
            <li
              key={post.id}
              className="p-2 relative rounded-md"
              style={{
                height: "100%",
                width: "100%",
              }}
            >
              <Link to={`/product/${post.id}`}>
                <img
                  src={post.img}
                  className="object-contain"
                  style={{ width: "100%", height: "250px" }}
                />
              </Link>
              <div className="p-3">
                <div className=" flex items-center justify-between mt-1 text-yellow-500 gap-1 text-xl">
                  <div className="flex">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <h3 className="text-black">60% off</h3>
                </div>
                <ul className="mt-4 mb-4 grid  font-normal leading-4 text-gray-500">
                  <h2 className="text-base">{post.title}</h2>
                </ul>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-extrabold">₹{post.price}.00</p>
                  <button
                    className="p-3 flex items-center gap-2 font-normal  bg-blue-800 text-white rounded-lg"
                    onClick={() => {
                      handlerclick(post);
                      toast.success("The Item Was Added To Card");
                    }}
                  >
                    Add To <HiOutlineShoppingBag />
                  </button>
                </div>
              </div>
            </li>
          </>
        ))}
      </Carousel>
      <h3 className="pl-5 pt-5 pb-5 text-5xl">Men Section</h3>
      <Carousel responsive={responsive} className="w-full">
        {ProductData.slice(10, 20).map((post, id) => (
          <>
            <li
              key={post.id}
              className="p-2 relative rounded-md"
              style={{
                height: "100%",
                width: "100%",
              }}
            >
              <Link to={`/product/${post.id}`}>
                <img
                  src={post.img}
                  className="object-contain"
                  style={{ width: "100%", height: "250px" }}
                />
              </Link>
              <div className="p-3">
                <div className=" flex items-center justify-between mt-1 text-yellow-500 gap-1 text-xl">
                  <div className="flex">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <h3 className="text-black">60% off</h3>
                </div>
                <ul className="mt-4 mb-4 grid  font-normal leading-4 text-gray-500">
                  <h2 className="text-base">{post.title}</h2>
                </ul>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-extrabold">₹{post.price}.00</p>
                  <button
                    className="p-3 flex items-center gap-2 font-normal  bg-blue-800 text-white rounded-lg"
                    onClick={() => {
                      handlerclick(post);
                      toast.success("The Item Was Added To Card");
                    }}
                  >
                    Add To <HiOutlineShoppingBag />
                  </button>
                </div>
              </div>
            </li>
          </>
        ))}
      </Carousel>
      <h3 className="pl-5 pt-5 pb-5 text-5xl">Women Section</h3>
      <Carousel responsive={responsive} className="w-full">
        {ProductData.slice(20, 30).map((post, id) => (
          <>
            <li
              key={post.id}
              className="p-2 relative rounded-md"
              style={{
                height: "100%",
                width: "100%",
              }}
            >
              <Link to={`/product/${post.id}`}>
                <img
                  src={post.img}
                  className="object-contain"
                  style={{ width: "100%", height: "250px" }}
                />
              </Link>
              <div className="p-3">
                <div className=" flex items-center justify-between mt-1 text-yellow-500 gap-1 text-xl">
                  <div className="flex">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <h3 className="text-black">60% off</h3>
                </div>
                <ul className="mt-4 mb-4 grid  font-normal leading-4 text-gray-500">
                  <h2 className="text-base">{post.title}</h2>
                </ul>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-extrabold">₹{post.price}.00</p>
                  <button
                    className="p-3 flex items-center gap-2 font-normal  bg-blue-800 text-white rounded-lg"
                    onClick={() => {
                      handlerclick(post);
                      toast.success("The Item Was Added To Card");
                    }}
                  >
                    Add To <HiOutlineShoppingBag />
                  </button>
                </div>
              </div>
            </li>
          </>
        ))}
      </Carousel>
    </>
  );
}

export default Productsitems;
