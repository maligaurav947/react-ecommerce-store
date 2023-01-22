import React from "react";
import EarlyAcces from "./EarlyAcces";
import Feature from "./Feature";

import Product from "./Product/Product";
import Card from "./../Extra/Card";

function Hero() {
  return (
    <>
      <Card />
      <section
        className="p-2 grid items-center lg:flex h-screen justify-center"
        style={{
          backgroundColor: "#b3e140",
        }}
      >
        <main className="overflow-x-hidden">
          <img
            src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            className="rotate-90 translate-x-5 selection:bg-transparent "
          />
        </main>
        <main className="w-full lg:w-1/2 flex flex-col gap-5 items-start z-10">
          <h2 className="text-7xl lg:text-8xl">Just Do It</h2>
          <p>
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <button className="button-87">Where to buy?</button>
        </main>
      </section>
      <Feature />
      <Product />
      <EarlyAcces />
    </>
  );
}

export default Hero;
