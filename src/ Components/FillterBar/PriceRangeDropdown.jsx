import React, { useState, useEffect, useContext } from 'react';
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react'
import {HouseContext} from './HouseContextProvider'

const PriceRangeDropdown = () => {
  const { price, handleClicked, setPrice } = useContext(HouseContext)
  const [isOpen, setIsOpen] = useState(false)

  const prices = [
    {
      value:'Price range (any)'
    },
    {
      value: '10000 - 30000'
    },
    {
      value: '30000 - 40000'
    },
    {
      value: '40000 - 50000'
    },
    {
      value: '100000 - 130000'
    },
    {
      value: '100000 - 130000'
    },
    {
      value: '130000 - 160000'
    },
    {
      value: '160000 - 190000'
    },
    {
      value: '190000 - 220000'
    },
    {
      value: '220000 - 250000'
    },
  ]
  return <Menu as='div' className='dropdown' >
    <Menu.Button onClick={()=>setIsOpen(!isOpen)} className=' dropdown-btn' >
      <RiWallet3Line className='dropdown-icon' />
      <div className='container-dropdown'>
        <div className='selector'>
        <div >{price}</div>
        <div>Choose your price </div>
        </div>
        {isOpen ? ( <RiArrowUpSLine className='dropdown-icon' />
          
          ) : ( <RiArrowDownSLine className='dropdown-icon'/> )}
      </div>
    </Menu.Button>
    <Menu.Items className='dropdown-menu'>
      {prices.map((price, index) => {
        return (
          <Menu.Item as='li' key={index}
            onClick={() => {
              setPrice(price.value)
              handleClicked()
            }}>
            {price.value}
          </Menu.Item>
        )
      })}
    </Menu.Items>
  </Menu>;
};

export default PriceRangeDropdown;
