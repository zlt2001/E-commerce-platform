import React from 'react'
import Slider from '../../components/Slider/Slider'
import './Home.scss'
import FeaturedProduct from '../../components/FeaturedProducts/FeaturedProduct'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'

const Home = () => {
    return (
        <div>
            <Slider />
            <FeaturedProduct type='Featured' />
            <Categories />
            <FeaturedProduct type='Trending' />
            <Contact />
        </div>
    )
}

export default Home
