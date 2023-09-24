import React, { useContext } from "react";

import House from './House'
import { Link } from 'react-router-dom'
import { ImSpinner2 } from 'react-icons/im'
import './House.css'
import PropCard from '../PropCards/PropCard'
import { HouseContext } from "../FillterBar/HouseContextProvider";


const HouseList = () => {
  const { houses, loading, country } = useContext(HouseContext)
  const numbers = houses.length
  
  if (loading) {
     return (<ImSpinner2 />)
    
  }
  
  if (houses.length < 1) {
    return <div >Sorry, nothing found</div>
  }
  return <div  >
    <div className="property-container">
    <h1>{country} real Estate Properties for sale</h1>
      <p>Properties Found {numbers}</p>
      </div>
      <div  className="container">
        {houses.map((house, index) => {
          return (
              <House house={house}/>
          )
        })}
    </div>
    </div>
};

export default HouseList;
