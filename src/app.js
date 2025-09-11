import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <div
          style={{
            minHeight: "100vh",
            background: "lavender", 
            padding: "30px",
          }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              background: "#b776a1ff",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            }}
          >
            
            <h1
              style={{
                textAlign: "center",
                fontSize: "36px",
                fontWeight: "bold",
                marginBottom: "25px",
                color: "#f7efefff",
                fontFamily: "EB GaramondEB, serif",
              }}
            >
              Fancy Find Boutique👗🎀
            </h1>

            
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes> 
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;