import React from 'react'
import Card from '../Card/Card'
import './List.scss'
import useFetch from '../../hooks/useFetch'

const List = ({ catId, maxPrice, sort, subCats }) => {
    /* const url = `/products?populate=*
                                        &[filters][categories][id]=${catId}
                                        ${subCats.map((item) => `&[filters][sub_categories][id][$eq]=${item}`)}
                                        &[filters][price][$lte]=${maxPrice}
                                        &sort=price:${sort}`
                                        */
    const url = `/products?populate=*
                                        &[filters][categories][id]=${catId}
                                        ${subCats.map((item) => `&[filters][sub_categories][id][$eq]=${item}`)}
                                        `


    const { data, loading, error } = useFetch(url)
    console.log({ catId, maxPrice, sort, subCats })

    // console.log("List他妈的")
    // console.log(data)
    // console.log(error)

    return (
        <div className="list">
            {loading
                ? "loading"
                : data?.map(item =>
                    <Card item={item} key={item.id} className='card' />)}

        </div>
    )
}

export default List
