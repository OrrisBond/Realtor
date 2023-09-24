import React from 'react'
import PropCard from './PropCard'
import './PropCards.css'
import { Link } from 'react-router-dom'


const PropCards = (props) => {
  return (
      <div className='props-cont'> 
          <div className='props-header'>
            <h1>{props.title}</h1>
            <a href="#"><p>View All</p></a>
          </div>
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