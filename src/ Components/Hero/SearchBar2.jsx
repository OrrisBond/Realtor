import { BiSearch } from 'react-icons/bi'
import React, { useState } from 'react'
import './Hero.css'

const SearchBar2 = () => {
  
  
  
  return (
      <div className={`h-searchBar`}>
          <input type="text" placeholder='Address, City, Zip, Neighbourhood' />
          <BiSearch className='h-searchIcon'/>
    </div>
  )
}

export default SearchBar2