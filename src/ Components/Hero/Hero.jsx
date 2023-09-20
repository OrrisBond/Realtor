import React from 'react'
import { BiSearch } from 'react-icons/bi'
import './Hero.css'

const Hero = () => {
  return (
      <div className='hero-cont'>
          <div>
          <h1>We Sell Homes you Can Only Dream About</h1>
          <p>Buy or Rent From Varieties of Properties. Lands, Houses , Apaartments You Name It .....</p>
          </div>
          <div className='searchBar'>
              <div>
                  <button className='left clicked'>Buy</button>
                  <button className='right'>Rent</button>
              </div>
              <div className='searchInput'>
              <BiSearch className='searchIcon'/>
                  <input type="text" />
                  <button>Search</button>
             </div>
          </div>
    </div>
  )
}

export default Hero