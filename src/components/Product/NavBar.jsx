import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
const Navbar = ({ setShow, size }) => {
  return (
    <nav
      className="fixed top-3 right-3"
      style={{
        zIndex: "999999",
      }}
    >
      <div className="flex relative">
        <span>
          <AiOutlineShopping size={40} onClick={() => setShow(true)} />
        </span>
        <div
          className="absolute right-0 w-5 grid place-content-center text-white h-5 bg-red-600 rounded-full"
          onClick={() => setShow(false)}
        >
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
