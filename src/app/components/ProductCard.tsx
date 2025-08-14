'use client';
import { useState } from "react";
import { Product } from '@/app/types/product';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from "@/app/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [showBox, setShowBox] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product, quantity);
    setShowBox(false);
    setQuantity(1);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} width={200} style={{ display: 'block', margin: '0 auto 10px' }} />
      <h3>{product.title}</h3>
      <p><b>Giá:</b> {product.price.toLocaleString()}đ</p>
      <p>
        <b>Đánh giá:</b> {product.rating.rate} ⭐ ({product.rating.count} lượt)
      </p>
      <div className="product-card-actions">
        <button className="cart-icon-btn" title="Thêm vào giỏ" onClick={() => setShowBox(true)}>
          <FiShoppingCart size={22} />
        </button>
        <button className="buy-now-btn">Mua ngay</button>
      </div>
      {showBox && (
        <div className="add-cart-box">
          <div>
            <b>{product.title}</b>
            <p>Giá: {product.price.toLocaleString()}đ</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
            <span style={{ minWidth: 24, textAlign: "center" }}>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>
          <button className="buy-now-btn" style={{ marginTop: 8 }} onClick={handleAdd}>
            Thêm vào giỏ hàng
          </button>
          <button style={{ marginTop: 8, marginLeft: 8 }} onClick={() => setShowBox(false)}>
            Đóng
          </button>
        </div>
      )}
    </div>
  );
}
