import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../Layout/Layout';
import { FaTheRedYeti } from 'react-icons/fa6';

const Allproducts = () => {
  const [allCategory, setAllCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [showProducts,setShowProducts]=useState([]);
  const [FilteredCategory,setFilteredCategory]=useState("");

  const selectCategory=(category)=>{
    setFilteredCategory(category);
  }

  // Fetch all categories
  useEffect(() => {
    const getAllCategory = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/products/categories');
        // console.log(res);
        // console.log('Categories:', res.data); // Debugging
        setAllCategory(res.data || []); // Ensuring it is an array or not
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    getAllCategory();
  }, []);

  // Fetch products of a specific category (e.g., smartphones)
  useEffect(() => {
    const getProducts = async () => {
      if(!FilteredCategory) return;
      try {
        const URL=`https://dummyjson.com/products/category/${FilteredCategory}`
        const res = await axios.get(URL);
        // console.log('Products:', res.data); // Debugging
        setProducts(res.data.products || []); // Ensure it's an array
      } catch (error) {
        console.log('Error while fetching products:', error);
      }
    };
    getProducts();
  }, [selectCategory]);
  
  return (
    <Layout>
      <div className='px-[60px] py-[10px]'>
        {/* Categories Section */}
      <div className='bg-gray-100 text-black flex flex-wrap gap-[15px] m-[15px] p-[10px] text-center'>
        <h1 className='text-xl font-bold w-full'>All Categories</h1>
        <select onChange={(e)=>selectCategory(e.target.value)} className='mx-auto border-2 border-gray-400 rounded-md p-[5px] hover:cursor-pointer text-xl font-semibold'>
        {
          allCategory.filter((category)=> ["Laptops","Smartphones","Tops","Beauty","Sunglasses"].includes(category.name))
          .map((category, idx) => (
            <option key={idx} className='bg-gray-300 text-black p-[10px] rounded-md hover:cursor-pointer' value={category.name}>
              {category.name} {/* Updated to use category.name instead of category */}
            </option >
          ))
          }
          </select>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
  {
    products.map((Product, idx) => {
      return (
        <div key={idx} className='px-[20px] py-[15px] bg-gray-100 rounded-md hover:scale-105 transition-transform duration-300'>
          <div className='bg-black p-[20px] rounded-lg'>
            <img alt="ecommerce" className="rounded-lg h-[100%] w-[100%]" src={Product.thumbnail}/>
          </div>
          <div className="mt-4 text-center">
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{Product.category}</h3>
            <h2 className="text-gray-900 title-font text-2xl font-semibold">{Product.title}</h2>
            <p className="mt-1">${Product.price}</p>
          </div>
        </div>
      );
    })
  }
</div>


    </div>
    </Layout>
  );
};

export default Allproducts;
