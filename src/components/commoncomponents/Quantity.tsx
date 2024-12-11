import React, { useState } from 'react';
import { useGlobalState } from '../../context/GlobalContext';

export default function Quantity({item}: any) {                                              // sending the item as props 
  const {cartData, setCartData} = useGlobalState();
  console.log(item,"item")
  const increment = () => {
    setCartData((prev:any)=>{
      return prev.map((ele:any)=>{
        return ele.id==item.id ? {...ele, count : item.count +1} : ele
      })        
    })
  };
  const decrement = () => {
      setCartData((prev:any)=>{
        return prev.map((ele:any)=>{
          return ele.id==item.id ? {...ele, count : item.count -1} : ele
        })        
      })
  };

  return (
    <div style={{ display: 'flex', }}>
      <button onClick={increment} className="incre-btn"> + </button>
      <p style={{ marginLeft: '15px', marginTop: '37px' }}>{item?.count}</p>
      <button onClick={decrement} className="decre-btn"> - </button>
    </div>
  );
}
