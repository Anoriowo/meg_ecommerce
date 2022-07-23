import React from 'react'
import {Link} from 'react-router-dom'
import {AiFillLinkedin, AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='foot'>
      <div className='footer'>
        <div className='summary'>
          <h1 className='name'>MEG<span>-ELECTS</span></h1>
          <p className='body'>At MegElects, we sell all sort of gadgets, electronics<br/> and devices for your homes, offices and organizations.<br/> Our  products come with a six month guaratee period.</p>
        </div>

        <div className='company'>
          <h3>COMPANY</h3>
          <ul>
            <li><Link to='/'>About</Link></li>
            <li><Link to='/'>Our Story</Link></li>
            <li><Link to='/'>FAQs</Link></li>
            <li><Link to='/'>Career</Link></li>
          </ul>
        </div>

        <div className='links'>
          <h3>USEFUL LINKS</h3>
          <ul>
            <li><Link to='/'>Affliate</Link></li>
            <li><Link to='/'>Delivery</Link></li>
            <li><Link to='/'>Return Policy</Link></li>
            <li><Link to='/'>Payment Method</Link></li>
            <li><Link to='/'>Terms & Condition</Link></li>
          </ul>
        </div>

        <div className='sign'>
          <h3>SIGN UP FOR WEEKLY NEWSLETTER</h3>
          <p>Subscribe to our newsletter and always be aware <br/> of all the latest news and updates</p>
          <div className='mail'>
            <input type='text' placeholder='Email Address' /><button>Send</button>
          </div>
          <div className='icons-2'>
            <div className='singleicon'>
              <AiFillFacebook />
            </div>
            <div className='singleicon'>
              <AiFillInstagram />
            </div>
            <div className='singleicon'>
              <AiFillLinkedin />
            </div>
            <div className='singleicon'>
              <AiFillTwitterCircle />
            </div>
            
          </div>
        </div>

      </div>
      <div className='bottom'>
        <div className='empty'>
          
        </div>
      <p>c Copyright- MEG - ELECTS | Designed by iDESIGN </p>
      </div>

    </div>
  )
}

export default Footer