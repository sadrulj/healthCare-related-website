import React from "react";

const Supplier = () => {
  return (
    <div className="">
      <h2 className="text-4xl mt-4 p-3">Our Clients...</h2>
      <div className="flex flex-row flex-auto justify-center overflow-x-scroll">
        <img
          src="https://medik.wpengine.com/wp-content/uploads/2020/05/client-8.png"
          alt=""
          className="rounded border-2 border-gray-200 max-w-full h-auto align-middle"
        />
        <img
          src="https://medik.wpengine.com/wp-content/uploads/2020/05/client-1-1.png"
          alt=""
          className="rounded border-2 border-gray-200 max-w-full h-auto align-middle"
        />
        <img
          src="https://medik.wpengine.com/wp-content/uploads/2020/05/client-2-1.png"
          alt=""
          className="rounded max-w-full h-auto align-middle border-2 border-gray-200"
        />
        <img
          src="https://medik.wpengine.com/wp-content/uploads/2020/05/client-3-1.png"
          alt=""
          className="rounded max-w-full h-auto align-middle border-2 border-gray-200"
        />
      </div>
    </div>
  );
};

export default Supplier;
