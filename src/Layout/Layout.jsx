import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const Layout = ({ children }) => {
  return (
    <div>
    
      <div className="content">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;