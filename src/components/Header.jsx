import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const cartList = useSelector((state) => state.cartState.cartList);
  return (
    <header className="h-20 bg-slate-300 p-7 flex justify-between items-center">
      <Link to="/" className="col-1 flex items-center">
        <img className="h-12" src={logo} alt="Shopping Cart" />
        <span className="text-3xl">ShoppingKart</span>
      </Link>

      <div className="col-2 text-xl text-white">
        <NavLink
          to="/"
          className="bg-gray-500 hover:bg-gray-700 px-3 py-1 rounded mx-2"
        >
          Home
        </NavLink>
        <NavLink
          to="/cart"
          className="bg-gray-500 hover:bg-gray-700 px-3 py-1 rounded mx-2"
        >
          Cart
        </NavLink>
      </div>

      <div>
        <Link to="/cart">Cart : {cartList.length}</Link>
      </div>
    </header>
  );
};
