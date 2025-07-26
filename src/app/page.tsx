import Link from "next/link";
import ProductList from '@/app/components/ProductList';
import { Product } from '@/app/types/product';

const products: Product[] = [
	{
		id: 1,
		name: 'Áo phông trắng',
		price: 150000,
		image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=200&q=80',
	},
	{
		id: 2,
		name: 'Quần jean xanh',
		price: 250000,
		image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=200&q=80',
	},
	{
		id: 3,
		name: 'Giày sneaker',
		price: 450000,
		image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
];

export default function HomePage() {
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>Danh sách sản phẩm</h1>
			<ProductList products={products} />
		</div>
	);
}

