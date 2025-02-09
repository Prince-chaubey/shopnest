import React, { useState } from "react";

const Login = () => {
  const [error, setError] = useState({
    email: '',
    password: ''
  });

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = { email: '', password: '' };
    let isError = false;

    if (user.email.trim() === '') {
      validationErrors.email = 'Email is required';
      isError = true;
    }
    if (user.password.trim() === '') {
      validationErrors.password = 'Password is required';
      isError = true;
    } else if (user.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
      isError = true;
    }

    if (isError) {
      setError(validationErrors);
    } else {
      setError({ email: '', password: '' });
      alert(`Logged in with email: ${user.email}`);
    }
  };

  return (
    <div className="container mx-auto px-5 py-24 flex flex-wrap items-center">
      {/* Image Section */}
      <div className="lg:w-1/2 md:w-1/2 w-full mb-10 md:mb-0">
        <img
          src="https://via.placeholder.com/600x400"
          alt="Login"
          className="w-full h-auto object-cover object-center rounded-lg shadow-md"
        />
      </div>

      {/* Login Form Section */}
      <div className="lg:w-1/2 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Login</h2>
        <p className="leading-relaxed mb-5 text-gray-600">
          Welcome back! Please login to your account.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {error.email && <span className="text-red-600 font-medium">{error.email}</span>}
          </div>

          {/* Password Input */}
          <div className="relative mb-4">
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {error.password && <span className="text-red-600 font-medium">{error.password}</span>}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Additional Info */}
        <p className="text-xs text-gray-500 mt-3">
          Don't have an account? <a href="#" className="text-indigo-500">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
