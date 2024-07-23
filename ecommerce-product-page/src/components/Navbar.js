// src/components/Navbar.js

import React from "react";
import { useProduct } from "../context/ProductContext";

const Navbar = () => {
  const { cart } = useProduct();

  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">E-commerce Store</h1>
        <div className="flex items-center">
          <a href="#products" className="mr-4 hover:text-blue-200">
            Home
          </a>
          <a href="#cart" className="relative hover:text-blue-200">
            Cart
            <span className="ml-1 bg-red-600 text-white rounded-full px-2 py-0.5 text-xs absolute top-0 right-0">
              {cart.length}
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
