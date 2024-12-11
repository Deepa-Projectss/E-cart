import { useGlobalState } from "../context/GlobalContext";
import CartStore from "./commoncomponents/CartStore";
import './Cart.css'
export default function Cart() {
    const { cartData } = useGlobalState()
    
    return (
        <div style={{backgroundColor:' #f0f5f5'}}>
            <div className="shopping-cart">
                <h1>SHOPPING-CART</h1>
            </div>
            <div>
                <CartStore />
            </div>
        </div>
    )
}