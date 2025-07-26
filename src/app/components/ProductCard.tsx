'use client';
import { Product } from '@/app/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
      <img src={product.image} alt={product.name} width={200} />
      <h3>{product.name}</h3>
      <p>Giá: {product.price.toLocaleString()}đ</p>
    </div>
  );
}
