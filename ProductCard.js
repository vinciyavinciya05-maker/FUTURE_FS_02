import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    onAddToCart(product);   
    navigate("/cart");      
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        width: "220px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <p>₹{product.price}</p>

      
      <button
        onClick={handleAddToCart}
        style={{
          padding: "8px 12px",
          backgroundColor: "#ff00aaff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;