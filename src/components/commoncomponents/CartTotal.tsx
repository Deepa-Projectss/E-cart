import { useState } from "react";
import './CartTotal.css'
export default function CartTotal({total,discount}:any) {
    const [clickApply, setClickApply] = useState(false);
    const handleApply = () => {
        setClickApply(true);
    };

    // console.log('aaaaaaaaaaaaaaa',item);
    
    return (
        
        <div>
            <div>
                <h1>Cart-Shipping</h1>
            </div>
            <div className="totalCart-value">
                <h3 className="cart-heading">Cart Total</h3>
                <p className="sub-total">Cart Subtotal   <span style={{marginLeft:'5%'}}>{`$${total}`}</span> </p>
                <p className="discount">Cart Discount   <span style={{color:'#fff',marginLeft:'5%'}}>{`$${discount}`}</span>         </p>
                <p className="cart-total">
                    Cart Total <span style={{marginLeft:'21%',fontSize:'18px' ,fontWeight:'bold'}}>{clickApply ? `$${total - discount}` : ''}</span>
                </p>
                <button onClick={handleApply} className="apply-btn">Apply</button>
            </div>
        </div>
    )
}