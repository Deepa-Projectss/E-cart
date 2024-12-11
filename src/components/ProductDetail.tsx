import React, { useEffect, useState } from 'react'  //this parent component
import './ProductDetail.css'
import { useLocation, useNavigate } from 'react-router-dom'
import SizeFilter from './commoncomponents/SizeFilter';
import shoeImg from '../images/shoe1.png'
import ColorPicker from './commoncomponents/ColorPicker';
import { useGlobalState } from '../context/GlobalContext';
import Quantity from './commoncomponents/Quantity';

export default function ProductDetail() {
  const location = useLocation();
  // const { cartData }: any = useGlobalState();
  // console.log(cartData)
  const { state } = location;
  const item = state?.item
//  console.log('valuessss,',item);
 
  const filterItem = [
    {
      id: 1,
      value: 40
    },
    {
      id: 2,
      value: 41
    },
    {
      id: 3,
      value: 42
    },
    {
      id: 4,
      value: 43
    },
    {
      id: 5,
      value: 44
    },
    {
      id: 6,
      value: 45
    },

  ]
  const colorChanges = [
    {
      id: '1',
      colorName: 'Gray',
      imgs: shoeImg,
      colorcode: "#B3B6B7"
    },
    {
      id: '2',
      imgs: shoeImg,
      colorName: 'Lightcoral',
      colorcode: "#F08080"
    },
    {
      id: '3',
      imgs: shoeImg,
      colorName: 'Lightgreen',
      colorcode: "#9FE2BF"
    }
  ]
  const [activeId, setActiveId] = useState(0)
  const handleId = (id: any) => {
    setActiveId(id)
    console.log(id)
  }
  const [bgColor, setBgColor] = useState()
  const changingColor = (colorcode: any,) => {
    setBgColor(colorcode)
  }
  const navigate = useNavigate()
  const { cartData, setCartData } = useGlobalState()
  console.log(cartData, 'cartData')
  const [addtocart, setAddtocart] = useState(false);
  const [addedMessage, setAddedMessage] = useState("Add to Cart")
  const selectedSize = filterItem.find((item) => item.id === activeId)?.value;
  const selectedColor = colorChanges.find((color) => color.colorcode === bgColor)?.colorName;

  const handleCart = () => {
    console.log("setting data")
    // setAddtocart(true)
    setCartData((prevItem: any) => {
      console.log("setting data")
      return [...prevItem,
      {
        id: item?.id,
        name: item?.name,
        img: item?.img,
        price: item?.price,
        color: selectedColor,
        size: selectedSize,
        count: 1,
      }
      ]
    });
    setAddtocart(false);
    setTimeout(() => {
      setAddedMessage("! Added to Cart");
    },1000)

  };
  console.log(cartData, "outside",filterItem)

  return (
    <div>

      <h1>Product Details</h1>
      {item ? (
        <>
          <div className='detail-container' >
            <div className='left-side'>
              <div style={{ backgroundColor: bgColor, borderRadius: '10px' }}>
                <img src={item.img} alt="" className="shoe-leftimg" /><br />
              </div>
              <div className='left-small-img'>
                {[1, 2, 3, 4,].map(() => (
                  <img src={item.smallImg} alt="" className='small-img' />
                ))}
              </div>
            </div>
            <div>
              <h1 className='headings'>{item.name}</h1>
              <div className='price-value'>{`$${item.price}`}</div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '20px', marginLeft: '15px' }}>
                {colorChanges.map((items): any => (
                  <ColorPicker
                    colors={items}
                    onClick={() => changingColor(items.colorcode)}
                  />
                ))}
              </div>
              <div style={{ marginTop: '20px', marginLeft: '15px' }}>
                <text style={{ fontSize: '20px' }}>Size</text><br />
              </div>
              <div className='sizes'>
                {filterItem.map((ele) => {
                  return (
                    <SizeFilter
                      key={ele.id}
                      id={activeId}
                      item={ele}
                      onClick={() => handleId(ele.id)}
                    />
                  );
                })}
              </div>
              {addtocart ? (
                <Quantity />
              ) : (<button onClick={handleCart} className="add-cart-btn">   {addedMessage}  </button>)
              }
              <div>
                {/* {addedMessage && (
                  <div>
                    <p className='cart-box'>{addedMessage}</p>
                  </div>
                )} */}
              </div>
            </div>

          </div>

        </>
      ) : ""
      }


    </div>
  );
}
