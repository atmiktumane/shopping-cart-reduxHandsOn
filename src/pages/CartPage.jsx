import React from "react";
import { CartCard } from "../components";

export const CartPage = () => {
  const products = [
    {
      id: "1",
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 149,
      image: "/images/1001.png",
    },
    {
      id: "2",
      name: "boAt Rockerz 450",
      price: 49,
      image: "/images/1002.png",
    },
  ];

  const renderCartList = products.map((product) => {
    return <CartCard key={product.id} product={product} />;
  });

  return (
    <section className="min-h-svh p-4">
      <ul>{renderCartList}</ul>
    </section>
  );
};
