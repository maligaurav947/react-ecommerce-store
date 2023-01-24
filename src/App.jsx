import { HashRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import View from "./components/Extra/View";
import Error from "./components/Extra/Error";
import DashBoard from "./components/DashBoard";
import "./App.css";
import Product from "./components/Product/Product";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<DashBoard />} />
          <Route path="/" element={<DashBoard />} />
          <Route path="/product" element={<Product />} />
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
