import React from 'react'
import {Link, useParams} from 'react-router-dom';
import productItems from '../megdata/Topselling';

const TopSingle = () => {
    const {topId} = useParams();
    // eslint-disable-next-line eqeqeq
    const the_product = productItems.find((items) => items.id == topId) ;
    const { text, img_src, about, Amount } = the_product
  return (
    <div className='trend_page'>
      <h2>{text}</h2>
      <div className='trend_page_1'>
        <img src={img_src} alt='top'/>    
        <p>{about} </p>     
      </div>
      <p>{Amount}</p>
       <Link to='/'>Back</Link>
    </div>
  )
}

export default TopSingle