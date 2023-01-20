import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { AiFillStar } from "react-icons/ai";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Product() {
  let [categories] = useState({
    Kids: [
      {
        id: 1,
        title: "Jam & Honey Boy's Regular Fit Shirt",
        img: "https://m.media-amazon.com/images/I/71BiQcsnzJL._AC_UL480_FMwebp_QL65_.jpg",
      },
      {
        id: 2,
        title: "Jam & Honey Boys Button Down Shirt",
        img: "https://m.media-amazon.com/images/I/6134gSS8j6L._AC_UL480_FMwebp_QL65_.jpg",
      },
      {
        id: 3,
        title: "Cherry Crumble California           Boy's Regular T-Shirt",
        img: "https://m.media-amazon.com/images/I/81Lv0joTaRL._AC_UL480_FMwebp_QL65_.jpg",
      },
      {
        id: 4,
        title: "Oner Boys Jeans Regular fit Plain Jeans DN 003",
        img: "https://m.media-amazon.com/images/I/61ID9h48xqL._AC_UL480_FMwebp_QL65_.jpg",
      },
      {
        id: 5,
        title: "",
        img: "https://m.media-amazon.com/images/I/61vF5YxGOPL._AC_UL480_QL65_.jpg",
      },
      {
        id: 6,
        title: "",
        img: "https://m.media-amazon.com/images/I/61VtST6cgBL._AC_UL480_QL65_.jpg",
      },
      {
        id: 7,
        title: "",
        img: "https://m.media-amazon.com/images/I/61jSmXhGVdL._AC_UL480_QL65_.jpg",
      },
      {
        id: 8,
        title: "",
        img: "https://m.media-amazon.com/images/I/51pUK5sBOSL._AC_UL480_FMwebp_QL65_.jpg",
      },
      {
        id: 9,
        title: "",
        img: "https://m.media-amazon.com/images/I/41DlQF2nC9L._AC_UL480_QL65_.jpg",
      },
      {
        id: 10,
        title: "",
        img: "https://m.media-amazon.com/images/I/61Lushz-26L._AC_UL480_FMwebp_QL65_.jpg",
      },
    ],
    Man: [
      {
        id: 1,
        title: "Pepe Jeans Men Jeans",
        img: "https://m.media-amazon.com/images/I/811vZ9A3mqL._AC_UL480_FMwebp_QL65_.jpg",
      },
      {
        id: 2,
        title: "Men's Regular Fit Button Down Shirt",
        img: "https://m.media-amazon.com/images/I/71rON351gdL._AC_UL480_FMwebp_QL65_.jpg",
      },
      {
        id: 3,
        title: "Men Hooded Sweatshirt",
        img: "https://m.media-amazon.com/images/I/71bDzgBQPZL._AC_UL480_FMwebp_QL65_.jpg",
      },
      {
        id: 4,
        title: "Men Casual Shorts",
        img: "https://m.media-amazon.com/images/I/710GszJWzBS._AC_UL480_FMwebp_QL65_.jpg",
      },
      {
        id: 5,
        title: "Men's Slim Fit Button Down Shirt",
        img: "https://m.media-amazon.com/images/I/815EsKQch7L._AC_UL480_FMwebp_QL65_.jpg",
      },
      {
        id: 6,
        title: "Men Black Hoodie",
        img: "https://m.media-amazon.com/images/I/61+T54SqTpL._AC_UL480_FMwebp_QL65_.jpg",
      },
      {
        id: 7,
        title: "Men Jeans",
        img: "https://m.media-amazon.com/images/I/41lGFbQtc5L._AC_UL480_FMwebp_QL65_.jpg",
      },
      {
        id: 8,
        title: "Men Silver And Black Reversible Jacket",
        img: "https://m.media-amazon.com/images/I/71zOvoKpVML._AC_UL480_FMwebp_QL65_.jpg",
      },
    ],
    Women: [
      {
        id: 1,
        title: "",
        img: "https://m.media-amazon.com/images/I/71-BLlWtxdL._UL1500_.jpg",
      },
      {
        id: 2,
        title: "",
        img: "https://m.media-amazon.com/images/I/71-BLlWtxdL._UL1500_.jpg",
      },
      {
        id: 3,
        title: "",
        img: "https://m.media-amazon.com/images/I/71-BLlWtxdL._UL1500_.jpg",
      },
      {
        id: 4,
        title: "",
        img: "https://m.media-amazon.com/images/I/71-BLlWtxdL._UL1500_.jpg",
      },
      {
        id: 5,
        title: "",
        img: "https://m.media-amazon.com/images/I/71-BLlWtxdL._UL1500_.jpg",
      },
      {
        id: 6,
        title: "",
        img: "https://m.media-amazon.com/images/I/71-BLlWtxdL._UL1500_.jpg",
      },
      {
        id: 7,
        title: "",
        img: "https://m.media-amazon.com/images/I/71-BLlWtxdL._UL1500_.jpg",
      },
      {
        id: 8,
        title: "",
        img: "https://m.media-amazon.com/images/I/71-BLlWtxdL._UL1500_.jpg",
      },
    ],
  });

  return (
    <div className="w-full p-5 ">
      <Tab.Group>
        <Tab.List className="flex space-x-1 ">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-xl font-medium leading-5 text-blue-700",
                  "ring-opacity-60 ring-offset-2 ring-offset-blue-400  focus:outline-none ",
                  selected
                    ? "bg-white shadow border-black border-b-4"
                    : "text-black hover:bg-white/[0.12] hover:text-black"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2"
              )}
            >
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-5 md:grid-cols-3 items-center justify-around w-full">
                {posts.map((post) => (
                  <>
                    <li
                      key={post.id}
                      className="boxshadow relative rounded-md"
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      <img
                        src={post.img}
                        className="object-contain"
                        style={{ width: "100%", height: "250px" }}
                      />
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
                          <p className="text-xl font-extrabold">$21.05</p>
                          <button className="bg-emerald-500 p-2 rounded-md">
                            Add To Card
                          </button>
                        </div>
                      </div>
                    </li>
                  </>
                ))}
              </ul>
              <div className="flex mb-5 mt-5 items-center justify-center">
                <button className="flex p-3 rounded-lg bg-black text-white items-center justify-center">
                  View More
                </button>{" "}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
