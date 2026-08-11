import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LandPage from "./Components/LandPage";
import About from "./Components/About";
import Callus from "./Components/Callus"; 
 
function App() {
  return (
    <BrowserRouter>

      <div className="App">

        <Header />

        <Routes>

          {/* الصفحة الرئيسية */}
          <Route path="/" element={<LandPage />} />

          {/* صفحة حولنا */}
          <Route path="/about" element={<About />} />

          {/* صفحة اتصل بنا */}
          <Route path="/callus" element={<Callus />} />

          {/* تفاصيل المنتج */}
          

        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;