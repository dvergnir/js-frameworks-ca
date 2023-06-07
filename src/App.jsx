import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Product from "./components/pages/Products";
import Contact from "./components/pages/Contact";
import ContactSuccess from "./components/pages/ContactSuccess";
import { CartProvider } from "./components/CartProvider";
import CartPage from "./components/pages/cart";
import Checkout from "./components/pages/Checkout";
import CheckoutSuccess from "./components/pages/CheckoutSuccess";

function App() {
  return (
    <CartProvider>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contactSuccess" element={<ContactSuccess />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkoutsuccess" element={<CheckoutSuccess />} />
          </Route>
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
