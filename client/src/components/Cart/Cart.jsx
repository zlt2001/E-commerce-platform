import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import './Cart.scss'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { removeItem, resetCart } from "../../redux/cartReducer";


const Cart = () => {
    // 使用 useSelector 获取 redux 状态
    const products = useSelector(state => state.cart.products)
    console.log(products)

    const totalPrice = () => {
        let total = 0
        products.forEach((item) => { total += item.quantity * item.price });
        // 保留2位小数
        // console.log(total.toFixed(2))
        return total.toFixed(2)
    }

    const dispatch = useDispatch();


    return (
        <div className="cart">
            <div className="top">
                <h1>Products in your cart</h1>
            </div>
            <div className="items">
                {/* 遍历购物车里的东西 */}
                {products?.map(item => (
                    <div className='item' key={item.id}>
                        <img src={item.img} alt="" />
                        <div className="desc">
                            <h1 className="title">{item.title.substring(0, 40)}</h1>
                            <h1 className="price">{item.quantity} x ${item.price}</h1>
                        </div>
                        <DeleteOutlinedIcon className='delete' onClick={() => dispatch(removeItem(item.id))} />
                    </div>
                ))}
            </div>

            <div className="bottom">
                <div className="total">
                    <span>SUBTOTAL</span>
                    <span>$ {totalPrice()}</span>
                </div>
                <button className="checkOut">PROCEED TO CHECKOUT</button>
                <span className='reset' onClick={() => dispatch(resetCart())} >
                    Reset Cart
                </span>
            </div>

        </div>
    )
}

export default Cart
