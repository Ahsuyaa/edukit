import React from 'react'
import {FaCode, FaFacebook,FaInstagram,FaLinkedinIn,FaPhone,FaPhoneAlt,FaTwitter, FaViber}  from 'react-icons/fa'
const head = () => {
  return (
   <>
   <div className=' top-0  w-full  h-10 bg-slate-900 flex justify-between '>
    <div className='py-2 pl-20 text-white flex animate-bounce delay-0'>
      <i className='icon  text-white mr-2 md:text-lg ' ><FaCode/></i>
      <h1 className='  text-center md:text-sm'>  Welcome to Edu Kit</h1>

    </div>
    
   <div className=' hidden socials md:flex  justify-end text-end  py-2 pl-24 '>
            <i className='icon  text-blue-500 mr-5 md:text-lg '><FaFacebook/></i>
            <i className='icon text-rose-400 mr-5 md:text-lg '><FaInstagram/></i>
            <i className='icon  text-blue-500 mr-5 md:text-lg '><FaTwitter/></i>
            <i className='icon text-purple-600 mr-5 md:text-lg '><FaViber/></i>
            <i className='icon  text-blue-500 mr-5 md:text-lg '><FaLinkedinIn/></i>
            <p className='text-red-700 text-center md:text-sm mr-5 '>Apply Online</p>
          
        </div>
 
 
   </div>
   </>
  )
}

export default head