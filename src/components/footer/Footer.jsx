import React from 'react'
import { Button } from 'flowbite-react'
import {FaFacebook,FaInstagram,FaTwitter}  from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import logo from "../../images/logo.png"
const Footer = () => {
  return (
   <>
   <div className='bg-[#050a30] p-10 mt-10'>
  

   
   <div class="grid  grid-cols-2  md:grid-cols-4  text-neutral-50 mb-2 ">
    
  <div className='mt-5'>
    <img  className="h-24 " src={logo} alt={"logo image"}/>

    <p className=' text-gray-400 flex text-justify text-sm md:text-lg'>
       yesma kei slogan lekhni ho

    </p>
  </div>
  <div className='text-center mt-5'>
    <h3 className='text-md md:text-xl'>Related Links</h3>
    <ul className='text-gray-400 text-sm md:text-lg' >
    <li>
        <NavLink to="/home" className="hover:text-white">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about" className="hover:text-white">About</NavLink>
      </li>
      <li>
        <NavLink to="/blog" className="hover:text-white">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/faq" className="hover:text-white">FAQ</NavLink>
      </li>
    
    </ul>
  </div>
  <div className='text-center mt-5'> 
  <h3 className='text-sm md:text-xl'>Contact Us</h3>
    <ul className='text-gray-400 text-lg'>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
        <li> lorem</li>
    </ul>
  </div>
  <div>
    <form className=''>
    <div className='socials flex   text-2xl  mt-5  '>
            <i className='icon  text-blue-600 mr-5'><FaFacebook/></i>
            <i className='icon text-rose-500 mr-5'><FaInstagram/></i>
            <i className='icon  text-blue-600 mr-5'><FaTwitter/></i>
        </div>
        <h3 className='mt-5 text-sm md:text-xl'>Newsletter Signup</h3>
      <input className='w-full mt-5' type="text" placeholder="your email address"/><br/>
  <Button className='mt-5 rounded-none px-5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br '>Submit</Button>
    </form>
  </div>
</div>
<hr/>
   <div className='text-white text-center mt-2'>
    Edu KIT @ 2023- All right Reserved by Aaisa
   </div>
   </div>
   </>
  )
}

export default Footer