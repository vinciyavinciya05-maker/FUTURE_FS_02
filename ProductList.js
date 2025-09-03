import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

const productsData = [
  { id: 1, name: "T-Shirt", category: "Clothing", price: 450, image: "https://www.lulus.com/images/product/xlarge/7588121_1503076.jpg" },
  { id: 2, name: "T-Shirt", category: "Clothing", price: 399, image: "https://cdn-img.prettylittlething.com/3/9/2/5/392549b84e548d4987524275421ebd220b1b882a_cmb0715_5.jpg" },
  { id: 3, name: "Kurta set", category: "Clothing", price: 799, image: "https://i.pinimg.com/736x/88/ce/6d/88ce6d68718721d66e40dbc91be52683.jpg" },
  { id: 4, name: "Saree", category: "Clothing", price: 999, image: "https://assets0.mirraw.com/images/10940005/7_zoom.jpg?1668770657" },
  { id: 5, name: "JumpSuit", category: "Clothing", price: 299, image: "https://image27.stylesimo.com/o_img/2017/07/11/229072-10341542/women-s-sleeveless-back-cross-backless-pockets-drawstring-jumpsuit.jpg" },
  { id: 6, name: "Jeans", category: "Bottomwear", price: 499, image: "https://oldnavy.gap.com/webcontent/0050/884/424/cn50884424.jpg" },
  { id: 7, name: "Baggy", category: "Bottomwear", price: 700, image: "https://lugako.com/wp-content/uploads/2020/10/1.jpg" },
  { id: 8, name: "Cargo", category: "Bottomwear", price: 499, image: "https://i.pinimg.com/originals/9f/91/60/9f91606d4562bc8587f75fa5d7c4b2ff.jpg" },
  { id: 9, name: "Ring", category: "Accessories", price: 299, image: "https://www.arthursjewelers.com/content/images/thumbs/Original/31-V677Y-L-19361782.jpg" },
  { id: 10, name: "Stud Earing", category: "Accessories", price: 199, image: "https://image.doubleaccent.com/E50328-7VM1.jpg" },
  { id: 11, name: "Necklace", category: "Accessories", price: 450, image: "https://i.pinimg.com/736x/eb/44/70/eb44701782f661f71863954baf1cd285.jpg" },
  { id: 12, name: "Handbags", category: "Accessories", price: 399, image: "https://tse1.mm.bing.net/th/id/OIP.PcILtphbnGH4oeDqfZuBrAHaHa?pid=Api&P=0&h=180" },
  { id: 13, name: "Shoes", category: "Footwear", price: 599, image: "https://tse1.mm.bing.net/th/id/OIP.OeF4LfL10MIBpj05YhHhLAHaHa?pid=Api&P=0&h=180" },
  { id: 14, name: "Sandals", category: "Footwear", price: 320, image: "https://m.media-amazon.com/images/I/71IhuPi7iTL._AC_SL1500_.jpg" },
  { id: 15, name: "Boots", category: "Footwear", price: 799, image: "https://tse1.mm.bing.net/th/id/OIP.a7xm3YpcZ8IckHUh0pgKSQHaGx?pid=Api&P=0&h=180" },
  { id: 16, name: "Bangles", category: "Accessories", price: 300, image: "https://i.pinimg.com/originals/2e/8c/a9/2e8ca92e53cd8c7f6ffeac4509319a39.jpg" },
  { id: 17, name: "Jhumka", category: "Accessories", price: 180, image: "https://i.pinimg.com/originals/db/ab/c8/dbabc8352014613b7615c7a272395b08.jpg" },
  { id: 18, name: "Lehanga", category: "Clothing", price: 1599, image: "https://i.etsystatic.com/25647034/r/il/39b3f5/5232058934/il_1080xN.5232058934_29m2.jpg" },
  { id: 19, name: "Bootcut Jean", category: "Bottomwear", price: 690, image: "https://images.bewakoof.com/original/women-s-grey-bootcut-jeans-585058-1679660598-1.jpg" },
  { id: 20, name: "Wide-Leg Jean", category: "Bottomwear", price: 850, image: "https://www.twinset.com/on/demandware.static/-/Sites-master-catalog/default/dw7f69579d/images/TwinSet/Images/Catalog/JA82Q4-01104-02.JPG" },
];

function Home() {
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  
  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: "20px" }}>
      

      
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      
      <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ padding: "8px" }}>
        <option value="All">All</option>
        <option value="Clothing">Clothing</option>
        <option value="Bottomwear">Bottomwear</option>
        <option value="Accessories">Accessories</option>
        <option value="Footwear">Footwear</option>
      </select>

      
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={() => addToCart(product)} />
        ))}
      </div>
    </div>
  );
}

export default Home;