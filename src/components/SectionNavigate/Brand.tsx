import React from 'react'
import './Section.css'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '../commoncomponents/Card'

export default function Brand() {
    const location = useLocation()
    const { state } = location                          //data is passing from the header by through the state, by using location destruct the data from the state
    const navigate = useNavigate()
    const handleProduct = (item: any) => {
        navigate("/product-details", { state: { item } })
        console.log("aaaaaaaabbbbba", item);   //this state:item have the data from the header (brand)

    }

    return (
        <div>
            <div>
                <h1>Brands</h1>
            </div>
            <div className='container'>
                {state.map((item: any, index: number) => {
                    console.log("cmghfhjfm", item);
                    return (
                        (
                            <Card
                                handleCallback={() => handleProduct(item)}
                                key={index}
                                id={item.id}
                                img={item.img}
                                title={item.title}
                                price={item.price} />
                        )
                    )
                })}

            </div>
        </div>
    )
}
