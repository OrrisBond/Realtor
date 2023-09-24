import React from 'react'
import { BiSearch } from 'react-icons/bi'
import './Hero.css'
import SearchPrompt from './SearchPrompt'

const Hero = () => {
  return (
      <div className='hero-cont'>
          <div>
          <h1>We Sell Homes you Can Only Dream About</h1>
          <p>Buy or Rent From Varieties of Properties. Lands, Houses , Apartments You Name It .....</p>
          </div>
          <div className='searchBar'>
              <div>
                  <button className='left'>Buy</button>
                  <button className='right clicked'>Rent</button>
              </div>
              <div className='searchInput'>
              <BiSearch className='searchIcon'/>
                  <input type="text" placeholder="Search by Type, Location, City"/>
                  <button>Search</button>
             </div>
            {/* <SearchPrompt/> */}
          </div>
    </div>
  )
}

export default Hero