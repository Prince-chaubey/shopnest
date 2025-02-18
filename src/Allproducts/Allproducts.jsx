import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import Filter from "../Filter/Filter";
import axios from "axios";
import { Link } from "react-router-dom";

const Allproducts = ({ handleCart }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [searchedItem, setSearchedItem] = useState("");
  const [isFilter, setIsFilter] = useState(false);
  const [minvalue, setMinvalue] = useState("");
  const [maxvalue, setMaxvalue] = useState("");

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

  const handleMaxPrice = (e) => {
    setMaxvalue(e.target.value);
  };

  const handleMinPrice = (e) => {
    setMinvalue(e.target.value);
  };

  const toggleFilter = () => {
    setIsFilter(!isFilter);
  };

  const handleFilter = () => {
    const min = parseFloat(minvalue) || 0;
    const max = parseFloat(maxvalue) || Infinity;
    const filteredItems = allProducts.filter(
      (item) => item.price * 87 >= min && item.price * 87 <= max
    );
    setAllProducts(filteredItems);
  };

  return (
    <Layout>
      <div className="pt-24 px-4">
        {/* Toggle Filter Button */}
        <div className="text-center">
          <button
            className="bg-gray-200 text-gray-600 px-4 py-3 rounded-md font-medium cursor-pointer"
            onClick={toggleFilter}
          >
            {isFilter ? "Hide Filter" : "Show Filter"}
          </button>
          {isFilter && <Filter handleCart={handleCart} />}
        </div>

        {/* Search & Filter Section */}
        <div className="bg-gray-300 my-4 mx-auto max-w-5xl rounded-md p-6">
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
            <input
              type="text"
              value={searchedItem}
              onChange={handleOnChange}
              className="bg-gray-200 px-4 py-3 w-full md:w-3/4 max-w-lg rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 font-medium"
              placeholder="Search Item"
            />
            <button
              className="bg-blue-600 text-white px-4 font-medium  py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          {/* Price Filter */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 mt-4">
            <input
              type="text"
              value={minvalue}
              onChange={handleMinPrice}
              className="bg-gray-200 px-4 py-2  text-center text-gray-700 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Minimum Price"
            />
            <input
              type="text"
              value={maxvalue}
              onChange={handleMaxPrice}
              className="bg-gray-200 px-4 py-2 text-center text-gray-700 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Maximum Price"
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              onClick={handleFilter}
            >
              Filter
            </button>
          </div>
        </div>
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
               <Link to={`/singleproduct/${item.id}`}>
               <img
                  alt={item.title}
                  className="rounded-lg h-40 w-full object-cover"
                  src={item.thumbnail}
                />
               </Link>
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-gray-500 text-sm uppercase font-medium">
                  {item.category}
                </h3>
                <h2 className="text-gray-900 text-lg font-semibold mt-1">
                  {item.title}
                </h2>
                <p className="text-lg text-gray-700 font-medium mt-1">
                  Rs.{Math.ceil(item.price * 87)}
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
