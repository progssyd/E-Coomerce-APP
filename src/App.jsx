import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LandPage from "./Components/LandPage";
import About from "./Components/About";
import Callus from "./Components/Callus"; 
import ProductDetails from "./Components/ProductDetails";
function App() {
  return (
    <BrowserRouter>

      <div className="App">

        <Header />

        <Routes>
          <Route path="/" element={<LandPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/callus" element={<Callus />} />
         <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;