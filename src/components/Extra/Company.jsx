import React from "react";
import Marquee from "react-fast-marquee";

function Company() {
  return (
    <>
      <Marquee
        speed={100}
        loop={0}
        gradientWidth="0"
        pauseOnHover={true}
        className={
          "grid grid-cols-7 place-content-center gap-5 p-5 overflow-hidden"
        }
      >
        <img
          src="https://inkbotdesign.com/wp-content/uploads/2015/07/Superdry-Logo-Design.png?ezimgfmt=ng:webp/ngcb15"
          className="h-24 w-24 lg:w-52 lg:h-52"
        />
        <img
          src="https://inkbotdesign.com/wp-content/uploads/2015/07/Boss-Hugo-Boss-Logo-Design.png?ezimgfmt=ng:webp/ngcb15"
          className="h-24 w-24 lg:w-52 lg:h-52"
        />
        <img
          src="https://inkbotdesign.com/wp-content/uploads/2015/07/Ray-Ban-Logo-Design-1.jpg?ezimgfmt=ng:webp/ngcb15"
          className="h-24 w-24 lg:w-52 lg:h-52"
        />
        <img
          src="https://inkbotdesign.com/wp-content/uploads/2015/07/Alexander-McQueen-Logo-Design.png?ezimgfmt=ng:webp/ngcb15"
          className="h-24 w-24 lg:w-52 lg:h-52"
        />
        <img
          src="https://inkbotdesign.com/wp-content/uploads/2015/07/Fashion-Logo-Design-Bulgari.png?ezimgfmt=ng:webp/ngcb15"
          className="h-24 w-24 lg:w-52 lg:h-52"
        />
        <img
          src="https://inkbotdesign.com/wp-content/uploads/2015/07/Hollister-Logo-Design.png?ezimgfmt=ng:webp/ngcb15"
          className="h-24 w-24 lg:w-52 lg:h-52"
        />
        <img
          src="https://inkbotdesign.com/wp-content/uploads/2015/07/Levis-Logo-Design.png?ezimgfmt=ng:webp/ngcb15"
          className="h-24 w-24 lg:w-52 lg:h-52"
        />
      </Marquee>
    </>
  );
}

export default Company;
