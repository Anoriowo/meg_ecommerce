import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FiSearch, FiShoppingCart, FiHeart} from 'react-icons/fi'
import { trends } from './megdata/Trendingdata'





const Header = () => {
  const[searchTerm, setSearchTerm] = useState('')

  return (
    <div className='the-head'>
      <h1 className='name'>MEG<span>-ELECTS</span></h1>
      
      <nav>
        <ul className='category'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/'>Shop</Link></li>
          <li>Category
            <ul className='sub-category'>
              <li><Link to='/Computers' className='lists'>Computers</Link></li>
              <li><Link to='/'>Topselling items</Link></li>
              <li><Link to='/'>Trending</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className='search-box'>



{
    trends.filter((item) => {
      if (searchTerm == ''){
          return item
      }else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())){
        return(
          <div key={item.id} className='trend-item'>
                      <h3>{item.name}</h3>     
          </div>
        )
      }
  })
  .map((item) => {
  }
  )
}


        <input type='text' placeholder='search'  onChange={event => {setSearchTerm(event.target.value)}}/>  
        <FiSearch/>
      </div>

      <div className='icons'>
        <FiHeart/>
      </div>
      <div className='icons-2'>
      <FiShoppingCart/>
      </div>

    </div>
  )
}

export default Header