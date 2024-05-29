import React from "react";
import { ProductCard } from "../components";

export const HomePage = () => {
  console.log("Hello World");
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
    {
      id: "3",
      name: "JBL Tune 760NC",
      price: 179,
      image: "/images/1003.png",
    },
    {
      id: "4",
      name: "MIVI Tune 760NC",
      price: 139,
      image: "/images/1004.png",
    },
    {
      id: "5",
      name: "Marshall Tune 760NC",
      price: 479,
      image: "/images/1005.png",
    },
    {
      id: "6",
      name: "WX389 Tune 760NC",
      price: 19,
      image: "/images/1006.png",
    },
  ];

  const renderProductList = products.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  return (
    <section className="min-h-svh p-4">
      <div className="flex flex-wrap justify-center items-center">
        {renderProductList}
      </div>
    </section>
  );
};
