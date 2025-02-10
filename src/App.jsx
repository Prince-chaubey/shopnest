import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Component/Navbar';
import Allproducts from './Allproducts/Allproducts';
import Cart from './Cart/Cart';
import Men from './Pages/Men';
import Kids from './Pages/Kids';
import Login from './Pages/Login';

const App = () => {
  const [cart, setCart] = useState([]);

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
  }
  //total price of cart
  function totalCost(){
    return cart.reduce((total,item)=>total+item.price*item.quantity,0);
  }

  return (
    <BrowserRouter>
      <Navbar totalItems={totalItems}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route 
          path='/cart' 
          element={<Cart cart={cart} handleDecrease={handleDecrease} handleIncrease={handleIncrease} handleCart={handleCart} totalItems={totalItems} handleRemove={handleRemove} totalCost={totalCost}/>} 
        />
        <Route 
          path='/allproducts' 
          element={<Allproducts handleCart={handleCart} />} 
        />
        <Route path='/mens' element={<Men />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
