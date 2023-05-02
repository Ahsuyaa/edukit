import React from 'react'
import { Card } from 'flowbite-react'
import Logo from '../../images/logo.png'
const CommonCard = (props) => {

  return (
    <>
   
   
   
    <div className=' shadow-md relative group'>
    <img className='h-40 w-full md:h-60' src={props.imgsrc}/>
    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      {props.title}
    </h3>
    
    <p className=" absolute group-hover:text-[#1a2649] font-bold tracking-tight text-gray-500 dark:text-white">
      {props.description}
    </p>
  </div>

 

     


    
     
 </>
  )
}

export default CommonCard