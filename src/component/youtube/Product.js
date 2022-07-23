import React from 'react'
import productItems from '../meg project/megdata/Topselling';

const Product = (props) => {
    const {product} = props;
  return (
    <div>
     <img className='small' src={product.image} alt='pic'></img>
     <h3>{product.name}</h3>
    <div>${product.price}</div>

    <div>
       <button onClick=''>Add to cart</button>
    </div>

    </div>
  )
}

export default Product
