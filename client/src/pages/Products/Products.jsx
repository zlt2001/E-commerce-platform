import React, { useState } from 'react'
import './Products.scss'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const Products = () => {
    // 把id从字符串转为int
    const catId = parseInt(useParams().id)
    const [maxPrice, setmaxPrice] = useState(1000)
    const [sort, setSort] = useState(null)
    const [selectedCat, setSelectedCat] = useState([])

    // 子种类的数据
    const { data, loading, error } = useFetch(`/sub-categories?&[filters][categories][id]=${catId}`)
    console.log(error)


    const handleChange = (e) => {
        const value = e.target.value
        const isChecked = e.target.checked

        setSelectedCat(
            isChecked
                ? [...selectedCat, value]
                : selectedCat.filter((item) => item !== value)
        )
    }

    return (
        <div className="products">
            {/* 左部 */}
            <div className="left">
                {/* 产品种类 */}
                <div className="productCategories">
                    <h2>Product Categories</h2>
                    {data?.map((item) => (
                        <div className="inputItem" key={item.id}>
                            <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
                            {/* value??? */}
                            <label htmlFor={item.id}>{item.attributes.title}</label>
                        </div>
                    ))}
                    {/* 价格滑块 */}
                    <div className="filter">
                        <h2>Filter by price</h2>
                        <span>0</span>
                        <input type="range" min={0} max={1000} onChange={(e) => setmaxPrice(e.target.value)} />
                        <span>{maxPrice}</span>
                    </div>

                    {/* 排序 */}
                    <div className="sort">
                        <h2>Sort by</h2>
                        <div className="inputItem">
                            <input type="radio" id='asc' value='asc' name='price' onChange={() => setSort('asc')} />
                            <label htmlFor="asc">Price (low first)</label>
                        </div>
                        <div className="inputItem">
                            <input type="radio" id='desc' value='desc' name='price' onChange={() => setSort('desc')} />
                            <label htmlFor="desc">Price (high first)</label>

                        </div>
                    </div>
                </div>
            </div>

            {/* 右部 */}
            <div className="right">
                <img className='catImg' src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedCat} />
            </div>
        </div>
    )
}

export default Products