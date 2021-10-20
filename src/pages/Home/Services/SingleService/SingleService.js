import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleService = () => {
  let { id } = useParams();
  id = parseInt(id);

  const [products, setProducts] = useState([]);
  const [show, setShow] = useState({});

  useEffect(() => {
    fetch("/medication.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.medication));
  }, []);

  useEffect(() => {
    const resultFound = products.find((medication) => medication.id === id);
    setShow(resultFound);
    // console.log(resultFound);
  }, [products, id]);

  return (
    <div className="container my-32 mx-auto p-4 md:p-0">
      <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
        <div className="bg-cover bg-bottom border w-full md:w-1/3 h-96 md:h-auto relative">
          <img src={show?.image} alt="" />
        </div>
        <div className="bg-white w-full md:w-2/3">
          <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
            <div className="bg-white lg:h-full shadow rounded p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
              <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                <h3 className="text-2xl font-bold">{show?.title}</h3>
                <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                  Brand: <br />
                  {show?.brand}
                </p>
                <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                  Product Type: <br />
                  {show?.productType}
                </p>
                <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                  Material: <br />
                  {show?.material}
                </p>
                <p className="mb-0 mt-3 text-grey-dark text-sm italic text-xl">
                  $ {show?.price}
                </p>
              </div>
              <div className="w-full lg:w-3/5 lg:px-3">
                <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                  {show?.desc}
                </p>
                <div className="text-left text-2xl mt-5"></div>
              </div>
              <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                <button className="bg-blue-400 rounded hover:bg-grey-darker text-blue-900 hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2">
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
