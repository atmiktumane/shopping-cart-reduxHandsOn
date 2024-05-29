import React from "react";

export const ProductCard = (props) => {
  const { id, name, price, image } = props.product;
  return (
    <div className="w-96 border p-2 m-3">
      <img className="rounded h-72" src={image} alt={id} />
      <p>{name}</p>
      <div className="flex justify-between">
        <span className="mt-2">${price}</span>
        <button className="bg-blue-400 hover:bg-blue-600 px-3 py-1 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
