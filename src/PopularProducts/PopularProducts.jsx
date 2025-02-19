import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const PopularProducts = ({handleCart}) => {

    const [Allproducts,setAllProducts]=useState([]);
    useEffect(()=>{
     
        const getPopularItems=async()=>{
          try{
           const URL='https://dummyjson.com/carts/1';
           const res=await axios.get(URL);
           console.log(res.data.products)
           setAllProducts(res.data.products);
          }
          catch(err){
            console.log("Error while fetching products")
          }
        }

        getPopularItems();
    },[])
  return (
    <div className='p-[10px]'>
        <p className='font-bold text-4xl text-center underline'>Popular Products</p>

  <section className="text-gray-600 body-font py-[20px]">
  <div className="px-4 md:px-10 mb-10 w-full">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
     {
        Allproducts.map((item)=>{
           return <div
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
            
             <h2 className="text-gray-900 text-lg font-semibold mt-1">
               {item.title}
             </h2>
             <p className="text-lg text-gray-700 font-medium mt-1">
               Rs.{Math.ceil(item.price * 87)}
             </p>

             <button
               className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300 shadow-md cursor-pointer" onClick={()=>handleCart(item)}>
               Add to Cart 🛒
             </button>
           </div>
         </div>
        })
     }
    
    </div>
  </div>
</section>
    </div>
  )
}

export default PopularProducts