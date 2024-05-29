import React from "react";
import { CartCard } from "../components";
import { useSelector } from "react-redux";

export const CartPage = () => {
  // const products = [
  //   {
  //     id: "1",
  //     name: "Sony Wh-Ch510 Bluetooth Wireless",
  //     price: 149,
  //     image: "/images/1001.png",
  //   },
  //   {
  //     id: "2",
  //     name: "boAt Rockerz 450",
  //     price: 49,
  //     image: "/images/1002.png",
  //   },
  // ];

  const products = useSelector((state) => state.cartState.cartList);
  const total = useSelector((state) => state.cartState.total);

  const renderCartList = products.map((product) => {
    return <CartCard key={product.id} product={product} />;
  });

  return (
    <section className="min-h-svh p-4">
      <h3 className="text-xl text-center">
        CartList: {products.length} / TotalPrice: ${total}
      </h3>
      <ul>{renderCartList}</ul>
    </section>
  );
};
