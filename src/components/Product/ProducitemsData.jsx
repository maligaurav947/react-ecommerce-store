import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";

function ProducitemsData({ post, handleClick }) {
  const { id, img, title, price } = post;
  const [card, setCard] = useState([]);
  const handlerclick = (post) => {
    card.push(post);
    console.log(card);
    toast.success("The Item Was Added To Card");
  };
  return (
    <li
      key={id}
      className="p-2 relative rounded-md"
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <Link to={`/product/${id}`}>
        <img
          src={img}
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
          <h2 className="text-base">{title}</h2>
        </ul>
        <div className="flex items-center justify-between">
          <p className="text-xl font-extrabold">₹{price}.00</p>
          <button
            className="p-3 flex items-center gap-2 font-normal  bg-blue-800 text-white rounded-lg"
            onClick={() => {
              handleClick(post);
              toast.success("Item Added To Card");
            }}
          >
            Add To <HiOutlineShoppingBag />
          </button>
        </div>
      </div>
    </li>
  );
}

export default ProducitemsData;
