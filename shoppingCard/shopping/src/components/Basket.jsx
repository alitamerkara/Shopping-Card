import React, { useState } from "react";

const Basket = ({ basket, setBasket }) => {
  let total = 0;
  return (
    <div className="basketContainer mt-5 mb-5 ">
      <h2>Basket</h2>
      {basket.map((product, i) => {
        let count = product.price * product.count;
        total += count;
        return (
          <ul
            className="max-w-md divide-y divide-gray-200 dark:divide-gray-700"
            key={i}
          >
            <li className="pb-3 sm:pb-4 border border-gray-200 p-5 mt-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                  <img className="w-12 h-12 " src={product.img} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {product.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-white">
                    {product.count == 1
                      ? product.count + " piece"
                      : product.count + " pieces"}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  ${count}
                </div>
              </div>
            </li>
          </ul>
        );
      })}
      <div className="mt-5 text-right rtl:text-left text-gray-900 dark:text-white underline">
        Total: ${total}
      </div>
      <div>
        {basket.length != 0 ? (
          <button
            onClick={() => {
              setBasket([]);
            }}
            type="button"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Clear the Basket
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Basket;
