import React, { useEffect, useState } from "react";
import Accessories from "./Service/Accessories";
import Equipment from "./Service/Equipment";
import Medicine from "./Service/Medicine";

const ServicesShow = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://peaceful-refuge-69200.herokuapp.com/products/")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <>
      <div className="container flex flex-wrap mx-auto">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#medicine"
                role="tablist"
              >
                <img
                  className="mx-auto"
                  src="https://medik.wpengine.com/wp-content/uploads/2020/05/Medication.png"
                  alt=""
                />
                Medicine
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#equipment"
                role="tablist"
              >
                <img
                  className="mx-auto"
                  src="https://medik.wpengine.com/wp-content/uploads/2020/05/Radiology.png"
                  alt=""
                />
                Equipment
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#accessories"
                role="tablist"
              >
                <img
                  className="mx-auto"
                  src="https://medik.wpengine.com/wp-content/uploads/2020/05/Devices.png"
                  alt=""
                />
                Accessories
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={
                    openTab === 1
                      ? "grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3"
                      : "hidden"
                  }
                  id="medicine"
                >
                  {items
                    .filter((item) => item.productType === "Medicine")
                    .map((item) => (
                      <Medicine key={item._id} item={item}></Medicine>
                    ))}
                </div>
                <div
                  className={
                    openTab === 2
                      ? "grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3"
                      : "hidden"
                  }
                  id="equipment"
                >
                  {items
                    .filter((item) => item.productType === "Equipment")
                    .map((item) => (
                      <Equipment key={item._id} item={item}></Equipment>
                    ))}
                </div>
                <div
                  className={
                    openTab === 3
                      ? "grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3"
                      : "hidden"
                  }
                  id="accessories"
                >
                  {items
                    .filter((item) => item.productType === "Accessories")
                    .map((item) => (
                      <Accessories key={item._id} item={item}></Accessories>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <ServicesShow color="pink" />
    </>
  );
}
