import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'


const Card = ({ item }) => {
    return (
        <Link className='link' to={`/product/${item.id}`}>
            <div className="card">
                <div className="image">
                    {item.attributes.isNew && <span>New Season</span>}
                    <img src={item.attributes.img} alt="" className="mainImg" />
                    <img src={item.attributes.img2} alt="" className="secondImg" />
                </div>
                <h2>{item.attributes.title}</h2>
                <div className="prices">
                    <h3>${item.attributes.price}</h3>
                    {item.attributes.oldPrice && <h3 className="oldPrice">${item.attributes.oldPrice}</h3>}
                </div>
            </div>
        </Link>
    )
}

export default Card
