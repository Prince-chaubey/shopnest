import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = ({handleCart}) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const URL = `https://dummyjson.com/products/${id}`;
            try {
                const res = await axios.get(URL);
                console.log(res.data);
                setProduct(res.data);
            } catch (error) {
                console.log('Error while fetching single Product', error);
            }
        };
        getProduct();
    }, [id]);

    return (
        <div className="py-[105px] px-4 sm:px-8 md:px-16 lg:px-20 bg-gray-100 min-h-screen flex items-center justify-center">
            {product && product.id ? (
                <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
                    {/* Product Image */}
                    <div className="md:w-1/2 p-6 flex items-center justify-center">
                        <img
                            className="object-cover object-center w-full h-auto max-h-96 md:max-h-[500px] rounded-lg shadow-md border border-gray-200"
                            alt={product.title}
                            src={product.thumbnail}
                        />
                    </div>

                    {/* Product Details */}
                    <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                        <div>
                            <h3 className="text-gray-500 text-xs sm:text-sm uppercase font-medium tracking-widest">
                                {product.category}
                            </h3>
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
                                {product.title}
                            </h1>

                            {/* Price & Discount */}
                            <div className="flex items-center space-x-4 mt-3">
                                <span className="text-gray-800 font-semibold text-lg sm:text-xl">
                                    ₹{Math.ceil(product.price * 87)}
                                </span>
                                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                                    {product.discountPercentage}% OFF
                                </span>
                            </div>

                            <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
                                {product.description}
                            </p>

                            {/* Rating (Reduced Margin) */}
                            <div className="flex items-center mt-2">
                                <span className="text-yellow-500 text-lg">⭐</span>
                                <span className="text-gray-800 ml-1 font-medium text-sm sm:text-base">
                                    {product.rating}/ 5
                                </span>
                            </div>
                        </div>

                        {/* Buttons (Reduced Gap) */}
                        <div className="mt-3 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                            <button className="w-full sm:w-1/2 text-white bg-indigo-600 hover:bg-indigo-700 py-3 px-6 rounded-lg font-semibold shadow-lg transition cursor-pointer" onClick={handleCart}>
                                Add to Cart 🛒
                            </button>
                            <button className="w-full sm:w-1/2 text-indigo-600 border border-indigo-600 hover:bg-indigo-100 py-3 px-6 rounded-lg font-semibold shadow-lg transition cursor-pointer">
                                Buy Now 💳
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-600">Loading...</p>
            )}
        </div>
    );
};

export default SingleProduct;
