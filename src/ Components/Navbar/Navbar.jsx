import React, { useContext } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { HouseContext } from "../FillterBar/HouseContextProvider";


const Navbar = () => {
  const {heroFillter, heroSearch} = useContext(HouseContext)
  return (
      <nav className='navBar'>
          <img src="./logo.png" alt="" />
          <ul className='pages'>
            <Link to='/' onClick={heroSearch}><li><a href="#">Home</a></li></Link>
            <Link to='searchHome' onClick={heroFillter}><li><a href="#">Properties</a></li></Link>
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