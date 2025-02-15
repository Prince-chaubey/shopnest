import React, { useState } from "react";
import img from "../assets/login.jpg";
import {app} from "../Firebase/Firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Sign = () => {
  //User Signup details
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  //authentication
  const auth=getAuth(app);


  const [errors, setErrors] = useState({});

  const handleChange =(e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let validateErrors = { name: "", email: "", password: "" };
    let error = false;

    if (user.name.trim() === "") {
      validateErrors.name = "Please enter your name";
      error = true;
    }

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
          
    //Checking whether error occured while signing or not
    if (error) {
      setErrors(validateErrors);
    } else {
      createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("User signed up:", user);
        alert(`Signed up successfully!`);
        setUser({ name: "", email: "", password: "" }); // Clear the form
        setErrors({});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Signup error:", errorCode, errorMessage);
        setErrors({ ...errors, firebase: errorMessage }); // Set a general Firebase error
        // ... (Handle specific Firebase errors if needed) ...
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
          alt="Sign Up"
          className="w-full h-auto object-cover object-center rounded-lg shadow-md"
        />
      </div>

      {/* Sign-Up Form Section */}
      <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-4 text-center">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.name && <span className="text-red-600 text-sm font-medium">{errors.name}</span>}
          </div>

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

          {/* Sign Up Button */}
          <button
            className="w-full text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sign;