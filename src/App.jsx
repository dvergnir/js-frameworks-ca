import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

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
    </BrowserRouter>
  );
}

export default App;
