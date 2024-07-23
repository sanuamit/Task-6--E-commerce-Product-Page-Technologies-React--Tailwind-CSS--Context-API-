// src/components/ProductDetail.js

import React from "react";
import { useProduct } from "../context/ProductContext";

const ProductDetail = () => {
  const { selectedProduct, setSelectedProduct, addToCart } = useProduct();

  if (!selectedProduct) return null;

  const handleClose = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    addToCart(selectedProduct);
    handleClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-lg w-full">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h2 className="text-xl font-semibold mt-4">{selectedProduct.name}</h2>
        <p className="text-gray-600">${selectedProduct.price}</p>
        <p className="mt-4">{selectedProduct.description}</p>
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-300 mr-2"
          >
            Close
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

export default ProductDetail;
