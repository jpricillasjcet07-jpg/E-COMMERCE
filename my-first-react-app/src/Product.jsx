import React, { useEffect, useState } from "react";
import API from "./api";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Our Products</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", marginTop: "30px" }}>
        {products.length === 0 && <p>No products found.</p>}

        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ddd", borderRadius: "10px", width: "220px", padding: "15px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)", backgroundColor: "#fff", textAlign: "center" }}>
            <img src={product.imageUrl || "https://via.placeholder.com/150"} alt={product.name}
              style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }} />
            <h3 style={{ margin: "10px 0 5px", fontSize: "18px" }}>{product.name}</h3>
            <p style={{ color: "#666", fontSize: "14px", minHeight: "40px" }}>{product.description}</p>
            <p style={{ fontWeight: "bold", fontSize: "16px", color: "#e63946" }}>₹{product.price}</p>
            <p style={{ fontSize: "13px", color: "#888" }}>Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;