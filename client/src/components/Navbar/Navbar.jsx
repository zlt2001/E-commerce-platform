import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.scss'
import { useState } from 'react';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux'


const Navbar = () => {
    const [cartOpen, setCartOpen] = useState(false)
    const products = useSelector(state => state.cart.products)
    const totalQuantity = () => {
        let quantitySum = 0
        products.map((item) => quantitySum += item.quantity)
        return quantitySum
    }

    return (
        // 导航栏分成三块
        <div className='navbar'>
            <div className="wrapper">
                {/* 左边 */}
                <div className="left">
                    <div className="item">
                        <img src="/img/en.png" alt="" />
                        <ExpandMoreIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <ExpandMoreIcon />
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/1">Men</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/2">Women</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/3">Children</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/4">Accessories</Link>
                    </div>
                </div>

                {/* 中间 */}
                <div className="center">
                    <Link className='link' to="/">LAMASRORE</Link>
                </div>

                {/* 右边 */}
                <div className="right">
                    <div className="item">
                        <Link className='link' to="/products/1">Homepages</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/2">About</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/3">Contact</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/products/4">Store</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineIcon />
                        <FavoriteBorderIcon />
                        <div className="cartIcon">
                            <ShoppingCartIcon onClick={() => setCartOpen(!cartOpen)} />
                            <span>{totalQuantity()}</span>
                        </div>
                    </div>

                </div>
            </div>
            {cartOpen && <Cart />}
        </div>
    )
}

export default Navbar
