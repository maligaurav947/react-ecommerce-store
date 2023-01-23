import React, { useEffect, useState } from "react";
import Feature from "./Home/Feature";
import Product from "./Home/Product/Product";
import EarlyAcces from "./Home/EarlyAcces";
import Hero from "./Home/Hero";
import Loader from "./Extra/Loader";
import Cart from "./Home/Product/Card";
import Navbar from "./Home/Product/NavBar";
function DashBoard() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {!loaded ? (
        <Loader />
      ) : (
        <>
          <Hero />

          <EarlyAcces />
        </>
      )}
    </>
  );
}

export default DashBoard;
