import React, { useContext, useState } from 'react';
import  CountryDropdown from './CountryDropdown'
import  PropertyDropdown from './PropertyDropdown'
import PriceRangeDropdown from './PriceRangeDropdown'
import './Search.css'
import SearchBar from './SearchBar';
const Search = () => {
  const [scrolled, setScrolled] = useState(false)

  document.addEventListener("scroll", (event) => {
    console.log(`scrollTop: ${window.scrollY}`);
    if (window.scrollY >= 145) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  });
  

  return  <div className={`fillter-cont animate__animated animate__fadeInRightBig ${scrolled ? 'scrolled' : ''}`}>
    <SearchBar/>
    <div className='dropdowns'>
    <CountryDropdown />
    <PropertyDropdown />
    <PriceRangeDropdown /> 
    </div>
  </div>
};

export default Search;
