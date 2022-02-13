import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const SingleService = () => {
  const { user } = useAuth();
  let _id = useParams();
  _id = _id.id;

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://peaceful-refuge-69200.herokuapp.com/products/${_id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [_id]);

  const handleCart = async () => {
    const newInfo = {
      image: product.image,
      price: product.price,
      material: product.material,
      productType: product.productType,
      brand: product.brand,
      title: product.title,
      email: user.email,
    };
    fetch("https://peaceful-refuge-69200.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order Added to Cart");
        }
      });
  };

  return (
    <div className="container my-32 mx-auto p-4 md:p-0">
      <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">
        <div className="bg-cover bg-bottom border w-full md:w-1/3 h-96 md:h-auto relative">
          <img src={product?.image} alt="" />
        </div>
        <div className="bg-white w-full md:w-2/3">
          <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
            <div className="bg-white lg:h-full shadow rounded p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
              <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                <h3 className="text-2xl font-bold">{product?.title}</h3>
                <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                  Brand: <br />
                  {product?.brand}
                </p>
                <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                  Product Type: <br />
                  {product?.productType}
                </p>
                <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                  Material: <br />
                  {product?.material}
                </p>
                <p className="mb-0 mt-3 text-grey-dark text-sm italic text-xl">
                  $ {product?.price}
                </p>
              </div>
              <div className="w-full lg:w-3/5 lg:px-3">
                <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
                  {product?.desc}
                </p>
                <div className="text-left text-2xl mt-5"></div>
              </div>
              <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                <button
                  onClick={handleCart}
                  className="bg-blue-400 rounded hover:bg-grey-darker text-blue-900 hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2"
                >
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
