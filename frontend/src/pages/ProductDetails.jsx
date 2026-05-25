import {useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import {useCart} from "../context/CardContex";
function ProductDetails() {
    const {id} = useParams();
    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL || "http://localhost:8000";
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {addToCart} = useCart();
    useEffect(() => {
        fetch(`${BASEURL}/api/products/${id}/`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch product details");
            }
            return response.json();
        })
        .then((data) => {
            setProduct(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false);
        });
    }
    , [id, BASEURL]);
    if (loading) {
        return (
            <div className="text-center mt-10">
                Loading product details...
            </div>
        );
    }
    if (error) {
        return (
            <div className="text-center mt-10 text-red-500">
                Error: {error}
            </div>
        );
    }
    if (!product) {
        return (
            <div className="text-center mt-10 text-gray-500">
                Product not found.
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full">
            <div className="text-3xl font-bold text-center py-6 bg-white shadow-md"> 
                <img src={`${product.image}`} alt={product.name} className="w-full h-96 object-cover rounded-lg mb-6" />
                <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
                                <p className="text-gray-600 font-semibold text-xl mb-4">${product.price}</p>
                                <p className="text-gray-700 text-lg">{product.description}</p>
                <button onClick={() => addToCart(product)} className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition'>
                    Add to Cart
                </button>
                <div className="mt-4">
<a href='/' className="text-blue-500 hover:underline text-lg">
    ←  Back to home
</a>
                </div>
                </div>


  
            </div>   
            </div>
        </div >
    )
}
export default ProductDetails;