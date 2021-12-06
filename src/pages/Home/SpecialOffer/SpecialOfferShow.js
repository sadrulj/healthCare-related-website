import React, { useEffect, useState } from "react";
import SpecialOffer from "./SpecialOffer";

const SpecialOfferShow = () => {
  const [medication, setMedication] = useState([]);
  useEffect(() => {
    fetch("./medication.json")
      .then((res) => res.json())
      .then((data) => setMedication(data.medication));
  }, []);
  return (
    <div>
      <h2 className="text-4xl text-left ml-40 p-3">Deal Of The Day</h2>
      <div className="container mx-auto border-2 border-blue-300 border-solid rounded-xl grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
        {medication.slice(0, 3).map((item) => (
          <SpecialOffer key={item.id} item={item}></SpecialOffer>
        ))}
      </div>
    </div>
  );
};

export default SpecialOfferShow;
