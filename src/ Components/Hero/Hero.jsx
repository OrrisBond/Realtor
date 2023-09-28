import React, { useState} from 'react'
import './Hero.css'
import { HouseContext } from "../FillterBar/HouseContextProvider";
import SearchBar from './SearchBar';
import 'animate.css';
import SearchBar2 from './SearchBar2';

const Hero = () => {
    const [scroller, setScroller] = useState(false)

  document.addEventListener("scroll", (event) => {
    console.log(`scrollTop: ${window.scrollY}`);
    if (window.scrollY >= 425) {
      setScroller(true)
    } else {
      setScroller(false)
    }
  });

    return (
        <div>
            <div className="background">
            </div>
        <div className='hero-cont'>
          <div>
          <h1 className="animate__animated animate__zoomInDown"
          >We Sell Homes you Can Only Dream About</h1>
          <p className="animate__animated animate__zoomInDown">Buy or Rent From Varieties of Properties. Lands, Houses , Apaartments You Name It .....</p>
          </div>
            </div>
            <SearchBar />
            <div className={`searchbar2 ${scroller ? 'scroller' : ''}`}>
                <SearchBar2/>
            </div>
        </div>
     
            
    )
}

export default Hero