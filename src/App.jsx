import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Products from "./components/products/Products";

const url = "https://api.noroff.dev/api/v1/online-shop";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <img
          src="https://th.bing.com/th/id/R.2bfcf7a95ead6f73e2a6afd3420cd4a7?rik=wWE8A0uQlrzk%2bg&pid=ImgRaw&r=0"
          alt="logo"
          className="logo"
        ></img>
      </Header>
      <main>
        <Products />
      </main>
    </BrowserRouter>
  );
}

export default App;
