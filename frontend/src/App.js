import React from "react";
import Header from "./components/header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import { Route, Routes } from "react-router-dom";
import AboutScreen from "./screens/AboutScreen";
import ProductScreen from "./screens/ProductScreen";
function App() {
  return (
    <div className="app">
      <Header />
      <main className="py-3 app-main">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
