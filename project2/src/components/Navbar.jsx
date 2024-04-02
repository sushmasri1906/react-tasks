import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    
    <div className="bg-gray-500 py-6">
    <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/Products" className="text-white hover:text-gray-300">Products</Link>
          <Link to="/About" className="text-white hover:text-gray-300">About</Link>
      </div>
    </div>
  );
}




export default Navbar;

