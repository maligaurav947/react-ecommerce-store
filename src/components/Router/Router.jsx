import React from "react";
import { Route, Routes } from "react-router-dom";
import KidsProduct from "../Product/Kids/KidsProduct";
import MenProduct from "../Product/Men/MenProduct";
import DashBoard from "./../DashBoard";
import Product from "./../Product/Product";
import WomenProduct from "./../Product/Women/WomenProduct";
import Contact from "./../Footer/Contact/Contact";
import View from "./../Extra/View";
import Error from "./../Extra/assets/Error";

function Router() {
  return (
    <Routes>
      <Route index element={<DashBoard />} />
      <Route path="/" element={<DashBoard />} />
      <Route path="/product" element={<Product />} />
      <Route path="/kidsProduct" element={<KidsProduct />} />
      <Route path="/womenProduct" element={<WomenProduct />} />
      <Route path="/menProduct" element={<MenProduct />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/:id" element={<View />} />
      <Route path="*" element={<Error />} />
      <Route element={<Error />} />
    </Routes>
  );
}

export default Router;
