import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import './Hero.css'

const Hero = () => {
  const [clicked , setClicked] = useState(true)

  const clickMe = () => {
      setClicked(!clicked)
  }

  return (
      <div className='hero-cont'>
          <div>
          <h1>We Sell Homes you Can Only Dream About</h1>
          <p>Buy or Rent From Varieties of Properties. Lands, Houses , Apaartments You Name It .....</p>
          </div>
          <div className='searchBar'>
              <div>
                  <button className={clicked ? 'left clicked' : 'left'} onClick={clickMe}>Buy</button>
                  <button className={clicked ? 'right ' : 'right clicked'} onClick={clickMe}>Rent</button>
              </div>
              <div className='searchInput'>
              <BiSearch className='searchIcon'/>
                  <input type="text"  placeholder='Address, City, Zip, Or Neighborhood'/>
                  <button>Search</button>
             </div>
          </div>
    </div>
  )
}

export default Hero