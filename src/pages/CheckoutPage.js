import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const [form, setForm] = useState({ name: "", address: "", payment: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
       `Order placed!\n\nName: ${form.name}\nAddress: ${form.address}\nPayment: ${form.payment}`
    );
    navigate("/"); 
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "15px" }}>
        Checkout
      </h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <textarea
          name="address"
          placeholder="Your Address"
          value={form.address}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <select
          name="payment"
          value={form.payment}
          onChange={handleChange}
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        >
          <option value="">Select Payment</option>
          <option value="UPI">UPI</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
        </select>

        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "purple",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          ✅ Place Order
        </button>
      </form>
    </div>
  );
}

export default CheckoutPage;