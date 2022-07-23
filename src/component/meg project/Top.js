import React from "react";
import productItems from "./megdata/Topselling";
import {Link} from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';


const Topselling = () =>{
return(
  <div className='trend'>
  <h2>Top Selling Items</h2>
  <hr className="hr_one" />
  <div className='trend-box'>  
          {
              productItems.map((item) => {
              return(
                  <div key={item.id} className='trend-item'>
                      <Link to= {`/Topselling/${item.id}`}>
                      <img src={item.img_src} alt='the_image' />
                      <h3>{item.text}</h3>  
                      <p>{item.Amount}</p>
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
export default Topselling