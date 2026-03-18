// components/Loader.jsx
import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../assets/Loading.json";

function Loader() {
  return (
    <div className="loader-container">
      <Lottie
        animationData={loaderAnimation}
        loop={true}
        style={{ width: 150, height: 150 }}
      />
    </div>
  );
}

export default Loader;