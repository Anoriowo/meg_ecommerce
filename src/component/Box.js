import React from 'react';
import Dataaa from '../data/Dataaa.js'
import {arrCollection, objCollection} from '../photos/images.js';

const BoxComp = () => {
  return (
    <div>
      <h1>Dealing with images</h1>
       <p>using from public folder without import</p>
      <img src='images/TheLogo.png' alt='pg'/>
      <img src='logo192.png' alt='2pg'/>
      <p>using images from src without importing</p>
      <img src={require('../photos/Hand.jpg')} alt='png'/>
      <p>using images from an exported array in js file</p>
      <img src={arrCollection[2]} alt=""/>
      <img src={arrCollection[0]} alt=""/>
      <p>using images as an exported object in js file</p>
      <img src={objCollection.Hand} alt=""/>
      <img src={objCollection.Click} alt=""/>
      {/* <p>using from external source </p> */}
      {/* <img src='https://images.pexels.com/photos/12373451/pexels-photo-12373451.jpeg?cs=srgb&dl=pexels-josh-hild-12373451.jpg&fm=jpg' alt=''/> */}
    
    <h2>MAPPING</h2>
    <div>
        {
        Dataaa.map((item) => {
            return(
                <div key={item.id}>
                    <p>{item.name}</p>
                    <img src={item.img_url} alt='' />
                    <p>{item.category}</p>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                </div>
            )
        }
        )}
    </div>
    
    </div>
  )
}

export default BoxComp
