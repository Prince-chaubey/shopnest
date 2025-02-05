import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Component/Navbar';
import Allproducts from './Allproducts/Allproducts';
import Cart from './Cart/Cart';
import Men from './Pages/Men';
import Kids from './pages/Kids';
import Login from './Pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/allproducts' element={<Allproducts />} />
        <Route path='/mens' element={<Men />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
