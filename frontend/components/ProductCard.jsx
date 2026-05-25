import {Link} from 'react-router-dom';
function ProductCard({ product }) {
    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL || "http://localhost:8000";
  return (
    <Link to={`/products/${product.id}`}>
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform p-4">
      <img src={`${BASEURL}${product.image}`} alt={product.name} className="w-full h-56 object-cover rounded-lg mb-4 cursor-pointer" />
     <h1 className="text-lg font-demobold text-gray-800 truncate font-bold">{product.name}</h1>
      <p className="text-gray-600 font-semibold">${product.price}</p>
      <p className="text-gray-700">{product.description}</p>
    </div>
    </Link>
  );
}
export default ProductCard;