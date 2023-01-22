import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Card from "./components/Extra/Card";
import Hero from "./components/Home/Hero";
import Product from "./components/Home/Product/Product";
import View from "./components/Home/Product/View";
import Error from "./components/Extra/Error";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Hero />} />
          <Route path="/product" element={<Product />} />
          <Route path="/card" element={<Card />} />
          <Route path="/product/:id" element={<View />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;