import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom'
import Products from "./components/Products";
import DetailPage from "./components/DetailPage";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<DetailPage/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      <Footer/>
      
    </>
  );
}

export default App;
