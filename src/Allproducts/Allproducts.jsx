import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import Filter from "../Filter/Filter";
import axios from "axios";

const Allproducts = ({ handleCart }) => {
  const [All, setAll] = useState([]);

  // Fetch all products
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setAll(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getAllProducts();
  }, []);

  return (
    <Layout>
      <Filter handleCart={handleCart} />
      
      {/* Product Grid */}
      <div className="px-10 py-5">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Explore Our Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {All.map((item) => (
            <div
              key={item.id}
              className="p-5 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <div className="bg-gray-100 p-4 rounded-lg">
                <img
                  alt="ecommerce"
                  className="rounded-lg h-40 w-full object-cover"
                  src={item.thumbnail}
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-sm uppercase font-medium">
                  {item.category}
                </h3>
                <h2 className="text-gray-900 text-xl font-semibold mt-1">
                  {item.title}
                </h2>
                <p className="text-lg text-gray-700 font-medium mt-1">
                  ${item.price}
                </p>

                <button
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300 shadow-md hover:cursor-pointer"
                  onClick={() => handleCart(item)}
                >
                  Add to Cart 🛒
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Allproducts;
