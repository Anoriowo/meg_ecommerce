import React from 'react'
import {ImHome3, ImMobile, ImHeadphones} from 'react-icons/im'
import {AiOutlineDesktop} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const List = () => {
  return (
    <div className='the_list'>
        <div className='sing_list'>
            <ImHome3 />
            <Link to='/Computers' className='lists'>Home Appliances</Link>
        </div>
        <div className='sing_list'>
            <ImMobile />
            <Link to='/Computers' className='lists'>Mobile Phones</Link> 
        </div>
        <div className='sing_list'>
            <AiOutlineDesktop />
            <Link to='/Computers' className='lists'>Computers</Link>
        </div>
        <div className='sing_list'>
            <ImHeadphones />
            <Link to='/Computers' className='lists'>Gadgets</Link> 
        </div>
    </div>
  )
}

export default List