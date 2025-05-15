import { Outlet } from 'react-router-dom';

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <Outlet /> {/* This renders the nested route */}
    </div>
  );
}