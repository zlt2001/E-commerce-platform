import React from 'react'
import { useSelector } from 'react-redux'
import './WishList.scss'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from 'react-redux';
import { addQuantity, reduceQuantity, removeItem, resetWish } from '../../redux/wishReducer';
import { addToCart } from '../../redux/cartReducer';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";


const WishList = () => {
    // 使用 useSelector 获取 redux 状态
    const products = useSelector(state => state.wish.products)
    console.log(products)
    const dispatch = useDispatch();

    return (
        <div className="wishlist">
            <span className='reset' onClick={() => dispatch(resetWish())} >
                Reset Wishlist
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
                            {/* 减 */}
                            <button onClick={() => dispatch(reduceQuantity({ id: item.id, }))}>-</button>
                            <h3>{item.quantity}</h3>
                            {/* 加 */}
                            <button onClick={() => dispatch(addQuantity({ id: item.id, }))}>+</button>
                            <h3>${item.price}</h3>
                        </div>
                        <h2>Total: $ {item.price * item.quantity}</h2>
                    </div>
                    {/* 添加购物车 */}
                    <div className="cartAction">
                        {/* 添加到购物车 */}
                        <button className='add' onClick={() => dispatch(addToCart(
                            {
                                id: item.id,
                                title: item.title,
                                desc: item.desc,
                                price: item.price,
                                img: item.img,
                                img2: item.img2,
                                quantity: item.quantity,
                            }
                        ))}>
                            <AddShoppingCartIcon /> ADD TO CART
                        </button>
                        {/* 删除心愿单物品 */}
                        <DeleteOutlinedIcon className='delete' onClick={() => dispatch(removeItem(item.id))} />
                    </div>

                </div>
            ))}

        </div>
    )
}

export default WishList
