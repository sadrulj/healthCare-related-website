import React from "react";
import image1 from "../../../images/sanitizer.png";

const Offer = () => {
  return (
    <div className="flex my-10 gap-x-8 mx-80">
      <div className="shadow-md rounded-md bg-blue-400">
        <div className="items-center grid grid-flow-col">
          <div className="p-4 ml-2">
            <h4 className="text-3xl font-bold">Save 20%</h4>
            <h6 className="text-xl font-bold text-white">On Sanitizer</h6>
            <p className="text-sm">99.9% Germ protection</p>
            <button
              className="bg-blue-800 text-white rounded-full py-3 px-6 mt-3"
              type="submit"
            >
              shop
            </button>
          </div>
          <div className="p-4">
            <img src={image1} alt="" />
          </div>
        </div>
      </div>
      <div className="shadow-md rounded-md bg-yellow-200">
        <div className="items-center grid grid-flow-col">
          <div className="p-4">
            <img src={image1} alt="" />
          </div>
          <div className="p-4 ml-2">
            <h4 className="text-3xl font-bold">15% Off</h4>
            <h6 className="text-xl font-bold text-white">Protective Gear</h6>
            <p className="text-sm">Covid Protection</p>
            <button
              className="bg-blue-800 text-white rounded-full py-3 px-6 mt-3"
              type="submit"
            >
              shop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
