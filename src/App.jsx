import { HashRouter, Route, Routes } from "react-router-dom";

import Hero from "./components/Home/Hero";
import Product from "./components/Home/Product/Product";
import View from "./components/Extra/View";
import Error from "./components/Extra/Error";
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Hero />} />
          <Route path="/" element={<Hero />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<View />} />
          <Route path="*" element={<Error />} />
          <Route element={<Error />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
