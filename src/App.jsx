import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Component/Navbar';
import Allproducts from './Allproducts/Allproducts';
import Cart from './Cart/Cart';
import Login from './Pages/Login';
import Sign from './Pages/Sign';
import toast, { Toaster } from 'react-hot-toast';
import ContactUs from './ContactUs/ContactUs';
import Singleproduct from "./Allproducts/Allproducts"
import AboutUs from "../src/AboutUs/AboutUs"
import 'flowbite';



/*************  ✨ Codeium Command ⭐  *************/
/**
 * The App component serves as the main entry point for the application. It manages the state and logic
 * for the shopping cart, including adding, removing, and adjusting item quantities. It also handles
 * promotional code application and displays the total cost and number of items in the cart. The component
 * utilizes React Router for navigation between different pages like Home, Cart, All Products, Contact Us,
 * About Us, Login, Sign, and a product detail page. Additionally, it integrates a notification system 
 * using react-hot-toast for user feedback.
 */

/******  339724c6-8f14-44bf-9c31-061712ad9fa2  *******/
const App = () => {
  const [cart, setCart] = useState([]);
  const [promo,setPromo]=useState("");
  const [Checkoutprice,SetCheckoutprice]=useState();
  const [error,SetErorr]=useState("");


 
  //PromoCode handling

  function handlePromo(e){
    setPromo(e.target.value);
  }

  //Apply PromoCode
  function applyPromo(){
    if(promo==="DISCOUNT100"){
      SetCheckoutprice(totalCost()*9/10);
      SetErorr("GOT 10% DISCOUNT");
      setPromo("");
    }
    else{
    
      SetCheckoutprice(totalCost())
    }
  }



  // Handle adding items to cart
  function handleCart(product) {
    const isAlreadyAdded = cart.find((item) => item.id === product.id);

    if (isAlreadyAdded) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    toast.success("Item added to cart");
  }
   //total items
  function totalItems(){
    return cart.reduce((total,item)=>total+item.quantity,0);
  }

  // Handle increasing quantity
  function handleIncrease(id) {
    const updatedCart = cart.map((item) => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  }

  // Handle decreasing quantity and remove items with 0 quantity
  function handleDecrease(id) {
    const updatedCart = cart
      .map((item) =>
        item.id === id && item.quantity>0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0); // Remove items with 0 quantity

    setCart(updatedCart);
  }

  //Remove Items
  function handleRemove(id){
    const updatedCart=cart.filter((item)=>{
      return item.id!==id;
    })
    setCart(updatedCart);
    toast.success("Item deleted")
  }
  //total price of cart
  function totalCost(){
    return cart.reduce((total,item)=>total+item.price*item.quantity,0);
  }
  

  

  return (
    <BrowserRouter>
      <Navbar totalItems={totalItems}/>
      <Routes>
        <Route path='/' element={<Home handleCart={handleCart}/>} />
        <Route 
          path='/cart' 
          element={
          <Cart
           cart={cart}
            handleDecrease={handleDecrease} 
            handleIncrease={handleIncrease} 
            handleCart={handleCart}
            totalItems={totalItems}
            handleRemove={handleRemove} 
            totalCost={totalCost}
            promo={promo}
            handlePromo={handlePromo}
            applyPromo={applyPromo}
            Checkoutprice={Checkoutprice}
            error={error}
            />
          
          } 
            
        />
        <Route 
          path='/allproducts' 
          element={<Allproducts handleCart={handleCart} />} 
        />
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/sign' element={<Sign/>}/>
        <Route path='/product/:id' element={<Singleproduct handleCart={handleCart}/>}/>
      </Routes>
      <Toaster /> 
    </BrowserRouter>
  );
};

export default App;