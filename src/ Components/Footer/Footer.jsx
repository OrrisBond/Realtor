import React from 'react'
import './Footer.css'
import footIcon from './360_F_521570502_jcHPUS0EGZ6nZSLVzs8gFEH9vo8F7f0Q.jpg'
import {FaTwitter, FaFacebookF , FaGooglePlusG, FaLinkedin, FaYoutube} from 'react-icons/fa'


const Footer = () => {

  const date = new Date().getFullYear()
  return (
    <footer>
        <div className="footer-content">
            <h3>Micro Genesis</h3>
            <p>We are here to buy sell and rent out Properties</p>
            <ul class="socials">
                <li><a href="#"><FaFacebookF className='icon-footer'/></a></li>
                <li><a href="#"><FaTwitter className='icon-footer'/></a></li>
                <li><a href="#"><FaGooglePlusG className='icon-footer'/></a></li>
                <li><a href="#"><FaYoutube className='icon-footer'/></a></li>
                <li><a href="#"><FaLinkedin className='icon-footer'/></a></li>
            </ul>
        </div>
        <div class="footer-bottom">
        <img src={footIcon} alt="" style={{height: '150px', width: '50%'}}/>
      <img src={footIcon} alt="" style={{height: '150px', width: '50%'}}/>
            <p>copyright &copy; {date} <a href="#">Micro Genesis</a>  </p>
                    <div class="footer-menu">
                      <ul class="f-menu">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Blog</a></li>
                      </ul>
                    </div>
        </div>
      
    </footer>
  )
}

export default Footer