import { useGlobalState } from "../../context/GlobalContext";
import { Col, Row } from 'antd';
import './CartStore.css';
import Quantity from "./Quantity";
import CartTotal from "./CartTotal";

export default function CartStore() {
    const { cartData, } = useGlobalState();
    console.log(cartData, "cartData");
    const totalPrice = cartData.reduce((acc : any, item : any) => acc + (Number(item.count) * Number(item.price)), 0);
   
    return (
        <div style={{ display: 'flex' }}>
            <div className="shop-cart" >
                <Row>
                    <Col span={4} className="product-col">Product</Col>
                    <Col span={3} className="price-col">Price</Col>
                    <Col span={3} className="quantity-col">Quantity</Col>
                    <Col span={2} className="total-col">Total Price</Col>
                </Row>
                <Row>
                    <Col span={9} >
                        <div className="products">
                            {cartData.map((item: any) => (
                                <>
                                    <div key={item.id} className="item-detail">
                                        <img src={item.img} alt={item.name} className="cart-imgs" />
                                        <div style={{ marginLeft: '3%' }}>
                                            <p className="item-names">{item.name}</p><br />
                                            <p>Color:{item.color}</p><br />
                                            <p >Size:{item.size}</p>
                                        </div>
                                    </div>
                                    <div className="horizontal-lines"></div>
                                </>
                            ))}
                        </div>
                    </Col>
                    <Col span={8} >
                        <div className="prices">
                            {cartData.map((item: any) => (
                                <div key={item.id} className="item-price" >{`$${item.price}`}</div>
                            ))}
                        </div>
                    </Col>
                    <Col >
                        <div className="quantity">
                            {cartData.map((item: any) => (
                                <div key={item.id} className="quantities"><Quantity item={item} /></div>      //receiving item as props from quantity
                            ))}
                        </div>
                    </Col>
                    <Col>
                        <div className="total">
                            {cartData.map((item: any) => (
                                <div className="total-price" key={item.id}>{Number(item.count) * Number(item.price)}</div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </div>
            <div>
                <CartTotal
                total={totalPrice}
                discount={400}
                />  
            </div>
        </div>
    );
}
