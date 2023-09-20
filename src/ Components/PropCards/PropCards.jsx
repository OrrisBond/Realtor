import React from 'react'
import PropCard from './PropCard'
import './PropCards.css'


const PropCards = () => {
  return (
      <div className='props-cont'> 
          <h1>Properties Under $400k</h1>
          <div className='slider'>
              <PropCard />
              <PropCard />
              <PropCard />
              <PropCard /> 
          </div>
    </div>
  )
}

export default PropCards