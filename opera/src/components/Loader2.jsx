import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loader2 = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh", // Full viewport height
        width: "100%", // Full viewport width
      }}
    >
      <RotatingLines
        visible={true}
        height="50"
        width="50"
        strokeColor="#D16655"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader2;
