import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Product from "./components/pages/Products";
import Contact from "./components/pages/Contact";
import ContactSuccess from "./components/pages/ContactSuccess";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Products/:id" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ContactSuccess" element={<ContactSuccess />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
