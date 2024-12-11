import { Route, Routes } from "react-router-dom";
import Index from "./components/layout/Index"
import ProductList from "./components/productList/ProductList";
import Women from "./components/SectionNavigate/Women";
import Men from "./components/SectionNavigate/Men";
import Kids from "./components/SectionNavigate/Kids";
import Sports from "./components/SectionNavigate/Sports";
import Brand from "./components/SectionNavigate/Brand";
import New from "./components/SectionNavigate/New";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";

export default function Navigate() {
    return (
        <Routes>
            <Route path="/" element={<Index />} >
                {/* <Route path="/a" element={<div>aaa</div>} /> */}
                <Route path="/productlist" element={<ProductList />} />
                <Route path="/women" element={<Women />} />
                <Route path="/men" element={<Men />} />
                <Route path="/kids" element={<Kids />} />
                <Route path="/sports" element={<Sports />} />
                <Route path="/brand" element={<Brand />} />
                <Route path="/new" element={<New />} />
                <Route path="/product-details" element={<ProductDetail/>} />
                <Route path="/cart" element ={<Cart/>}/>
            </Route>
        </Routes>
    )
}