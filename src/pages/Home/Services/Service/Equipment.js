import React from "react";
import { Link } from "react-router-dom";

const Equipment = ({ item }) => {
  const { id, image, title, price, productType, material, brand } = item;
  return (
    <div className="wrapper antialiased text-gray-900 gap-x-3 p-5">
      <div>
        <img
          src={image}
          alt=" random imgee"
          className="w-full h-80 gap-x-4 object-cover object-center rounded-lg shadow-md"
        />

        <div className="relative px-4 -mt-16  ">
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-baseline">
              <span className="bg-green-200 text-green-800 text-xs p-1 inline-block rounded-full  uppercase font-semibold tracking-wide">
                {productType}
              </span>
              <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                {material} &bull; {brand}
              </div>
            </div>

            <h4 className="mt-1 text-xl text-left font-semibold uppercase leading-tight truncate">
              {title}
            </h4>

            <div className="mt-1 text-left font-semibold">$ {price}</div>
            <div className="mt-4 text-right">
              <span className="text-teal-600 text-md font-semibold bg-pink-400 rounded text-white p-4">
                <Link to={`/services/${id}`}>
                  <button>Details</button>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
