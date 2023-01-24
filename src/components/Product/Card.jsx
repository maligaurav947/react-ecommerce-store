import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article className="fixed h-full grid justify-center items-center right-0 top-0 w-full z-50 bg-white  ">
      <div
        className="h-96 overflow-x-auto"
        style={{
          width: "80vw",
        }}
      >
        {cart.map((item) => (
          <div className="flex mb-5 items-center justify-evenly" key={item.id}>
            <div className="">
              <img src={item.img} alt="" className="w-24" />
            </div>
            <div>
              <h2 className="text-base">{item.title}</h2>
              <p className="text-xl font-extrabold">₹{item.price}.00</p>
            </div>
            <div className="grid">
              <div className="flex items-center justify-center">
                <button onClick={() => handleChange(item, 1)}>+</button>
                <button>{item.amount}</button>
                <button onClick={() => handleChange(item, -1)}>-</button>
              </div>
              <button
                onClick={() => {
                  toast.success("Item Was Succesfuly Remove in card");
                  handleRemove(item.id);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
      </div>
    </article>
  );
};

export default Cart;
