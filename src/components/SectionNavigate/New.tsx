import React from 'react'
import './Section.css'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '../commoncomponents/Card';

export default function New() {
    const location = useLocation();
    const { state } = location    //destructing
    const navigate=useNavigate();
    const handleProduct=(item:any)=>{
        navigate("/product-details",{state:{item}})
    }
    return (
        <div>
            <div>
                <h1>New Shoes</h1>
            </div>
            <div className='container'>
                {state.map((item: any, index: number) => (
                    <Card
                    handleCallback={()=>handleProduct(item)}
                        key={index}
                        id={item.id}
                        img={item.img}
                        title={item.title}
                        price={item.price} />
                ))}
            </div>
        </div>
    )
}
