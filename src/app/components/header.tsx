import Link from "next/link";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import "../../styles/Header.css";

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header-top">
        <Link href="/contact">
          <button className="header-btn">Contact</button>
        </Link>
        <Link href="/about">
          <button className="header-btn">About</button>
        </Link>
      </div>
      <div className="header-main">
        <span className="header-title">
          <FiShoppingBag style={{ marginRight: "10px", fontSize: "2rem" }} />
          SHOPEE
        </span>
        <div className="header-search">
          <input type="text" placeholder="Tìm kiếm sản phẩm..." />
          <FiSearch className="search-icon" />
        </div>
        <Link href="/cart">
          <button className="cart-btn">
            <FiShoppingBag style={{ fontSize: "1.7rem" }} />
          </button>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
// filepath: d:\Thuc Tap Nien Luan\TTNienLuan\src\app\components\header.tsx