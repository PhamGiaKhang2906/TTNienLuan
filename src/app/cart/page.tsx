"use client";
import { useCart } from "@/app/context/CartContext";
import { FiTrash2 } from "react-icons/fi";
import "../../styles/Cart.css";

export default function CartPage() {
  const { cart, setCart } = useCart();

  const increase = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrease = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const remove = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <h1 className="title">GIỎ HÀNG CỦA BẠN</h1>
      {cart.length === 0 ? (
        <p>Chưa có sản phẩm nào trong giỏ hàng.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-img" />
              <div className="cart-item-info">
                <b>{item.title}</b>
                <div>Giá: {item.price.toLocaleString()}đ</div>
              </div>
              <div className="cart-item-actions">
                <div className="action-row">
                  <button className="quantity-btn" onClick={() => decrease(item.id)}>-</button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button className="quantity-btn" onClick={() => increase(item.id)}>+</button>
                  <button
                    className="remove-btn"
                    onClick={() => remove(item.id)}
                    title="Xóa sản phẩm"
                  >
                    <FiTrash2 size={20} />
                  </button>
                </div>
                <div className="total">
                  Thành tiền: {(item.price * item.quantity).toLocaleString()}đ
                </div>
              </div>
            </div>
          ))}
        </div>
        
      )}
    </div>
  );
}