import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Basket from "./components/Basket";
import Milk from "./assets/milk.jpg";
import Meat from "./assets/meat.png";
import Egg from "./assets/egg.webp";
import Cheese from "./assets/cheese.avif";

function App() {
  const products = [
    {
      name: "meat",
      price: 20,
      url: Meat,
    },
    {
      name: "milk",
      price: 10,
      url: Milk,
    },
    {
      name: "egg",
      price: 15,
      url: Egg,
    },
    {
      name: "cheese",
      price: 12,
      url: Cheese,
    },
  ];
  const [basket, setBasket] = useState([]);
  return (
    <div className="flex flex-col items-center mt-5">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white ">
        Shopping Card App
      </h1>
      <div className="container">
        <Cards products={products} setBasket={setBasket} basket={basket} />
        <Basket basket={basket} setBasket={setBasket} />
      </div>
    </div>
  );
}

export default App;
