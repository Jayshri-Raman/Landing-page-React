import React from 'react'
import Logo from "../assests/Logo.svg";
import { BsTwitter } from 'react-icons/bs';
import { AiFillLinkedin } from "react-icons/ai";
import { BsYoutube } from 'react-icons/bs';
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'>
                <img src={Logo} alt=""/>
            </div>
            <div className='footer-icons'>

                <BsTwitter/>
                <AiFillLinkedin/>
                <BsYoutube/>
                <FaFacebook/>

            </div>
        </div>

        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Support</span>
            </div>


            <div className='footer-section-columns'>
                <span>+91-968452369</span>
                <span>hellofoods@gmail.com</span>
                <span>Terms & Condition</span>
                <span>Privacy Policy</span>
            </div>


        </div>
      
    </div>
  )
}

export default Footer
