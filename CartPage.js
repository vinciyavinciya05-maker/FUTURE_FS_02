import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        🛒 Your Cart
      </h1>

      {cart.length === 0 ? (
        <p style={{ color: "gray" }}>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ddd",
                padding: "10px 0",
              }}
            >
              <div>
                <h2 style={{ fontSize: "18px", fontWeight: "600" }}>{item.name}</h2>
                <p style={{ color: "black" }}>₹{item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                ❌ Remove
              </button>
            </div>
          ))}

          
          <div style={{ marginTop: "20px", textAlign: "right" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
              Total: ₹{total}
            </h2>

            <div style={{ marginTop: "15px", display: "flex", gap: "10px", justifyContent: "flex-end" }}>
              <button
                onClick={() => navigate("/")}
                style={{
                  padding: "10px 16px",
                  backgroundColor: "#6c757d",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                ⬅ Go Back
              </button>

              <button
                onClick={() => navigate("/checkout")}
                style={{
                  padding: "10px 16px",
                  backgroundColor: "#a72883ff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                ✅ Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;