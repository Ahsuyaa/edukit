import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../../images/logo.png'
const Nav =()=>
{
    const [nav,setNav] = useState(false);
    const handleClick =()=>setNav(!nav)



  return (
    <>
  
    <div className=' z-10  fixed top-0  w-full h-[100px] flex justify-between items-center bg-[#BDBDBD] md:px-2'>
        <div>
        
            <img src={Logo} alt="" style={{width:'100px'}}/>
           
        </div>
        <div>
            <ul className=' hidden md:flex flex px-2 py-2 text-white'>
                <li className='m-5'>Home</li>
                <li className='m-5'>Training</li>
                <li className='m-5'>Coaching</li>
                <li className='m-5'>FAQ</li>
                <li className='m-5'>Career</li>
                <li className='m-5'>Blogs</li>
                <li className='m-5'>Contact Us</li>
            </ul>
         
        </div>
        <div className='hidden md:flex '>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800
       focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5
        mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:
        focus:ring-blue-800 md:py-1 md:px-2 md:text-xs lg:px-4 lg:py-2 lg:text-sm">Send Enquiry</button>
        </div>
     
        
        <div  onClick ={handleClick} className='text-white md:hidden z-50 sm:ml-96 ml-48! '>
            
            {!nav?   <FaBars/>:<FaTimes/>}
        </div>
        <div>
            <ul className={!nav?'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center '}>
                <li className='py-2 text-4xl text-white'>Home</li>
                <li className='py-2 text-4xl text-white'>Training</li>
                <li className='py-2 text-4xl text-white'>Coaching</li>
                <li className='py-2 text-4xl text-white'>FAQ</li>
                <li className='py-2 text-4xl text-white'>Career</li>
                <li className='py-2 text-4xl text-white'>Blogs</li>
                <li className='py-2 text-4xl text-white'>Contact Us</li>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800
       focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5
        mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:
        focus:ring-blue-800 ">Send Enquiry</button>
            </ul>
            
        </div>
   
      </div>
    
    </>
  )
}

export default Nav