// src/App.js

import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetails";
import Cart from "./components/Cart";
import ProductProvider from "./context/ProductContext";

const App = () => {
  return (
    <ProductProvider>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4">
          <ProductList />
          <ProductDetail />
          <Cart />
        </div>
      </div>
    </ProductProvider>
  );
};

export default App;
