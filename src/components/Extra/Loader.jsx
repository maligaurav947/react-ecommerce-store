import React from "react";
import { FlippingCubeLoader } from "react-loaders-kit";

function Loader() {
  const loaderProps = {
    loading: true,
    size: 50,
    duration: 3,
  };

  return (
    <div className="grid items-center justify-center h-screen">
      <FlippingCubeLoader {...loaderProps} />
    </div>
  );
}

export default Loader;
