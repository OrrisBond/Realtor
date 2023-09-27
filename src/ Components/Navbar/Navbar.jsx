import React, { useContext } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'



const Navbar = () => {
 
  return (
      <nav className='navBar'>
          <img src="./logo.png" alt="" />
          <ul className='pages'>
            <Link to='/' ><li><a href="#">Home</a></li></Link>
            <Link to='searchHome' ><li><a href="#">Properties</a></li></Link>
              <li><a href="#">Valuation</a></li>
          </ul>   
              <Link to='contact' className='contactPg'><p>Contact Us</p></Link>
    </nav>
  )
}

export default Navbar