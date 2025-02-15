import React, { useState } from "react";
import img from "../assets/login.jpg";
import { app } from "../Firebase/Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Loader state

  const auth = getAuth(app);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let validateErrors = { email: "", password: "" };
    let error = false;

    if (user.password.trim() === "") {
      validateErrors.password = "Please enter your password";
      error = true;
    } else if (user.password.length < 6) {
      validateErrors.password = "Password length must be greater than 5";
      error = true;
    }

    if (user.email.trim() === "") {
      validateErrors.email = "Please enter your email";
      error = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(user.email)) {
        validateErrors.email = "Invalid email format";
        error = true;
      }
    }

    if (error) {
      setErrors(validateErrors);
    } else {
      setLoading(true); // Show loader
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          setLoading(false); // Hide loader
          toast.success(`Login successful for ${user.email}`);
          setUser({ email: "", password: "" });
          setErrors({});
        })
        .catch((error) => {
          setLoading(false); // Hide loader
          const errorMessage = error.message;
          toast.error(`Login error: ${errorMessage}`);
          setErrors((prevErrors) => ({ ...prevErrors, firebase: errorMessage }));
        });
    }
  };

  return (
    <div className="container mx-auto px-5 pt-[105px] flex flex-col items-center">
      {/* Image Section */}
      <div className="w-full max-w-md flex justify-center mb-6">
        <img
          src={img}
          loading="lazy"
          alt="Login"
          className="w-full h-auto object-cover object-center rounded-lg shadow-md"
        />
      </div>

      {/* Login Form Section */}
      <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-4 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={user.email}
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.email && <span className="text-red-600 text-sm font-medium">{errors.email}</span>}
          </div>

          {/* Password Input */}
          <div className="relative mb-4">
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={user.password}
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.password && <span className="text-red-600 text-sm font-medium">{errors.password}</span>}
          </div>

          {/* Login Button with Loader */}
          <button
            className="w-full text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer flex items-center justify-center"
            type="submit"
            disabled={loading} // Disable button when loading
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
            ) : (
              "Login"
            )}
          </button>

          <span className="text-gray-600 font-medium">New to shopnest? </span>
          <Link to="/sign">
            <span className="text-blue-500 cursor-pointer font-medium">Create Account</span>         
          </Link>
        
        </form>
      </div>
    </div>
  );
};

export default Login;
