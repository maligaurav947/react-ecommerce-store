import { HashRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Home/Product/Product";
import View from "./components/Extra/View";
import Error from "./components/Extra/Error";
import DashBoard from "./components/DashBoard";
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<DashBoard />} />
          <Route path="/" element={<DashBoard />} />
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
