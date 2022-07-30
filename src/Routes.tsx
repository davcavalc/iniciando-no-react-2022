import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cart } from "./Pages/Cart";
import { Catalog } from "./Pages/Catalog";
import { Tuite } from "./Componentes/Tuite";
import Navbar from "./Componentes/Navbar";

export function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/tuite" element={<Tuite />} />
          <Route path="/navbar" element={<Navbar />} />
        </Routes>
      </Router>
    </>
  );
}
