import React from "react";
import image from "../../../images/banner.jpg";

const Banner = () => {
  return (
    <div className="overflow-clip overflow-hidden">
      <img
        style={{ height: "620px" }}
        className="container w-full mx-auto text-center bg-white border-2 border-gray-300 border-dashed h-2/4 rounded-xl bg-blend-overlay"
        src={image}
        alt=""
      />
    </div>
  );
};

export default Banner;
