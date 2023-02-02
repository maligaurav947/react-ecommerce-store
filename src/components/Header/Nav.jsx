import React from "react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
function Nav() {
  const [visable, setVisable] = React.useState(false);
  return (
    <>
      {!visable ? (
        <nav className="h-8 flex  text-base bg-blue-800 text-center text-white items-center justify-center sticky">
          FREE SHIPPING ON ALL OVER IND ORDERS OVER $50
          <IoClose
            className="absolute text-2xl font-semibold right-2 text-white"
            onClick={() => {
              setVisable(!visable);
            }}
          />
        </nav>
      ) : null}
    </>
  );
}

export default Nav;
