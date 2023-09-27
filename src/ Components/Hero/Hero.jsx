import React, { useContext, useState } from 'react'
import './Hero.css'
import { HouseContext } from "../FillterBar/HouseContextProvider";
import SearchBar from './SearchBar';
import 'animate.css';


const Hero = () => {
    return (
        <div>
            <div className="background">
            </div>
        <div className='hero-cont'>

          <div>
          <h1 className="animate__animated animate__bounceInDown"
          >We Sell Homes you Can Only Dream About</h1>
          <p className="animate__animated animate__bounceInDown">Buy or Rent From Varieties of Properties. Lands, Houses , Apaartments You Name It .....</p>
          </div>
            </div>
            <SearchBar />
        </div>
    )
}

export default Hero