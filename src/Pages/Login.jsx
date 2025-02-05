import React from 'react';

const Login = () => {
  return (
    <div className="container mx-auto px-5 py-24 flex flex-wrap items-center">
      {/* Image Section */}
      <div className="lg:w-1/2 md:w-1/2 w-full mb-10 md:mb-0">
        <img 
          src="https://via.placeholder.com/600x400" // Replace with your login image URL
          alt="Login" 
          className="w-full h-auto object-cover object-center rounded-lg shadow-md"
        />
      </div>

      {/* Login Form Section */}
      <div className="lg:w-1/2 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Login</h2>
        <p className="leading-relaxed mb-5 text-gray-600">Welcome back! Please login to your account.</p>
        
        {/* Email Input */}
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
          />
        </div>

        {/* Password Input */}
        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
          />
        </div>

        {/* Login Button */}
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Login
        </button>

        {/* Additional Info */}
        <p className="text-xs text-gray-500 mt-3">Don't have an account? <a href="#" className="text-indigo-500">Sign up</a></p>
      </div>
    </div>
  );
};

export default Login;