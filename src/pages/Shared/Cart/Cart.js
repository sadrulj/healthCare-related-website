import React, { useEffect, useState } from "react";

const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const Cart = () => {
  const [cart, setCart] = useState(cartLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    fetch("https://peaceful-refuge-69200.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  const handleDelete = (_id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://peaceful-refuge-69200.herokuapp.com/orders/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Item Deleted Successfully");
            const remainingItems = cart.filter((order) => order._id !== _id);
            setCart(remainingItems);
            console.log(remainingItems);
          }
        });
    }
  };

  function sum(obj) {
    let sum = 0;
    for (var el in obj) {
      if (obj.hasOwnProperty(el)) {
        sum += parseFloat(obj[el]);
      }
    }
    return sum;
  }

  let totalPrice = cart.map(({ price }) => parseFloat(price));
  const total = sum(totalPrice);

  return (
    <div className="container p-8 mx-auto mt-12">
      <div className="w-full overflow-x-auto">
        <div className="my-2">
          <h3 className="text-xl font-bold tracking-wider">
            Shopping Cart {cart.length} item
          </h3>
        </div>
        {cart.length === 0 ? (
          <h2>Cart is Empty</h2>
        ) : (
          <div>
            <table className="w-full shadow-inner">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 font-bold whitespace-nowrap">
                    Image
                  </th>
                  <th className="px-6 py-3 font-bold whitespace-nowrap">
                    Product
                  </th>
                  <th className="px-6 py-3 font-bold whitespace-nowrap">Qty</th>
                  <th className="px-6 py-3 font-bold whitespace-nowrap">
                    Price
                  </th>
                  <th className="px-6 py-3 font-bold whitespace-nowrap">
                    Remove
                  </th>
                </tr>
              </thead>
              {cart.map((order) => (
                <tbody key={order._id}>
                  <tr>
                    <td>
                      <div className="flex justify-center">
                        <img
                          src={order.image}
                          className="object-cover h-28 w-28 rounded-2xl"
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="p-4 px-6 text-center whitespace-nowrap">
                      <div className="flex flex-col items-center justify-center">
                        <h3>{order.title}</h3>
                      </div>
                    </td>
                    <td className="p-4 px-6 text-center whitespace-nowrap">
                      <div>
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-flex w-6 h-6 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                        <input
                          type="text"
                          name="qty"
                          defaultValue="1"
                          className="w-12 text-center bg-gray-100 outline-none"
                        />
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-flex w-6 h-6 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="p-4 px-6 text-center whitespace-nowrap">
                      {order.price}
                    </td>
                    <td className="p-4 px-6 text-center whitespace-nowrap">
                      <button onClick={() => handleDelete(order._id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-red-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
            <div className="lg:w-2/4">
              <div className="mt-4">
                <div className="px-4 py-4 rounded-md">
                  <label
                    htmlFor="coupon code"
                    className="font-semibold text-gray-600"
                  >
                    Coupon Code
                  </label>
                  <input
                    type="text"
                    placeholder="coupon code"
                    defaultValue="LARA#234"
                    className="
                  w-full
                  px-2
                  py-2
                  border border-blue-600
                  rounded-md
                  outline-none
                "
                  />
                  <span className="block text-green-600">
                    Coupon code applied successfully
                  </span>
                  <button
                    className="
                  px-6
                  py-2
                  mt-2
                  text-sm text-indigo-100
                  bg-indigo-600
                  rounded-md
                  hover:bg-indigo-700
                "
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="py-4 rounded-md shadow">
                <h3 className="text-xl font-bold text-blue-600">
                  Order Summary
                </h3>
                <div className="flex justify-between px-4">
                  <span className="font-bold">Subtotal</span>
                  <span className="font-bold">${total}</span>
                </div>
                <div className="flex justify-between px-4">
                  <span className="font-bold">Discount</span>
                  <span className="font-bold text-red-600">- $5.00</span>
                </div>
                <div className="flex justify-between px-4">
                  <span className="font-bold">Sales Tax</span>
                  <span className="font-bold">$2.25</span>
                </div>
                <div
                  className="
                flex
                items-center
                justify-between
                px-4
                py-2
                mt-3
                border-t-2
              "
                >
                  <span className="text-xl font-bold">Total</span>
                  <span className="text-2xl font-bold">
                    ${total - 5 - 2.25}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button
                className="
              w-full
              py-2
              text-center text-white
              bg-blue-500
              rounded-md
              shadow
              hover:bg-blue-600
            "
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
