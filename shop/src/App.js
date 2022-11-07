import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/header";
import Footer from "./layout/footer";

function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
