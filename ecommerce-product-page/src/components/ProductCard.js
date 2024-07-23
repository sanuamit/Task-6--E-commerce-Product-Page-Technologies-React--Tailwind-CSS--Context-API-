// src/components/ProductCard.js

import React from "react";
import { useProduct } from "../context/ProductContext";

const ProductCard = ({ product }) => {
  const { setSelectedProduct, addToCart } = useProduct();

  const handleSelectProduct = () => {
    setSelectedProduct(product);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="mt-2">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
        <p className="mt-2">{product.description}</p>
        <div className="mt-4 flex justify-between">
          <button
            onClick={handleSelectProduct}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            View Details
          </button>
          <button
            onClick={handleAddToCart}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
