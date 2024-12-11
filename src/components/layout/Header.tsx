//Header page     static page(its doesn't change)
import { useNavigate, Navigate } from 'react-router-dom'
import './Header.css';
import { HeartOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import shoeImg1 from '../../images/shoe1.png';
import shoeImg2 from '../../images/shoe2.jpg';
import shoeImg3 from '../../images/shoe3.jpg';
import { setPath, getPath } from '../helpers/localstorage';
export default function Header() {
    const navigate = useNavigate();
    const pathName = getPath();
    console.log(pathName);

    const data: any = {
        mens: [
            {
                "id": 1,
                "img": shoeImg1,
                "title": "Puma",
                "name": "Puma MagMax NITRO Men Running Shoes At NykaaMan",
                "price": "2500",
                "smallImg":shoeImg1
            },
            {
                "id": 2,
                "img": shoeImg2,
                "title": "Nick",
                "name":"Nike Air Max Plus Men's sneakers",
                "price": "2000",
                "smallImg":shoeImg2
            },
            {
                "id": 3,
                "img": shoeImg3,
                "title": "Reebok'",
                "name":"Reebok Voyager 1.0 M Running Shoes For Men",
                "price": "2500",
                "smallImg":shoeImg3
            },
            {
                "id": 4,
                "img": shoeImg1,
                "title": "Puma",
                "name": "Puma MagMax NITRO Men Running Shoes At NykaaMan",
                "price": "3500",
                "smallImg":shoeImg1
            },
            {
                "id": 5,
                "img": shoeImg2,
                "title": "Nick",
                "name":"Nike Air Max Plus Men's sneakers",
                "price": "2800",
                "smallImg":shoeImg2
            },
            {
                "id": 6,
                "img": shoeImg3,
                "title": "Reebok",
                "name":"Reebok Voyager 1.0 M Running Shoes For Men",
                "price": "4500",
                "smallImg":shoeImg3
            }
        ],
        womens: [
            {
                "id": 1,
                "img": shoeImg1,
                "title": "Puma",
                "name": "Puma MagMax NITRO Men Running Shoes At NykaaMan",
                "price": "2500",
                "smallImg":shoeImg1
            },
            {
                "id": 2,
                "img": shoeImg2,
                "title": "Nick",
                "name":"Nike Air Max Plus Men's sneakers",
                "price": "2000",
                "smallImg":shoeImg2
            },
            {
                "id": 3,
                "img": shoeImg3,
                "title": "Reebok'",
                "name":"Reebok Voyager 1.0 M Running Shoes For Men",
                "price": "2500",
                "smallImg":shoeImg3
            },
            {
                "id": 4,
                "img": shoeImg1,
                "title": "Puma",
                "name": "Puma MagMax NITRO Men Running Shoes At NykaaMan",
                "price": "3500",
                "smallImg":shoeImg1
            },
            {
                "id": 5,
                "img": shoeImg2,
                "title": "Nick",
                "name":"Nike Air Max Plus Men's sneakers",
                "price": "2800",
                "smallImg":shoeImg2
            },
            {
                "id": 6,
                "img": shoeImg3,
                "title": "Reebok",
                "name":"Reebok Voyager 1.0 M Running Shoes For Men",
                "price": "4500",
                "smallImg":shoeImg3
            }
        ],
        kids: [
            {
                "id": 1,
                "img": shoeImg1,
                "title": "Puma",
                "name": "Puma MagMax NITRO Men Running Shoes At NykaaMan",
                "price": "2500",
                "smallImg":shoeImg1
            },
            {
                "id": 2,
                "img": shoeImg2,
                "title": "Nick",
                "name":"Nike Air Max Plus Men's sneakers",
                "price": "2000",
                "smallImg":shoeImg2
            },
            {
                "id": 3,
                "img": shoeImg3,
                "title": "Reebok'",
                "name":"Reebok Voyager 1.0 M Running Shoes For Men",
                "price": "2500",
                "smallImg":shoeImg3
            },
            {
                "id": 4,
                "img": shoeImg1,
                "title": "Puma",
                "name": "Puma MagMax NITRO Men Running Shoes At NykaaMan",
                "price": "3500",
                "smallImg":shoeImg1
            },
            {
                "id": 5,
                "img": shoeImg2,
                "title": "Nick",
                "name":"Nike Air Max Plus Men's sneakers",
                "price": "2800",
                "smallImg":shoeImg2
            },
            {
                "id": 6,
                "img": shoeImg3,
                "title": "Reebok",
                "name":"Reebok Voyager 1.0 M Running Shoes For Men",
                "price": "4500",
                "smallImg":shoeImg3
            }
        ],
        brands: [
            {
                "id": 1,
                "img": shoeImg1,
                "title": "Puma",
                "name": "Puma MagMax NITRO Men Running Shoes At NykaaMan",
                "price": "2500",
                "smallImg": shoeImg1
            },
            {
                "id": 2,
                "img": shoeImg2,
                "title": "Nick",
                "name":"Nike Air Max Plus Men's sneakers",
                "price": "2000",
                "smallImg": shoeImg2
            },
            {
                "id": 3,
                "img": shoeImg3,
                "title": "Reebok'",
                "name":"Reebok Voyager 1.0 M Running Shoes For Men",
                "price": "2500",
                "smallImg": shoeImg3
            },
            {
                "id": 4,
                "img": shoeImg1,
                "title": "Puma",
                "name": "Puma MagMax NITRO Men Running Shoes At NykaaMan",
                "price": "3500",
                "smallImg": shoeImg1
            },
            {
                "id": 5,
                "img": shoeImg2,
                "title": "Nick",
                "name":"Nike Air Max Plus Men's sneakers",
                "price": "2800",
                "smallImg":shoeImg1
            },
            {
                "id": 6,
                "img": shoeImg3,
                "title": "Reebok",
                "name":"Reebok Voyager 1.0 M Running Shoes For Men",
                "price": "4500",
                "smallImg":shoeImg1
            }
        ],
        sports: [
            {
                "id": 1,
                "img": shoeImg1,
                "title": "Puma",
                "name": "Puma MagMax NITRO Men Running Shoes At NykaaMan",
                "price": "$2500",
                "smallImg":shoeImg1
            },
            {
                "id": 2,
                "img": shoeImg2,
                "title": "Nick",
                "name":"Nike Air Max Plus Men's sneakers",
                "price": "2000",
                "smallImg":shoeImg2
            },
            {
                "id": 3,
                "img": shoeImg3,
                "title": "Reebok'",
                "name":"Reebok Voyager 1.0 M Running Shoes For Men",
                "price": "2500",
                "smallImg":shoeImg3
            },
            {
                "id": 4,
                "img": shoeImg1,
                "title": "Puma",
                "name": "Puma MagMax NITRO Men Running Shoes At NykaaMan",
                "price": "3500",
                "smallImg":shoeImg1
            },
            {
                "id": 5,
                "img": shoeImg2,
                "title": "Nick",
                "name":"Nike Air Max Plus Men's sneakers",
                "price": "2800",
                "smallImg":shoeImg2
            },
            {
                "id": 6,
                "img": shoeImg3,
                "title": "Reebok",
                "name":"Reebok Voyager 1.0 M Running Shoes For Men",
                "price": "4500",
                "smallImg":shoeImg3
            }
        ],
        new: [
            {
                "id": 1,
                "img": shoeImg1,
                "title": "Puma",
                "name": "Puma MagMax NITRO Men Running Shoes At NykaaMan",
                "price": "2500",
                "smallImg":shoeImg1
            },
            {
                "id": 2,
                "img": shoeImg2,
                "title": "Nick",
                "name":"Nike Air Max Plus Men's sneakers",
                "price": "2000",
                "smallImg":shoeImg2
            },
            {
                "id": 3,
                "img": shoeImg3,
                "title": "Reebok'",
                "name":"Reebok Voyager 1.0 M Running Shoes For Men",
                "price": "2500",
                "smallImg":shoeImg3
            },
            {
                "id": 4,
                "img": shoeImg1,
                "title": "Puma",
                "name": "Puma MagMax NITRO Men Running Shoes At NykaaMan",
                "price": "3500",
                "smallImg":shoeImg1
            },
            {
                "id": 5,
                "img": shoeImg2,
                "title": "Nick",
                "name":"Nike Air Max Plus Men's sneakers",
                "price": "2800",
                "smallImg":shoeImg2
            },
            {
                "id": 6,
                "img": shoeImg3,
                "title": "Reebok",
                "name":"Reebok Voyager 1.0 M Running Shoes For Men",
                "price": "4500",
                "smallImg":shoeImg3
            }
        ]
    };
    function handleNavigation(path: string, key: string) {
        navigate(path, { state: data[key] });                                     //data will be store in state ,key is like men,women etc,
        setPath(path)
    }
    const handleCart=()=>{
        navigate("/Cart")
    }

    return (
        <div>
            <div style={{ display: 'flex', }}>
                <div className={`sections ${pathName == "/women" ? "selected-line" : ""}`} onClick={() => handleNavigation("/women", "womens")} >Women</div>
                <div className={`sections ${pathName == "/men" ? "selected-line" : ""} `} onClick={() => handleNavigation("/men", "mens")}>Men</div>
                <div className={`sections ${pathName == "/kids" ? "selected-line" : ""}`} onClick={() => handleNavigation("/kids", "kids")}>Kids</div>
                <div className={`sections ${pathName == "/sports" ? "selected-line" : ""} `} onClick={() => handleNavigation("/sports", "sports")}>Sports</div>
                <div className={`sections ${pathName == "/brand" ? "selected-line" : ""}`} onClick={() => handleNavigation("/brand", "brands")}>Brand</div>
                <div className={`sections ${pathName == "/new" ? "selected-line" : ""}`} onClick={() => handleNavigation("/new", "new")}>New</div>
                <div className='sections' style={{ color: 'red' }}>Sale</div>
                <div className='head-text'>SHOES</div>
                <div style={{ position: 'relative', left: '40%', }}>
                    <SearchOutlined />
                    <UserOutlined style={{ paddingLeft: '10px', height: '40px' }} />
                    <HeartOutlined style={{ paddingLeft: '10px', height: '40px' }} />
                    <ShoppingCartOutlined style={{ paddingLeft: '10px', height: '40px' }} onClick={handleCart} />
                </div>
            </div>
            <div className="horizontal-line"></div>
        </div>
    )
}