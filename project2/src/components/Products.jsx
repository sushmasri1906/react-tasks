// import {useNavigate} from "react-router-dom"
// import React from 'react'

// function Products() {
//     const navigate=useNavigate()
//     const buy=()=>{
//         navigate("/Checkout")
//     }
//   return (
//     <>
//     <div>
//         <p>product1</p>
//         <button onClick={buy}>Buy</button>
//     </div>
//     <div>
//         <p>product2</p>
//         <button onClick={buy}>Buy</button>
//     </div>
//     <div>
//         <p>product3</p>
//         <button onClick={buy}>Buy</button>
//     </div>
//     </>
//   )
// }

// export default Products
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Products() {
  const navigate = useNavigate();

  const buy = () => {
    navigate("/Checkout");
  };

  return (
    <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-md shadow-md p-6">
        <p className="text-lg font-semibold mb-2">Product 1</p>
        <button onClick={buy} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Buy</button>
      </div>
      <div className="bg-white rounded-md shadow-md p-6">
        <p className="text-lg font-semibold mb-2">Product 2</p>
        <button onClick={buy} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Buy</button>
      </div>
      <div className="bg-white rounded-md shadow-md p-6">
        <p className="text-lg font-semibold mb-2">Product 3</p>
        <button onClick={buy} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Buy</button>
      </div>
    </div>
  );
}

export default Products;
