import { data } from "autoprefixer";
import React from "react";

function Feature() {
  const feature = [
    {
      img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80",
      title: "Brown Nike Sneaker",
      button: "Buy Now",
    },
    {
      img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Unparied Grey Running",
      button: "Buy Now",
    },
    {
      img: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80",
      title: "White Black Sneaker Nike",
      button: "Buy Now",
    },
    {
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Unparied Red",
      button: "Buy Now",
    },
  ];
  return (
    <main className="mt-5">
      <h3 className="pl-5 text-5xl">Features</h3>
      <div
        className={`grid grid-flow-row lg:grid-flow-col grid-cols-${feature.length} gap-2 p-5 h-full`}
      >
        {feature.map((data) => (
          <div className="flex flex-col  gap-2 items-start">
            <div
              className="feature-img rounded-md"
              style={{
                background: `url(${data.img})`,
                height: "260px",
                width: "100%",
                objectFit: "cover",
              }}
            ></div>
            <h4 className="text-2xl">{data.title}</h4>
            <button>{data.button}</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Feature;
