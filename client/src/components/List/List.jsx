import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './List.scss'
import useFetch from '../../hooks/useFetch'
import _ from 'lodash';

// const List = ({ catId, maxPrice, sort, subCats }) => {

//     const url = `/products?populate=*&[filters][categories][id]=${catId}
//                                         ${subCats.map((item) => `&[filters][sub_categories][id][$eq]=${item}`).join('')}
//                                         &[filters][price][$lte]=${maxPrice}
//                                         &sort=price:${sort}
//                                         `

//     const { data, loading, error } = useFetch(url)

//     // console.log(data)
//     // console.log(error)

//     return (
//         <div className="list">
//             {loading
//                 ? "loading"
//                 : data?.map(item =>
//                     <Card item={item} key={item.id} className='card' />)}

//         </div>
//     )
// }

// export default List

const List = ({ catId, maxPrice, sort, subCats }) => {
    const [url, setUrl] = useState('');

    useEffect(() => {
        const debounceFetchData = _.debounce(() => {
            const newUrl = `/products?populate=*&[filters][categories][id]=${catId}
                            ${subCats.map((item) => `&[filters][sub_categories][id][$eq]=${item}`).join('')}
                            &[filters][price][$lte]=${maxPrice}
                            &sort=price:${sort}`;

            setUrl(newUrl);
        }, 500); // 在500ms内只会调用一次fetchData函数

        debounceFetchData(); // 初始渲染时调用一次

        return () => {
            // 组件卸载时清除防抖函数
            debounceFetchData.cancel();
        };
    }, [catId, maxPrice, sort, subCats]);

    const { data, loading, error } = useFetch(url);

    return (
        <div className="list">
            {loading
                ? "loading"
                : data?.map(item =>
                    <Card item={item} key={item.id} className='card' />)}

        </div>
    );
};

export default List;