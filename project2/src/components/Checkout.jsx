// import React from 'react'

// function Checkout() {
//   return (
//     <div>Checkout</div>
//   )
// }

// export default Checkout;
import React from 'react';

function Checkout() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Checkout</h1>
      <div className="bg-white p-6 shadow-md rounded-md">
        {/* Checkout form */}
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <input type="text" id="address" name="address" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
          </div>
          {/* Other form fields */}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
