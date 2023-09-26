import React from 'react'
import NavBar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Contact.css'
import { HiOfficeBuilding, } from 'react-icons/hi'
import {MdCall, MdEmail} from 'react-icons/md'

const Contact = () => {
  return (
    <div  className="contact-page">
        <NavBar />
        <div className='contact-hero'>
              <h1>Contact Us</h1>
           </div>
        <section>
        <div className='parent'>
        <div>
          <iframe style={{border:'0', width: '100%', height: '340px'}} src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15501.752838782279!2d3.408747687254248!3d6.7236457122245605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1skilometer%2012%20off%20Lagos-%20Ibadan%20express%20way.%20Beside%20mfm%20prayer%20city.%20Magboro.%20Ogun%20State!5e0!3m2!1sen!2sus!4v1691068106192!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='contact-wrapper'>
          <div className='contact-left'>
            <div className='left-sub'>
              <HiOfficeBuilding size={34}/>
              <div className='left-text-grp'>
                <h3>Office Address</h3>
                <p>klm 12 off, Lagos-Ibadan express way. Beside mfm prayer city. Magboro. Ogun State, Lagos Nigeria</p>
              </div>
            </div>
            <div className='left-sub'>
              <MdEmail size={20}/>
              <div className='left-text-grp'>
                <h3>Email</h3>
                <p>info@microgenesis.com</p>
              </div>
            </div>
            <div className='left-sub'>
              <MdCall size={20}/>
              <div className='left-text-grp'>
                <h3>Call</h3>
                <p>+12343212343234, +1234321234323</p>
              </div>
            </div>
          </div>
          <div className='contact-right'>
            <form action="">
              <div className='right-sub'>
                <input type="text" name="" id="name" placeholder='Your Name'/>
                <input type="email" name="" id="email" placeholder='Your Email'/>
              </div>
              <div className='right-sub'><input type="text" placeholder='Subject'/></div>
              <div className='right-sub'><textarea placeholder='Message'></textarea></div>
              <div className='right-sub'><input type="submit" value="Send Message" /></div>
            </form>
          </div>
        </div>
        </div>
        </section>
        <Footer />
    </div>
  )
}

export default Contact