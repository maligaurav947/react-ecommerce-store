import React, { useEffect, useState } from "react";

import EarlyAcces from "./Home/EarlyAcces";
import Hero from "./Home/Hero";
import Loader from "./Extra/Loader";

import Footer from "./Home/Footer";
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
          <Footer />
        </>
      )}
    </>
  );
}

export default DashBoard;
