import React, { useEffect, useState } from "react";
import EarlyAcces from "./Home/EarlyAcces";
import Hero from "./Home/Hero";
import Loader from "./Extra/assets/Loader";
import Footer from "./Footer/Footer";
import Nav from "./Header/Nav";
import Company from "./Extra/Company";
import Weekoffer from "./Extra/Weekoffer";
import Header from "./Header/Header";
import ShowCase from "./Home/ShowCase";

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
          <Nav />
          <Header />
          <Hero />
          <ShowCase />
          <Company />
          <EarlyAcces />
          <Weekoffer />
          <Footer />
        </>
      )}
    </>
  );
}

export default DashBoard;
