import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Product from "./components/pages/Products";

function App() {
  console.log(Home);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Products/:id" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
