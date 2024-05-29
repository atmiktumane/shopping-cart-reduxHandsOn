import React from "react";
import { Route, Routes } from "react-router-dom";
import { CartPage, HomePage } from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};
