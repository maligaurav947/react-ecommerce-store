import React from "react";

function Card() {
  return (
    <>
      <div
        className="w-96 h-screen z-20 fixed top-0 right-0 bg-slate-100"
        style={{
          zIndex: "9999",
        }}
      >
        Hello
      </div>
    </>
  );
}

export default Card;
