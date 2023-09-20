import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
      <nav className='navBar'>
          <img src="./logo.png" alt="" />
          <ul className='pages'>
              <li><a href="#">Home</a></li>
              <li><a href="#">Properties</a></li>
              <li><a href="#">Buyer</a></li>
              <li><a href="#">Seller</a></li>
              <li><a href="#">Valuation</a></li>
          </ul>
          <div className='contactPg'>
              <a href="">Contact Us</a>
        </div>
    </nav>
  )
}

export default Navbar