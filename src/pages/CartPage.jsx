import React from "react";
import { CartCard } from "../components";
import { useSelector } from "react-redux";

export const CartPage = () => {
  const products = useSelector((state) => state.cartState.cartList);
  const total = useSelector((state) => state.cartState.total);

  const renderCartList = products.map((product) => {
    return <CartCard key={product.id} product={product} />;
  });

  return (
    <section className="min-h-svh p-4">
      <h3 className="text-xl text-center">
        CartItems: {products.length} / TotalPrice: ${total}
      </h3>
      <ul>{renderCartList}</ul>
    </section>
  );
};
