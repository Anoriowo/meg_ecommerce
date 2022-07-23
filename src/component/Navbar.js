import React, {useState} from 'react'



 const Navbar = () => {
  const [toggle, setToggle] = useState(false)   //this is the default display of the page.


  return (

    <div className='navig'>
        <a href=''>Spencer</a>
         <div className='svgmenu' onClick={() => setToggle(!toggle)} > 
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
       </div>

        
             <nav className={toggle ? 'nav-display': "null"}>
            <ul>
                <li>Home</li>
                <li>button</li>
                <li>Services</li>  
                        
            </ul>
        
        </nav>
        
     </div>
  )
}
export default Navbar

