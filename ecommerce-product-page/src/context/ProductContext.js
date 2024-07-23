// src/context/ProductContext.js

import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Nike Air Max",
      price: 120,
      description: "Comfortable and stylish running shoes.",
      image: "https://via.placeholder.com/300x200?text=Nike+Air+Max",
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      price: 150,
      description: "Boost your running with premium cushioning.",
      image: "https://via.placeholder.com/300x200?text=Adidas+Ultraboost",
    },
    {
      id: 3,
      name: "Puma RS-X",
      price: 100,
      description: "Retro design with modern performance.",
      image: "https://via.placeholder.com/300x200?text=Puma+RS-X",
    },
    {
      id: 4,
      name: "Reebok Classic",
      price: 80,
      description: "Classic design that never goes out of style.",
      image: "https://via.placeholder.com/300x200?text=Reebok+Classic",
    },
    {
      id: 5,
      name: "New Balance 574",
      price: 95,
      description: "The perfect blend of style and comfort.",
      image: "https://via.placeholder.com/300x200?text=New+Balance+574",
    },
    {
      id: 6,
      name: "Asics Gel-Kayano",
      price: 110,
      description: "Stable and comfortable running shoes.",
      image: "https://via.placeholder.com/300x200?text=Asics+Gel-Kayano",
    },
    {
      id: 7,
      name: "Under Armour HOVR",
      price: 130,
      description: "Experience the future of running.",
      image: "https://via.placeholder.com/300x200?text=Under+Armour+HOVR",
    },
    {
      id: 8,
      name: "Saucony Jazz Original",
      price: 70,
      description: "Timeless design with a modern twist.",
      image: "https://via.placeholder.com/300x200?text=Saucony+Jazz+Original",
    },
    {
      id: 9,
      name: "Brooks Ghost 14",
      price: 115,
      description: "Smooth and balanced ride for every run.",
      image: "https://via.placeholder.com/300x200?text=Brooks+Ghost+14",
    },
    {
      id: 10,
      name: "Mizuno Wave Rider",
      price: 105,
      description: "Lightweight and responsive performance.",
      image: "https://via.placeholder.com/300x200?text=Mizuno+Wave+Rider",
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        selectedProduct,
        setSelectedProduct,
        cart,
        addToCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
