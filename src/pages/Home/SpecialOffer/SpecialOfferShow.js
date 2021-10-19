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
      <div className="container w-full mx-auto text-center bg-white border-2 border-blue-300 border-solid h-2/4 rounded-xl bg-blend-overlay grid grid-rows-1 grid-flow-col">
        {medication.slice(0, 3).map((item) => (
          <SpecialOffer key={item.id} item={item}></SpecialOffer>
        ))}
      </div>
    </div>
  );
};

export default SpecialOfferShow;
