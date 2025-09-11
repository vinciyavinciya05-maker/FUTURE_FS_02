import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    navigate("/cart");
  };

  const handleImageClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300); // reset after animation
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
        backgroundColor: "white",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        onClick={handleImageClick}
        className="w-full h-64 object-cover rounded-md transform transition duration-300 hover:scale-105 active:scale-95"
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "10px",
          cursor: "pointer",
          
        }}
      />

      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <p>₹{product.price}</p>

      <button
        onClick={handleAddToCart}
        style={{
          padding: "8px 12px",
          backgroundColor: "#b776a1ff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "0.3s"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;