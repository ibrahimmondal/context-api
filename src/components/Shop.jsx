import React, { useState } from "react";
import SingleProduct from "./SingleProduct";
import { faker } from "@faker-js/faker";
import { useContext } from "react";
import { darkTheme } from "../Context-API/DarkMode";

export default function Shop({cart, setCart}) {
  const {dark, toggleMode} = useContext(darkTheme);
  const productArray = [...Array(6)].map(() => ({
    id: faker.string.ulid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }));

  const [procucts] = useState(productArray);
  // console.log(productArray);

  // const [cart, setCart] = useState([]);
  // console.log(cart);

  return (
   <div className={dark ? "dark" : "light"}>
     <div className=" dark:bg-gray-800">
      <div className="grid grid-cols-3 gap-4 max-w-[1280px] mx-auto pt-8 ">
      {procucts.map((procuct) => (
        <SingleProduct product={procuct} key={procuct.id} cart={cart} setCart={setCart} />
      ))}
    </div>
    </div>
   </div>
  );
}
