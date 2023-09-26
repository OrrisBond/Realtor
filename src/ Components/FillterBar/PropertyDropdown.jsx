import React, { useState, useEffect, useContext } from 'react';
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react'
import {HouseContext} from './HouseContextProvider'

const PropertyDropdown = () => {

  const { property, setProperty, properties, handleClicked } = useContext(HouseContext)
  const [isOpen, setIsOpen] = useState(false)
  return <Menu as='div' className='dropdown' >
    <Menu.Button onClick={()=>setIsOpen(!isOpen)} className=' dropdown-btn' >
      <RiHome5Line className='dropdown-icon' />
      <div className='container-dropdown'>
        <div className='selector'>
        <div >{property }</div>
        <div >Select your place</div>
        </div>
        {isOpen ? ( <RiArrowUpSLine className='dropdown-icon'/> ): ( 
          
         <RiArrowDownSLine className = 'dropdown-icon'/>)}

      </div>
    </Menu.Button>
    <Menu.Items className='dropdown-menu'>
      {properties.map((property, index) => {
        return (
          <Menu.Item as='li' key={index}
            onClick={() => {
              setProperty(property)
              handleClicked()
            }}

            className='cursor-pointer hover:text-orange-400 transition'>
            {property}
          </Menu.Item>
        )
      })}
    </Menu.Items>
  </Menu>;
};

export default PropertyDropdown;
