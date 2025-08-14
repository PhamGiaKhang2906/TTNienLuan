"use client";
import { useEffect, useState } from "react";
import ProductList from "@/app/components/ProductList";
import "../styles/Home.css";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container">
      <h1 className="title">DANH SÁCH SẢN PHẨM</h1>
      <ProductList products={products} />
    </div>
  );
}

