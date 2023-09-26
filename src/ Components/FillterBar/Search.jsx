
import React, { useContext, useState } from 'react';

import  CountryDropdown from './CountryDropdown'
import  PropertyDropdown from './PropertyDropdown'
import PriceRangeDropdown from './PriceRangeDropdown'
import './Search.css'
import SearchBar from './SearchBar';
const Search = () => {

  

  return  <div className='fillter-cont'>
    <SearchBar/>
    <CountryDropdown />
    <PropertyDropdown />
    <PriceRangeDropdown />
  </div>

};

export default Search;
