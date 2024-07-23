// src/components/Cart.js

import React from "react";
import { useProduct } from "../context/ProductContext";

const Cart = () => {
  const { cart } = useProduct();

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div id="cart" className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul className="divide-y divide-gray-200">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="py-2 flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between items-center">
              <p className="text-xl font-semibold">Total: ${totalPrice}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
