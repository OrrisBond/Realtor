import React from 'react';
import HouseList from './HouseList';
import Search from '../FillterBar/Search';
import '../FillterBar/Search.css'
const SearchHome = () => {

  return <div>
    <div className="back">
    </div>
    <div className='dummy-cont'>
      <Search/>
        <HouseList/>
    </div>
  </div>

  
};

export default SearchHome;
