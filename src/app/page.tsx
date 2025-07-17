import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Link href="/home">Home</Link>
      <br />
      <Link href="/about">About</Link>
      <br />
      <Link href="/contact">Contact</Link>
    </div>
  );
}
