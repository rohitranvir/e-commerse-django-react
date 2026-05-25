import {useCart} from "../context/CardContex";
function CartPage() {
    const {cartItems, removeFromCart, updateQuantity} = useCart();
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);    
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full">
                <h1 className="text-3xl font-bold text-center py-6 bg-white shadow-md">
                    Your Cart
                </h1>
                {cartItems.length === 0 ? ( 
                    <div className="text-center mt-10 text-gray-500">
                        Your cart is empty.
                    </div>
                ) : (
                    <div>
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <img src={`${item.image}`} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
                                    <div>
                                        <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                                        <p className="text-gray-600">${item.price}</p>
                                    </div>

                                </div>
                                <div className="flex items-center gap-3">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition">
                                        -
                                    </button>
                                    <span className="text-lg font-bold text-gray-800">{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition">
                                        +
                                    </button>

                                    <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-500 hover:text-red-700">
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))} 
                        <div className="text-right mt-6">
                            <p className="text-xl font-bold text-gray-800">Total: ${totalPrice.toFixed(2)}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}   
export default CartPage;





