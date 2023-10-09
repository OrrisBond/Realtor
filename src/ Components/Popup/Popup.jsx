import React from 'react'
import './Popup.css'
import { AiOutlineClose } from 'react-icons/ai'


const Popup = () => {
 
  return (
      <div className='transluscent'>
          <div className='m-cont'>
          <AiOutlineClose className='x-btn'/>
              <h1>More About This Property</h1>
              <h2>Email Us</h2>
              <div className='p-cont'>
                  
            <div className='p-details'>
             <img src="https://media.istockphoto.com/id/1281554848/photo/dream-home-luxury-house-success-suburban-house.webp?b=1&s=170667a&w=0&k=20&c=LHZ-3vBXAM_lu-cvruFkT12lO8KSxz1ZVCMo-d8rCI4=" alt="" />
             <h2>&#8358;450,670</h2>
             <p>Mobolaji Street, Crescent Dr, Lake View Estate</p>
            </div>

<form action="" className='p-form'>
    <input type="text"  placeholder='Full Name'/>
    <input type="email"  placeholder='Email'/>
    <input type="text" placeholder='Phone'/>
    <textarea />
    <button>Send Message</button>
</form>

</div>
          </div>
    </div>
  )
}

export default Popup