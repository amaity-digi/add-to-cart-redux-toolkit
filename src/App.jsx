import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductCart from "./components/ProductCart";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AddToCart from "./components/AddToCart";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ProductCart />}/>
        <Route exact path="/cart" element={<AddToCart />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
