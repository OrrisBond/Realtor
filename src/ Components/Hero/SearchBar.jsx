import React, { useState } from 'react'
import SearchPrompt from './SearchPrompt'
import './Hero.css'
import { BiSearch } from 'react-icons/bi'
import 'animate.css';



const SearchBar = () => {

    const [clicked , setClicked] = useState(true)
    const [typed , setTyped] = useState('')

    const clickMe = () => {
        setClicked(!clicked)
    }

    const changeHandler = (e) => {
        setTyped(e.target.value)
    }
  return (
    <div className='searchBar  animate__animated animate__zoomInUp'>
              <div>
                  <button className={clicked ? 'left clicked' : 'left'} onClick={clickMe}>Buy</button>
                  <button className={clicked ? 'right ' : 'right clicked'} onClick={clickMe}>Rent</button>
              </div>
              <div className='searchInput'>
              <BiSearch className='searchIcon'/>
                  <input type="text"  placeholder='Address, City, Zip, Or Neighborhood' onChange={changeHandler}/>
                  <button>Search</button>
              </div>
          {typed ? <SearchPrompt /> : ''}
          </div>
  )
}

export default SearchBar