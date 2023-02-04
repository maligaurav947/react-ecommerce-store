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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function DashBoard() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 0);
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
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            style={{
              zIndex: "999999999",
            }}
          />
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
