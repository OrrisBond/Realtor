import React from 'react';
import {BiBed , BiBath , BiArea} from 'react-icons/bi'

const House = ({ house,Popup }) => {
  const { type, country, address, bedrooms, bathrooms, surface, price} = house
  return <div className='house-cont'  >
          <div className='image-cont' >
              <h3>New 10hrs ago</h3>
              <img src="https://media.istockphoto.com/id/1281554848/photo/dream-home-luxury-house-success-suburban-house.webp?b=1&s=170667a&w=0&k=20&c=LHZ-3vBXAM_lu-cvruFkT12lO8KSxz1ZVCMo-d8rCI4=" alt="" />
         </div>
          <div className='details'>
              <div className='badges'>
                  <h3>{type}</h3>
                  <h3>{country}</h3>
              </div>
              <div className='top'>
                  <h2>&#8358; {price}</h2>
        <p>{address }</p>
              </div>
              <div className='bottom'>
                  <div className='essentials'
                  ><div className='quant'>
                      <BiBed/><p>{bedrooms}</p>
                  </div>
                      <h3>Bedrooms</h3>
                  </div>
                  <div className='essentials'>
                      <div className='quant'>
            <BiBath /><p>{bathrooms }</p>
                      </div>
                      <h3>Bathrooms</h3>
                  </div>
                  <div className='essentials'>
                      <div className='quant'>
            <BiArea /><p>{surface }</p>
                      </div>
                      <h3>Living Area</h3>
                  </div>     
              </div>
          </div>
   </div>
};

export default House;
