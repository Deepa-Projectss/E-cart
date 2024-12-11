
import Card from '../commoncomponents/Card'
import './ProductList.css'
import shoeImg1 from '../../images/shoe1.png';
import shoeImg2 from '../../images/shoe2.jpg';
import shoeImg3 from '../../images/shoe3.jpg';

const ProductList = () => {
  const datas = [
    {
      id: 1,
      img: shoeImg1,
      title: 'Puma',
      price: '$2500',
    },
    {
      id: 2,
      img: shoeImg2,
      title: 'Nick',
      price: '$2000',
    },
    {
      id: 3,
      img: shoeImg3,
      title: 'Reebok',
      price: '$2500',
    },
    {
      id: 4,
      img: shoeImg1,
      title: 'Puma',
      price: '$3500',
    },
    {
      id: 5,
      img: shoeImg2,
      title: 'Nick',
      price: '$2800',
    },
    {
      id: 6,
      img: shoeImg3,
      title: 'Reebok',
      price: '$4500',
    }
  ]
  return (
    <div>
      {/* <div>Bread Crumb -- Refer ANTD</div>

      <div>  Title    </div>
      <div>Filter Option - Implement as a common component</div> */}
      <div className='container'>
        {/* {datas.map((item) => (
          <Card
            id={item.id}
            img={item.img}
            title={item.title}
            price={item.price} />
          // card component is a child component, we passing the datas here, then automatically pass to the card component 
        ))} */}

      </div>

    </div>
  )
}

export default ProductList