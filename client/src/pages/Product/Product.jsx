import React from 'react';
import './Product.scss';
import { useState } from 'react';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
    const { id } = useParams();
    const [selectedImg, setSelectedImg] = useState('img');
    const [quantity, setQuantity] = useState(0);

    const url = `/products/${id}?populate=*`;
    const { data, loading, error } = useFetch(url);

    const dispatch = useDispatch();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!data || !data.attributes) {
        return <p>No data available</p>;
    }

    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={data.attributes.img} alt="" onClick={(e) => setSelectedImg('img')} />
                    <img src={data.attributes.img2} alt="" onClick={(e) => setSelectedImg('img2')} />
                </div>
                <div className="mainImg">
                    <img src={data.attributes[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>{data.attributes.title}</h1>
                <span className='price'>${data.attributes.price}</span>
                <p>{data.attributes.desc}</p>
                <div className="quantity">
                    <button onClick={() => setQuantity(prev => prev === 0 ? 0 : prev - 1)}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                </div>
                <button className='add' onClick={() => dispatch(addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img,
                    img2: data.attributes.img2,
                    quantity
                }))}>
                    <AddShoppingCartIcon /> ADD TO CART
                </button>
                <div className="otherAdd">
                    <button className='wishList'>
                        <FavoriteBorderIcon /> ADD TO WISH LIST
                    </button>
                    <button className='compare'>
                        <BalanceIcon /> ADD TO COMPARE
                    </button>
                </div>
                <div className="info1">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr />
                <div className="info2">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    );
}

export default Product;
