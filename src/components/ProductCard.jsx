import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";

export const ProductCard = ({ product }) => {
  const { id, name, price, image } = product;

  const dispatch = useDispatch();

  const getCartList = useSelector((state) => state.cartState.cartList);

  const [productInCart, setProductInCart] = useState(false);

  useEffect(() => {
    const itemInCart = getCartList.find((item) => item.id === id);

    if (itemInCart) {
      setProductInCart(true);
    } else {
      setProductInCart(false);
    }
  }, [getCartList, id]);

  return (
    <div className="w-96 border p-2 m-3">
      <img className="rounded h-72" src={image} alt={id} />
      <p>{name}</p>
      <div className="flex justify-between">
        <span className="mt-2">${price}</span>

        {productInCart ? (
          <button
            onClick={() => dispatch(remove(product))}
            className="bg-red-400 hover:bg-red-600 px-3 py-1 rounded"
          >
            Remove from Cart
          </button>
        ) : (
          <button
            onClick={() => dispatch(add(product))}
            className="bg-blue-400 hover:bg-blue-600 px-3 py-1 rounded"
          >
            Add to Cart
          </button>
        )}
        {/* <button
          onClick={() => dispatch(add(product))}
          className="bg-blue-400 hover:bg-blue-600 px-3 py-1 rounded"
        >
          Add to Cart
        </button> */}
      </div>
    </div>
  );
};
