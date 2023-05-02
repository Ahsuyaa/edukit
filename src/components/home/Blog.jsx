import React from 'react'
import { Button, Card } from 'flowbite-react'
import Logo from '../../images/logo.png'
import CommonCard from '../Common/CommonCard'
import Bdata from '../../data/Bdata'
import Rdata from "../../data/Rdata"
import RecentBlog from '../Common/RecentBlog'

const Blog = () => {
  return (

    <>
    <div className=" mt-10 mb-10 md:mt-24   text-3xl text-center text-[#1a2649] font-semibold">
       Our  Blog
      </div>
   <div className="grid md:grid-cols-3 sm:grid-cols-2  gap-5 px-10 md:px-20  ">
     
        {
          Bdata.map((val,ind)=>
          {
            return <CommonCard key={ind}
             imgsrc={val.imgSrc}
          
              description={val.description}/>
          }
          )
        }
      
      <div className="grid grid-rows-3 gap-4">
      {
          Rdata.map((val,ind)=>
          {
            return <RecentBlog key={ind} imgsrc={val.imgSrc} title={val.title}/>
          }
          )
        }

   
     </div>
     
      
    </div>
    <div className='flex justify-center mt-10'>
    <Button className='bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br' >View All</Button>
    </div>
    </>
  )
}

export default Blog