import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Hero() {
  useEffect(() => {
    Aos.init({ once: true, duration: 2000, disable: "mobile" });
  });
  // const [show, setShow] = useState(true);
  // const [cart, setCart] = useState([]);

  // const handleClick = (item) => {
  //   if (cart.indexOf(item) !== -1) return;
  //   setCart([...cart, item]);
  // };

  // const handleChange = (item, d) => {
  //   const ind = cart.indexOf(item);
  //   const arr = cart;
  //   arr[ind].amount += d;

  //   if (arr[ind].amount === 0) arr[ind].amount = 1;
  //   setCart([...arr]);
  // };

  return (
    <>
      <section
        className="p-2 grid items-center lg:flex justify-center"
        style={{
          backgroundColor: "#f0f0f0",
        }}
      >
        <main className="overflow-x-hidden" data-aos="fade-right">
          <img
            src="https://image.pngaaa.com/527/840527-middle.png"
            className=" "
          />
        </main>
        <main
          className="w-full lg:w-1/2 flex flex-col gap-5 items-start z-10"
          data-aos="fade-left"
        >
          <h2 className="text-6xl lg:text-8xl">
            30% Off On All Female Product
          </h2>
          <p>
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <button className="button-87">Shop Now</button>
        </main>
      </section>
    </>
  );
}

export default Hero;
