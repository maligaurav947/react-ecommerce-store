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
        img: "https://m.media-amazon.com/images/I/919vpm+pvnL._AC_UL480_FMwebp_QL65_.jpg",
      },
      {
        id: 2,
        title: "Jam & Honey Boys Button Down Shirt",
        img: "https://m.media-amazon.com/images/I/81+h4HYaxqL._AC_UL480_FMwebp_QL65_.jpg",
      },
      {
        id: 3,
        title: "Cherry Crumble California           Boy's Regular T-Shirt",
        img: "https://m.media-amazon.com/images/I/A1LggkqYVRL._AC_UL480_FMwebp_QL65_.jpg",
      },
      {
        id: 4,
        title: "Oner Boys Jeans Regular fit Plain Jeans DN 003",
        img: "https://m.media-amazon.com/images/I/A1Rhst1SymL._AC_UL480_FMwebp_QL65_.jpg",
      },
      {
        id: 5,
        title: "",
        img: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19015668/2022/11/28/8d2bd4a4-8fd7-4c6b-9ab9-dadc486948841669632754722-US-Polo-Assn-Kids-Boys-Jackets-5291669632754306-1.jpg",
      },
      {
        id: 6,
        title: "",
        img: "https://m.media-amazon.com/images/I/81vWfvG6AqL._AC_UL480_FMwebp_QL65_.jpg",
      },
      {
        id: 7,
        title: "",
        img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19582558/2022/8/22/7f4e61b5-3f14-4b4b-9e55-fb9df34722861661153905487ATUNGirlsPurpleAngrakhaKurtiwithTrousers1.jpg",
      },
      {
        id: 8,
        title: "",
        img: "https://m.media-amazon.com/images/I/91-qSvBudPL._AC_UL480_FMwebp_QL65_.jpg",
      },
    ],
    Man: [
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
              <ul className="grid grid-cols-1 gap-5 lg:grid-cols-4 items-center justify-around ">
                {posts.map((post) => (
                  <>
                    <li
                      key={post.id}
                      className="boxshadow relative rounded-md  bg-slate-300"
                      style={{
                        height: "520px",
                      }}
                    >
                      <img
                        src={post.img}
                        className="object-cover object-top "
                        style={{ width: "100%", height: "350px" }}
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
                        <div className="flex items-center justify-between ">
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
