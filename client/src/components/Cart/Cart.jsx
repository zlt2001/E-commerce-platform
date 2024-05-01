import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import './Cart.scss'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { removeItem, resetCart } from "../../redux/cartReducer";


const Cart = () => {
    const products = useSelector(state => state.cart.products)
    const totalPrice = () => {
        let total = 0
        products.forEach((item) => { total += item.quantity * item.price });
        return total.toFixed(2)
    }

    const dispatch = useDispatch();


    return (
        <div className="cart">
            <h1>Products in your cart</h1>
            {products?.map(item => (
                <div className='item' key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="desc">
                        <h1 className="title">{item.title}</h1>
                        <p>{item.desc.substring(0, 100)}</p>
                        <h1 className="price">{item.quantity} x ${item.price}</h1>
                    </div>
                    <DeleteOutlinedIcon className='delete' onClick={() => dispatch(removeItem(item.id))} />
                </div>
            ))}
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
