import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import Filter from "../Filter/Filter";
import axios from "axios";

const Allproducts = ({ handleCart }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [searchedItem, setSearchedItem] = useState("");
  const [isFilter,setIsFilter]=useState(false);

  // Fetch all products
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setAllProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getAllProducts();
  }, []);

  const handleOnChange = (e) => {
    setSearchedItem(e.target.value);
  };

  const handleSearch = () => {
    const filteredItems = allProducts.filter((item) =>
      item.title.toLowerCase().includes(searchedItem.toLowerCase())
    );
    setAllProducts(filteredItems);
  };

  const toggleFilter=()=>{
    setIsFilter(!isFilter);
  }


  return (
    <Layout>
      <div className="pt-24">
        <div className="text-center mr-4">
        <button className="bg-gray-200 text-gray-600 px-4 py-3 rounded-md font-medium cursor-pointer" onClick={toggleFilter}>{isFilter?"Hide Filter":"Show Filter"}</button>
        {isFilter?<Filter handleCart={handleCart} />:""}
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center items-center py-6 gap-1">
        <input
          type="text"
          value={searchedItem}
          onChange={handleOnChange}
          className="bg-gray-200 px-4 py-2 w-full max-w-md rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search Item"
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Product Grid */}
      <div className="px-4 md:px-10 mb-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allProducts.map((item) => (
            <div
              key={item.id}
              className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 cursor-pointer"
            >
              <div className="bg-gray-100 p-4 rounded-lg">
                <img
                  alt={item.title}
                  className="rounded-lg h-40 w-full object-cover"
                  src={item.thumbnail}
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-sm uppercase font-medium">
                  {item.category}
                </h3>
                <h2 className="text-gray-900 text-lg font-semibold mt-1">
                  {item.title}
                </h2>
                <p className="text-lg text-gray-700 font-medium mt-1">
                  ${item.price}
                </p>

                <button
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300 shadow-md cursor-pointer"
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
  