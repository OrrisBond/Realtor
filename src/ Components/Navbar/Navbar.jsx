import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'



const Navbar = () => {
const [open, setOpen] = useState(true)
  
const OpenMenu = () => {
   setOpen (!open)
}
  
  return (
      <nav className='navBar'>
          <img src="./logo.png" alt="" />
          <ul className={open ? ' pages' : 'open pages'}>
            <Link to='/' ><li><a href="#">Home</a></li></Link>
            <Link to='searchHome' ><li><a href="#">Properties</a></li></Link>
              <li><a href="#">Valuation</a></li>
          </ul>   
      <Link to='contact' className='contactPg'><p>Contact Us</p></Link>
      <div onClick={OpenMenu} id='menu-icon' >
        {open ? <BiMenu/>  : <AiOutlineClose/>}
      </div>
    </nav>
  )
}

export default Navbar