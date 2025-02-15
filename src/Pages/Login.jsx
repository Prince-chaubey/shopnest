import React, { useState } from "react";
import img from "../assets/login.jpg";
import { app } from "../Firebase/Firebase"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  
  const auth=getAuth(app);
  const [errors, setErrors] = useState({});

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
    }
    else {
      signInWithEmailAndPassword(auth, user.email, user.password) // Corrected
      .then((userCredential) => {  // Use userCredential
          const user = userCredential.user; // Access the user
          alert(`Logged in with: ${user.email}`); // or user.email
          setUser({ email: "", password: "" });
          setErrors({});
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("Login error:", errorCode, errorMessage); // Log for debugging
          setErrors({ ...errors, firebase: errorMessage }); // Set error in state
      });

    }
  };

  return (
    <div className="container mx-auto px-5 py-12 flex flex-col items-center">
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

          {/* Login Button */}
          <button
            className="w-full text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
