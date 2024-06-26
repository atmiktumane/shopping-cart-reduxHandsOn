import React from "react";
import { remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";

export const CartCard = ({ product }) => {
  const { id, name, price, image } = product;
  const dispatch = useDispatch();
  return (
    <li className="h-24 flex justify-between border p-3 my-6 shadow-lg shadow-cyan-500/50">
      <img src={image} alt="" />
      <p className="my-auto">{name}</p>

      <div className="my-auto">
        <span className="mr-24">${price}</span>
        <button
          onClick={() => dispatch(remove(product))}
          className="bg-red-500 hover:bg-red-700 px-3 py-1"
        >
          remove
        </button>
      </div>
    </li>
  );
};
