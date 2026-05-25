import {Link}   from "react-router-dom";
import { useCart } from "../context/CardContex";
function Navbar() {
    const {cartItems} = useCart();
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    return (    
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center fixed w-full top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-gray-800">QuickMart</Link>
                <div>
                    <Link to="/" className="text-gray-300 hover:text-white mx-2">Home</Link>
                    <Link to="/cart" className="relative text-gray-800 hover:text-gray-600 font-medium">
                        Cart {cartCount>0 && (
                            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full px-2">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>  
            </div>
        </nav>
    );
}
export default Navbar;