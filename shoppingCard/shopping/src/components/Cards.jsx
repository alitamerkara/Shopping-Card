import React from "react";

const Cards = ({ products, setBasket, basket }) => {
  const handleClick = (e) => {
    const productName = e.target.value;
    const existingProduct = basket.find((item) => item.name == productName);
    if (existingProduct) {
      const updatedBasket = basket.map((item) =>
        item.name === productName
          ? {
              ...item,
              count: item.count + 1,
            }
          : item
      );
      setBasket(updatedBasket);
    } else {
      setBasket([
        ...basket,
        {
          name: productName,
          price: e.target.name,
          img: e.target.id,
          count: 1,
        },
      ]);
    }
  };
  return (
    <div className="flex">
      {products.map((product, i) => {
        return (
          <div
            className="m-3 mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center"
            key={i}
          >
            <a href="#">
              <img className="rounded-t-lg" src={product.url} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">
                ${product.price}
              </p>
              <div>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  value={product.name}
                  name={product.price}
                  id={product.url}
                  onClick={handleClick}
                >
                  Add to Basket
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
