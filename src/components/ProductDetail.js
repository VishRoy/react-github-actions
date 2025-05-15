// src/components/Products/ProductDetail.js
import { useParams, Link } from 'react-router-dom';

export default function ProductDetail() {
  const { productId } = useParams();

  const product = {
    1: { name: 'Laptop', price: 999, description: 'Powerful laptop' },
    2: { name: 'Phone', price: 699, description: 'Smartphone' },
    3: { name: 'Tablet', price: 399, description: 'Portable tablet' }
  }[productId];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <Link to="/products">Back to products</Link>
    </div>
  );
}