import React, { useContext } from 'react';
import  CountryDropdown from './CountryDropdown'
import  PropertyDropdown from './PropertyDropdown'
import PriceRangeDropdown from './PriceRangeDropdown'
import './Search.css'
const Search = () => {

  return <div className='fillter-cont'>
    <CountryDropdown />
    <PropertyDropdown />
    <PriceRangeDropdown />
  </div>;
};

export default Search;
