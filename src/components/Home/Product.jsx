import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Product() {
  let [categories] = useState({
    Kids: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTFSG6-fRwfdBhQ3TzGqDCgK_Aa6wi-3KO3luaauA5Krl_aa9BvvuHVzr4xlzGv5ziurNW69s3JVI5V9bp0VyAbQqaYxyryzCLXI83iKya5ivcV90eE6uW6&usqp=CAE",
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        img: "https://cdnext.fynd.com/image/data/mothercare/24dec2021/ZA174-1.jpg?width=600&height=600&mode=fill&fill=solid&fill-color=FFFFFF",
      },
      {
        id: 3,
        title: "So you've bought coffee... now what?",
        img: "https://cdnext.fynd.com/image/data/mothercare/24dec2021/TB454-1.jpg?width=228&height=228&mode=fill&fill=solid&fill-color=FFFFFF",
      },
      {
        id: 4,
        title: "So you've bought coffee... now what?",
        img: "https://cdnext.fynd.com/image/data/mothercare/24dec2021/ZA126-1.jpg?width=228&height=228&mode=fill&fill=solid&fill-color=FFFFFF",
      },
      {
        id: 5,
        title: "So you've bought coffee... now what?",
        img: "https://cdnext.fynd.com/image/data/mothercare/15nov2021/BBJAAA66-1.jpg?width=228&height=228&mode=fill&fill=solid&fill-color=FFFFFF",
      },
    ],
    Man: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        img: "https://m.media-amazon.com/images/I/71-BLlWtxdL._UL1500_.jpg",
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        img: "https://m.media-amazon.com/images/I/71-BLlWtxdL._UL1500_.jpg",
      },
    ],
    Women: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        img: "https://m.media-amazon.com/images/I/71-BLlWtxdL._UL1500_.jpg",
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        img: "https://m.media-amazon.com/images/I/71-BLlWtxdL._UL1500_.jpg",
      },
    ],
  });

  return (
    <div className="w-full p-5 ">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
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
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul className="grid grid-cols-1 gap-5 lg:grid-cols-4 items-center justify-around ">
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                    style={{
                      height: "320px",
                    }}
                  >
                    <img
                      src={post.img}
                      className="w-full h-full object-cover"
                    />
                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <h2>{post.title}</h2>
                    </ul>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
