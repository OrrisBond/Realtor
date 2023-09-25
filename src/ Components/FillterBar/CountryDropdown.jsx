import React, { useState, useEffect, useContext } from 'react';
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react'
import { HouseContext } from './HouseContextProvider'
import './Search.css'

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext)
  const [isOpen, setIsOpen] = useState(false)
  return <Menu as='div' className='dropdown relative' >
    <Menu.Button onClick={()=>setIsOpen(!isOpen)} className='dropdown-btn'>
      <RiMapPinLine className='dropdown-icon-primary' />
      <div className='container-dropdown'>
        <div className='selector'>
        <div className='text-[15px] font-medium leading-tight'>{country}</div>
        <div className='text-[13px]'>Select your place</div>
        </div>
        {isOpen ? (<RiArrowUpSLine className='dropdown-icon-secondary'/>) : (<RiArrowDownSLine className='dropdown-icon-secondary'/>)}
      </div>
    </Menu.Button>
    <Menu.Items className='dropdown-menu'>
      {countries.map((country, index) => {
        return (
          <Menu.Item as='li' key={index}
            onClick={()=>setCountry(country)}>
            {country}
          </Menu.Item>
        )
      })}
    </Menu.Items>
  </Menu>;
};

export default CountryDropdown;
