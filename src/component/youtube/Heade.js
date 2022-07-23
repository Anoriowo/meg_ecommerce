import React from 'react'

function Heade(props) {
  return (
    <header className='row block center'>
      <div>
        <a href='#/'>
          <h1>Small shopping cart</h1>
        </a>
      </div>
      <div>
        <a href='#/cart'>Cart </a>
        <a href='#/signin'>Signin</a>
      </div>
    </header>
  )
}

export default Heade