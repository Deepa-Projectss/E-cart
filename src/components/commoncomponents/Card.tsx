import React from 'react'
import './Card.css'
const Card = ({ handleCallback, id, img, title,name, price, }: any) => {
  return (
      <div key={id} onClick={handleCallback}>
        <div className='card' >
          <img src={img} className='shoe-img' alt="shoe-1" />
          <div style={{ padding: '10px' }} >
            <p className='shoe-name'>{title}</p>
            <p className='shoe-rate'>{price}</p>
            <p>{name}</p>
            {/* <p>{description}</p> */}
          </div>
        </div>
      </div>
  )
}
//datas are coming from productList
export default Card;




