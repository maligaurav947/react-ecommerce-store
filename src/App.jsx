import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Card from "./components/Extra/Card";
import Hero from "./components/Home/Hero";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Hero />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
