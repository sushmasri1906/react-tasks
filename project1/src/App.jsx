import React, { useState } from 'react';
import India from './components/India';
import Usa from './components/Usa';

function App() {
const[name,setname]=useState(" India")
  return (
    <>
   
    <div className="flex justify-center">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 "
      onClick={()=>{setname("India")}}>
        India
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  mt-3 ml-2"
      onClick={()=>{setname("Usa")}}>
        USA
      </button>
    </div>
    <div className='h-40 w-40'>
      <p>Tab</p>
      {name=== 'India' ? <India/> : <Usa/>}

    </div>
    </>
   
    );
}

export default App;
