import React from "react";
import Feature from "./Home/Feature";
import Product from "./Home/Product/Product";
import EarlyAcces from "./Home/EarlyAcces";
import Hero from "./Home/Hero";

function DashBoard() {
  return (
    <>
      <Hero />
      <Feature />
      <Product />
      <EarlyAcces />
    </>
  );
}

export default DashBoard;
