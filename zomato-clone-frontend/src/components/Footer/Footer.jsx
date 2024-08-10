import React from 'react'
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vitae asperiores numquam culpa in pariatur alias, quia incidunt officiis qui at sunt sed saepe neque blanditiis commodi repellendus vel et.</p>
            </div>
            <div className="footer-content-center">
                
            </div>
            <div className="footer-content-right">

            </div>
        </div>
    </div>
  )
}

export default Footer