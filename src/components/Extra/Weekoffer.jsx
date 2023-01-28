import React from "react";
import Countdown from "react-countdown";

// Random component

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
  } else {
    // Render a countdown
    return (
      <div className="flex  gap-5 text-center lg:text-orange-700">
        <div>
          0{days}
          <div className="text-lg">Day</div>
        </div>
        :
        <div>
          0{hours}
          <div className="text-lg">hours</div>
        </div>
        :
        <span>
          {minutes}
          <div className="text-lg">minutes</div>
        </span>
        :
        <span>
          {seconds}
          <div className="text-lg">seconds</div>
        </span>
      </div>
    );
  }
};

function Weekoffer() {
  return (
    <>
      <div className="flex items-center justify-center mb-10 mt-10 gap-5 p-5 ">
        <div>
          <img
            src="https://m.media-amazon.com/images/I/711Tbdm49bL._UX569_.jpg"
            className="h-96"
          />
        </div>
        <div
          className="text-3xl gap-10 grid place-content-center w-1/2 absolute lg:static lg:text-6xl 
          "
        >
          <h2>Deal Of The Week</h2>
          <div>
            <Countdown date={Date.now() + 99999999} renderer={renderer} />
          </div>
          <div className="grid justify-start">
            <button className="text-base button-87">Shop Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weekoffer;
