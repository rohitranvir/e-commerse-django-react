import ProductList from "./pages/ProductList";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import Cartpage from "./pages/Cartpage";
function App(){
return (
<Router>
    
    <Navbar/>
    <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cartpage/>}/>
    </Routes>
</Router>
)
}
export default App;