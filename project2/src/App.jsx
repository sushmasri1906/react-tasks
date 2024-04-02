import {Route,Routes} from "react-router-dom"
import Home from "./components/Home"

import About from './components/About'
import Products from "./components/Products"
import Checkout from "./components/Checkout"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </div>
    </div>
  );
}
export default App