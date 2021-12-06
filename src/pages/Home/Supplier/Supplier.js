import React from "react";

const Supplier = () => {
  return (
    <div className="container  mx-auto">
      <h2 className="text-4xl text-left ml-40 p-3">Our Clients...</h2>
      <div className="flex justify-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-4">
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
    </div>
  );
};

export default Supplier;
