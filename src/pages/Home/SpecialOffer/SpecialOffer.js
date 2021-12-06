import React from "react";

const SpecialOffer = ({ item }) => {
  const { brand, title, image, price, productType } = item;
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex justify-center items-center grid-rows-1 grid-cols-3">
        <div className="max-w-xs container bg-white text-left rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div>
            <span className="text-white text-xs font-bold text-left rounded-lg bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4">
              {brand}
            </span>
            <h1 className="text-2xl mt-2 ml-4 font-bold text-gray-800 hover:text-gray-900 transition duration-100">
              {title}
            </h1>
            <p className="ml-4 mt-1 mb-2 text-gray-700">$ {price}</p>
          </div>
          <div className="relative overflow-clip">
            <h2 className="absolute mt-2 ml-56 rounded-full bg-red-300 text-white p-2 font-bold">
              Off 20%
            </h2>
            <img
              className="w-full cursor-pointer object-cover"
              src={image}
              alt=""
            />
          </div>
          <div className="flex p-4 justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-white text-xs font-bold rounded-lg bg-purple-300 inline-block py-1.5 px-4">
                {productType}
              </span>
            </div>
            <div className="flex space-x-2">
              <div className="flex space-x-1 items-center">
                <a href="/">
                  <button className="rounded-lg bg-blue-500 text-white py-2 px-2  cursor-pointer hover:underline">
                    Shop Now {"-->"}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
