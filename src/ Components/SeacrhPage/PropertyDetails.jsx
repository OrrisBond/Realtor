import React from 'react';

import { housesData } from '../data'

import { useParams } from 'react-router-dom'

import { BiBed, BiBath, BiArea , BiSolidChevronsLeft} from 'react-icons/bi'

import {Link} from 'react-router-dom'

const PropertyDetails = () => {

  const { id } = useParams()
  
  const house = housesData.find(house => {
    return house.id === parseInt(id)
  })
  return <section>
    <div >

      <div >
        <div>
          <h2>{house.name}</h2>
          <h3 >{house.address}</h3>
        </div>
        <div>
          <div className='bg-orange-300 text-white px-3 rounded-full'>{house.type }</div>
          <div className='bg-blue-500 text-white px-3 rounded-full'>{house.country}</div>
        </div>
        <div>
          <div className='text-3xl font-semibold text-blue-600'>
            ${house.price }
          </div>
        </div>
      </div>
      <div className='flex flex-col items-start gap-8 lg:flex-row'>
        <div className='max-w-[768px]'>
          <div className='mb-8'>
            <img src={house.imageLg} alt="" />
          </div>
          <div className='flex gap-x-6 text-blue-500 mb-6'>
            <div className='flex gap-x-2 items-center'>
              <BiBed  className='text-2xl '/>
              <div>{house.bedrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiBath className='text-2xl'/>
              <div>{house.bathrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiArea className='text-2xl'/>
              <div>{house.surface}</div>
            </div>
          </div>
          <div>{house.description }</div>
        </div>
        <div className='flex-1 bg-white-100 w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
          <div className='flex items-center gap-x-4 mb-8'>
            <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
              <img src={house.agent.image} alt="" />
            </div>
            <div> 
              <div className='font-bold text-lg'>
              {house.agent.name}
              </div>
              <Link to='/property' className='text-blue-700 text-sm'>Go Back</Link>
            </div>
            
          </div>
          <form className='flex flex-col gap-y-4'>
            <input className='border border-gray-300 focus:border-blue-700 outline-none rounded w-full px-4 h-14 text-sm' type="text" placeholder='Name' />
            
            <input className='border border-gray-300 focus:border-blue-700 outline-none rounded w-full px-4 h-14 text-sm' type="text"  placeholder='Email'/>
            <input className='border border-gray-300 focus:border-blue-700 outline-none rounded w-full px-4 h-14 text-sm' type="text"  placeholder='Phone'/>
            <textarea className='border border-gray-300 focus:border-blue-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400' placeholder='Message'
            defaultValue="Hello I'm intrested in This place"></textarea>
            <div>
              <button className='bg-blue-700 hover:bg-blue-800 text-white rounded p-4 text-sm w-full transition'>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>;
};

export default PropertyDetails;
