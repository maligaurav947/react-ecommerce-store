import React from "react";
import Header from "../Header/Header";
import KidsProduct from "./Kids/KidsProduct";
import MenProduct from "./Men/MenProduct";
import WomenProduct from "./Women/WomenProduct";
import Footer from "./../Footer/Footer";

function Product() {
  return (
    <>
      <Header />
      <KidsProduct />
      <MenProduct />
      <WomenProduct />
      <Footer />
    </>
  );
}

export default Product;
