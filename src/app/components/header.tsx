import Link from "next/link";

const Header = () => (
  <header
    style={{
      background: "#f5f5f5",
      padding: "16px 32px",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
      <span style={{ fontWeight: "bold", fontSize: "1.5rem", marginRight: "32px" }}>
        ĐẠI HỌC KHOA HỌC HUẾ
      </span>
      <nav style={{ display: "flex" }}>
        <Link href="/home" style={{ margin: "0 12px", fontWeight: "500" }}>Home</Link>
        <Link href="/about" style={{ margin: "0 12px", fontWeight: "500" }}>About</Link>
        <Link href="/contact" style={{ margin: "0 12px", fontWeight: "500" }}>Contact</Link>
      </nav>
    </div>
  </header>
);

export default Header;
// filepath: d:\Thuc Tap Nien Luan\TTNienLuan\src\app\components\header.tsx