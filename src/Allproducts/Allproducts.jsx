import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../Layout/Layout';

const Allproducts = () => {
  const [allCategory, setAllCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [FilteredCategory,setFilteredCategory]=useState("");

  const selectCategory=(category)=>{
    setFilteredCategory(category);
  }

  // Fetch all categories
  useEffect(() => {
    const getAllCategory = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/products/categories');
        console.log('Categories:', res.data); // Debugging
        setAllCategory(res.data || []); // Ensure it's an array
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
        console.log('Products:', res.data); // Debugging
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
      <div className='bg-black text-white flex flex-wrap gap-[15px] m-[15px] p-[10px]'>
        <h1 className='text-xl font-bold w-full'>All Categories</h1>
        {
          allCategory.map((category, idx) => (
            <button key={idx} className='bg-gray-300 text-black p-[10px] rounded-md' onClick={()=>selectCategory(category.name)}>
              {category.name} {/* Updated to use category.name instead of category */}
            </button>
          ))
          }
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
            <p className="mt-1">Rs.{Product.price}</p>
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
