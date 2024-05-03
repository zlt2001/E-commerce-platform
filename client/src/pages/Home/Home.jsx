import React from 'react'
import Slider from '../../components/Slider/Slider'
import './Home.scss'
import FeaturedProduct from '../../components/FeaturedProducts/FeaturedProduct'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'

const Home = () => {
    return (
        <div className='home'>
            <Slider />
            <div className="featured">
                <FeaturedProduct type='Featured' />
            </div>
            <Categories />
            <div className="trending">
                <FeaturedProduct type='Trending' />
            </div>
            <Contact />
        </div>
    )
}

export default Home
