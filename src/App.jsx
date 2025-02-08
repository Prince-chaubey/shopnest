import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Component/Navbar';
import Allproducts from './Allproducts/Allproducts';
import Cart from './Cart/Cart';
import Men from './Pages/Men';
import Kids from './pages/Kids';
import Login from './Pages/Login';

const App = () => {
  const [cart,setCart]=useState([]);
  
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
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart cart={cart}/>} />
        <Route path='/allproducts' element={<Allproducts handleCart={handleCart}/>} />
        <Route path='/mens' element={<Men />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
