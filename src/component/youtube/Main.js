import React from 'react'
import { useState } from 'react'
import { trends } from '../meg project/megdata/Trendingdata'

const Main = () => {
    const [cartItems, setCartItems] = useState
    ([])
    const onAdd = (item) => {
        const exist = cartItems.find((x) => x.id === item.id)
        if(exist){
          setCartItems(cartItems.map((x) => x.id === item.id ? {...exist, qty: exist.qty + 1} : x 
          )
          );
        } else {
            setCartItems ([...cartItems, {...item, qty:1}])
        }
      }

  return (
    <main className='block col-2'>
        <h2>Products</h2>
        <div className='row'>
            {
            trends.map((item) => {
                return(
                <div key={item.id} className=''>
                    <img className='small' src={item.img} alt='the_image' />
                    <h3>{item.name}</h3>  
                    <p>{item.price}</p>
                    <button onClick={()=>onAdd(item)} className='add remove badge'>Add to cart</button>
                 </div> 
                   )
            })}
        </div>
    </main>
  )
}

export default Main