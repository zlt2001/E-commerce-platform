import React from 'react'
import Card from '../Card/Card'
import './FeaturedProduct.scss'
import useFetch from '../../hooks/useFetch'

const FeaturedProduct = ({ type }) => {

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
    // console.log("这里" + data + loading + error)
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await axios.get(process.env.REACT_APP_API_URL + `/products?populate=*&[filters][type][$eq]=${type}`,
    //                 {
    //                     headers: {
    //                         Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
    //                     },
    //                 }
    //             );
    //             // console.log(res.data.data)
    //             setData(res.data.data)
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     fetchData()
    // }, [])

    return (
        <div className='featuredProduct'>
            <div className="top">
                <h1>{type} Products</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                    lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas.
                </p>
            </div>

            <div className="bottom">
                {error ? "something went wrong!" :
                    (loading ? "loading" : data?.map(item => (<Card item={item} key={item.id} />)))}
            </div>
        </div>
    )
}

export default FeaturedProduct
