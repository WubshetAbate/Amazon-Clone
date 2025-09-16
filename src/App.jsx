import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./Pages/Landing/Landing";
import SignIn from "./Pages/Auth/Signup";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Category from "./Components/Category/Category";
import CategoryProducts from "./Components/Category/CategoryProducts";
import ProductDetails from "./Components/Product/ProductDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />

        {/* Category routes */}
        <Route path="/categories" element={<Category />} />
        <Route path="/category/:categoryName" element={<CategoryProducts />} />

        {/* Product details route */}
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
