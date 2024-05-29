import React from "react";

export const CartCard = ({ product }) => {
  const { id, name, price, image } = product;
  return (
    <li className="h-24 flex justify-between border p-3 my-6 shadow-lg shadow-cyan-500/50">
      <img src={image} alt="" />
      <p className="my-auto">{name}</p>

      <div className="my-auto">
        <span className="mr-24">${price}</span>
        <button className="bg-red-500 hover:bg-red-700 px-3 py-1">
          remove
        </button>
      </div>
    </li>
  );
};
