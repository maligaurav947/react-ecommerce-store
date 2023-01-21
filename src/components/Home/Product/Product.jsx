import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Kids from "./ProductData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function KidsProduct() {
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
    <div className="w-full p-5 ">
      <h3 className="pl-5 text-5xl mb-5">Kids Section</h3>

      <Carousel responsive={responsive} className="w-full">
        {Kids.slice(0, 10).map((post, id) => (
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
                  <Link to={`/product/${post.id}`}>
                    <button className="bg-emerald-500 text-white font-medium p-2 rounded-md">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </li>
          </>
        ))}
      </Carousel>
      <Carousel responsive={responsive} className="w-full">
        {Kids.slice(10, 20).map((post, id) => (
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
              <h1>{post.id}</h1>
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
                  <Link to={`/product/${post.id}`}>
                    <button className="bg-emerald-500 text-white font-medium p-2 rounded-md">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </li>
          </>
        ))}
      </Carousel>
      <Carousel responsive={responsive} className="w-full">
        {Kids.slice(20, 30).map((post, id) => (
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
              <h1>{post.id}</h1>
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
                  <Link to={`/product/${post.id}`}>
                    <button className="bg-emerald-500 text-white font-medium p-2 rounded-md">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </li>
          </>
        ))}
      </Carousel>
    </div>
  );
}
