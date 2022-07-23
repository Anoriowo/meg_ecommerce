import React from 'react'
import {Link, useParams} from 'react-router-dom'
import { trends } from '../megdata/Trendingdata';
// import { FaShoppingCart } from 'react-icons/fa';


 export const TrendingPage = () => {
    const {trendsId} = useParams();
    // eslint-disable-next-line eqeqeq
    const the_product = trends.find((items) => items.id == trendsId) ;
    const { name, img, about, brand, price } = the_product
  return (
    <div className='trend_page'>
      <h2>{name}</h2>
      <div className='trend_page_1'>
        <img src={img} alt='pic'/>    
        <p>{about} </p>     
      </div>
      <p>Brand: {brand}</p>
      <p>{price}</p>
       <Link to='/'>Back</Link>
    </div>
  )
}

export default TrendingPage
