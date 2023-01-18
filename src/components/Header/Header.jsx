import React, { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Card from "./../Extra/Card";

function Header() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <HiOutlineShoppingBag
        style={{
          zIndex: "9999999",
        }}
        className="text-4xl absolute right-2 top-2"
        onClick={() => {
          setVisible(!visible);
        }}
      />
      {!visible ? null : (
        <>
          <Card />
        </>
      )}
    </>
  );
}

export default Header;
