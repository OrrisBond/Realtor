import { BiSearch } from 'react-icons/bi'
import React from 'react'
import './Search.css'

const SearchBar = () => {
 
  return (
      <div className='f-searchBar'>
          <input type="text" placeholder='Address, City, Zip, Neighbourhood'/>
          <BiSearch className='f-searchIcon'/>
    </div>
  )
}

export default SearchBar