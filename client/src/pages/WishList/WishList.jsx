import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react';
import './WishList.scss'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from 'react-redux';
import { addToWish, removeItem, resetWish } from '../../redux/wishReducer';
import { addToCart } from '../../redux/cartReducer';

const WishList = () => {
    // 使用 useSelector 获取 redux 状态
    const products = useSelector(state => state.wish.products)
    // console.log(products)
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1)

    return (
        <div className="wishlist">
            <span className='reset' onClick={() => dispatch(resetWish())} >
                Reset Cart
            </span>
            {products?.map(item => (
                <div className='wishCard' key={item.id}>
                    {/* 商品图片 */}
                    <div className="img">
                        <img src={item.img} alt="" />
                    </div>

                    {/* 增减数量，计算价格 */}
                    <div className="detail">
                        <div className="amount">
                            <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                            <h3>{quantity}</h3>
                            <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                            <h3>${item.price}</h3>
                        </div>
                        <h2>Total: $ {item.price * quantity}</h2>
                    </div>

                    {/* 添加到购物车 */}
                    <button className='add' onClick={() => dispatch(addToCart(
                        {
                            id: item.id,
                            title: item.title,
                            desc: item.desc,
                            price: item.price,
                            img: item.img,
                            img2: item.img2,
                            quantity
                        }
                    ))}>
                        <AddShoppingCartIcon /> ADD TO CART
                    </button>
                </div>
            ))}

        </div>
    )
}

export default WishList
