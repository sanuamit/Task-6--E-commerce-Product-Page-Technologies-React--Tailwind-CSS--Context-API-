// src/components/ProductList.js

import React from "react";
import { useProduct } from "../context/ProductContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products } = useProduct();

  return (
    <div id="products" className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Available Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
