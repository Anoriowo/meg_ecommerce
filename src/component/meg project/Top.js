import {React, useState} from "react";
import productItems from "./megdata/Topselling";
import {Link} from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';


const Topselling = () =>{
  const [searchTerm, setSearchTerm] = useState('')
return(
  <div className='trend'>
  <h2>Top Selling Items</h2>
  <input type='text' placeholder='search'  onChange={event => {setSearchTerm(event.target.value)}}/>
  <hr className="hr_one" />
  <div className='trend-box'>  
  {
                        productItems.filter((item) => {
                            if (searchTerm == ''){
                                return item
                            }else if (item.text.toLowerCase().includes(searchTerm.toLowerCase())){
                                return item
                            }
                        })

                        .map((item) => {
                        return(
                            <div key={item.id} className='trend-item'>
                                <Link to= {`/Topselling/${item.id}`}>
                                <img src={item.img_src} alt='the_image' />
                                <h3>{item.text}</h3>  
                                <p>{item.amount}</p>
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