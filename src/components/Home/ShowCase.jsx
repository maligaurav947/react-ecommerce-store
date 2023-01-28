import Aos from "aos";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function ShowCase() {
  useEffect(() => {
    Aos.init({ once: true, duration: 2000, disable: "mobile" });
  });
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-content-center mb-10 mt-10 gap-5 p-5">
      <div
        data-aos="fade-right"
        className="w-full h-60 grid place-content-center"
        style={{
          backgroundImage:
            "url('https://img.abercrombie.com/is/image/anf/KIC_155-2737-3101-278_model1?policy=product-medium')",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Link to="/womenProduct">
          <button className="bg-white text-xl font-bold pt-2 pb-2 pl-6 pr-6 text-black">
            Women
          </button>
        </Link>
      </div>

      <div
        className="w-full h-60 grid place-content-center"
        data-aos="fade-top"
        style={{
          backgroundImage:
            "url('https://www.sheknows.com/wp-content/uploads/2023/01/Blank-1440-x-1080-7.png?w=1440')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Link to="/kidsProduct">
          <button className="bg-white font-bold text-xl pt-2 pb-2 pl-6 pr-6 text-black">
            Kids
          </button>
        </Link>
      </div>

      <div
        className="w-full h-60 grid place-content-center"
        data-aos="fade-left"
        style={{
          backgroundImage:
            "url('https://www.themanual.com/wp-content/uploads/sites/9/2021/06/best-cheap-online-clothing-stores-for-men-version-1625041291.jpg?fit=800%2C800&p=1')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Link to="/menProduct">
          <button className="bg-white font-bold text-xl pt-2 pb-2 pl-6 pr-6 text-black">
            Men
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ShowCase;
