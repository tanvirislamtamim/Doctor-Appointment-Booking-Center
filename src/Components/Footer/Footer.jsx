import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='mx-auto flex flex-col items-center '>
            <div className='flex items-center'>
                <img src="logo.png" alt="" />
                <h2 className='btn btn-ghost text-xl'>Phudu</h2>
            </div>
            <ul className="menu menu-horizontal px-1 gap-4 mt-1">
                  <Link to="/">Home</Link>
                  <Link to="/my-bookings">My-Bookings</Link>
                  <Link to="/blogs">Blogs</Link>
                  <Link to="/contact-us">Contact Us</Link>
                </ul>
            <div className="border-t-2 border-gray-300 m-3  px-80">
  
</div>
            <div className='flex items-center mb-10 gap-3'>
                <a href="https://www.youtube.com/" target="_blank">
                    <img className='w-8' src="youtube.png" alt="YouTube" />
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                    <img className='w-8' src="fb.png" alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                    <img className='w-8 p-1' src="instagram.png" alt="Instagram" />
                </a>
                <a href="https://www.whatsapp.com/" target="_blank">
                    <img className='w-8' src="whatsApp.png" alt="WhatsApp" />    
                </a>

                
            </div>
        </div>
    );
};

export default Footer;