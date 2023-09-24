import React from 'react'
import './PropCards.css'
import {BiBath, BiBed, BiArea} from 'react-icons/bi'
 
const PropCard = () => {
  return (
      <div className='prop-cont'>
          <img src="https://media.istockphoto.com/id/1281554848/photo/dream-home-luxury-house-success-suburban-house.webp?b=1&s=170667a&w=0&k=20&c=LHZ-3vBXAM_lu-cvruFkT12lO8KSxz1ZVCMo-d8rCI4=" alt="" />
          <div className='details'>
              <div className='top'>
                  <h4><span>Apartment</span>  <span className='state'>Lagos</span></h4>
                  <h2>&#8358;32,000</h2>
                  <p>12, Mobolaji str, Stone Creek</p>
              </div>
              <div className='bottom'>
                  <div className='essentials'
                  ><div className='quant'>
                      <BiBed/><p>4</p>
                  </div>
                      <h3>Bedrooms</h3>
                  </div>
                  <div className='essentials'>
                      <div className='quant'>
                  <BiBath/><p>6</p>
                      </div>
                      <h3>Bathrooms</h3>
                  </div>
                  <div className='essentials'>
                      <div className='quant'>
                  <BiArea/><p>400m</p>
                      </div>
                      <h3>Living Area</h3>
                  </div>     
              </div>
          </div>
   </div>
  )
}

export default PropCard