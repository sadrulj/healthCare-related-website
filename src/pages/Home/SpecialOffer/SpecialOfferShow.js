import React, { useEffect, useState } from "react";
import SpecialOffer from "./SpecialOffer";

const SpecialOfferShow = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://peaceful-refuge-69200.herokuapp.com/products/")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <h2 className="text-4xl p-3">Deal Of The Day</h2>
      <div className="container mx-auto border-2 border-blue-300 border-solid rounded-xl grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
        {items.slice(16, 19).map((item) => (
          <SpecialOffer key={item._id} item={item}></SpecialOffer>
        ))}
      </div>
    </div>
  );
};

export default SpecialOfferShow;
