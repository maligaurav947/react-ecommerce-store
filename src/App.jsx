import { HashRouter, Route, Routes } from "react-router-dom";

import View from "./components/Extra/View";
import Error from "./components/Extra/assets/Error";
import DashBoard from "./components/DashBoard";
import "./App.css";
import Product from "./components/Product/Product";
import Contact from "./components/Footer/Contact/Contact";
import KidsProduct from "./components/Product/Kids/KidsProduct";
import WomenProduct from "./components/Product/Women/WomenProduct";
import MenProduct from "./components/Product/Men/MenProduct";

function App() {
  return (
    <>
      <HashRouter>
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
      </HashRouter>
    </>
  );
}

export default App;
