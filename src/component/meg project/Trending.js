import React, { useState } from 'react';
import { trends } from './megdata/Trendingdata';
import {Link} from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';


const Trending = () => {
    const [searchTerm, setSearchTerm] = useState('')
    return(
        <div className='trend'>
            <h2>Trending</h2>
            <input type='text' placeholder='search'  onChange={event => {setSearchTerm(event.target.value)}}/> 
            <hr className='hr_one' />
            <div className='trend-box'>  
                    {
                        trends.filter((item) => {
                            if (searchTerm == ''){
                                return item
                            }else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())){
                                return item
                            }
                        })

                        .map((item) => {
                        return(
                            <div key={item.id} className='trend-item'>
                                <Link to= {`/Trending/${item.id}`}>
                                <img src={item.img} alt='the_image' />
                                <h3>{item.name}</h3>  
                                <p>{item.price}</p>
                                </Link>                        
                                <button className='btn'>Add to cart <FaShoppingCart/></button> 
                            </div>
                            )
                                            }
                    )}
                   
            </div>
        </div>
    )
}
export default Trending