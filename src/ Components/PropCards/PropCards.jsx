import React from 'react'
import PropCard from './PropCard'
import './PropCards.css'
import 'animate.css';



const PropCards = () => {
  return (
      <div className='props-cont animate__animated animate__fadeInRightBig '> 
      <h1>Properties Under $452,600</h1>
      <h3 className='view'>View More</h3>
          <div className='slider '>
              <PropCard />
              <PropCard />
              <PropCard />
              <PropCard /> 
          </div>
    </div>
  )
}

export default PropCards