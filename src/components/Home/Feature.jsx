import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Feature() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const slides = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1669703777692-0289d224bcc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      image:
        "https://images.unsplash.com/photo-1611912901957-80caca8de69a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoaW5nJTIwbW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      image:
        "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      image:
        "https://images.unsplash.com/photo-1572495641004-28421ae52e52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmclMjBtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <main className="mt-5">
      <h3 className="pl-5 text-5xl">Features</h3>
      <div className={`gap-2 p-5 h-full `}>
        <Carousel responsive={responsive}>
          {slides.map((img) => (
            <img
              src={img.image}
              style={{
                height: "80vh",
                width: "100%",
                objectPosition: "center",
                objectFit: "cover",
              }}
              className="opacity-75 hover:opacity-100 transition-transform"
            />
          ))}
        </Carousel>
      </div>
    </main>
  );
}

export default Feature;
