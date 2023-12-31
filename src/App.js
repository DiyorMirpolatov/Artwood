import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
      <Routes>
      <Route path="" element={<Home></Home>}></Route>
      <Route path="/product" element={<Product />}></Route>
      </Routes>
  );
}

export default App;
